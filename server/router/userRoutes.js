const express = require('express');
const router = express.Router();
const userModel = require('../db/models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { validationResult, body } = require('express-validator');


router.post('/register',
    body('name').trim().isLength({ min: 2 }),
    body('email').trim().isEmail(),
    body('password').trim().isLength({ min: 5 })
    , async (req, res) => {
        const error = validationResult(req);
        if (!error.isEmpty()) {
            return res.status(400).json({
                message: "Please create a lengthy Password! ",
            })
        }

        try {
            const { name, email, password } = req.body;
            // check if same email is already exist 
            const existingUser = await userModel.findOne({ email });
            if (existingUser) {
                return res.status(400).json({
                    message: "User already Exist, please sign in"
                })
            }
            // now we will hash the password 
            const hashPass = await bcrypt.hash(password, 10);

            // save the new user
            const newUser = await userModel.create({
                name,
                email,
                password: hashPass,
            })

            res.status(200).json({
                message: "user registered successfully",
                
                status: true
            });
        } catch (error) {
            res.status(403).json({
                message: "error occured while sign up"
            })
        }
    }

)

router.post("/login",
    body('email').trim().isEmail(),
    body('password').trim().isLength({ min: 3 }),
    async (req, res) => {
        const error = validationResult(req.body);
        if (!error.isEmpty()) {
            return res.status(400).json({
                message: "Invalid Entries",
            })
        }

        try {
            const { email, password } = req.body

            //first check email 
            const user = await userModel.findOne({ email });
            if (!user) {
                return res.status(404).json({
                    message: "Invalid email or password"
                })
            }

            // encrypt the pass 
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(404).json({
                    message: "Invalid email or password"
                })
            }

            // if everything matched 
            const token = jwt.sign({
                userId: user._id,
                password: user.password,
            }, process.env.SECRET_KEY)

            res.cookie('token', token);
            // console.log(token);
            res.status(200).json({ message: "login successfully", status: true, user: { userId: user._id, name: user.name} })
        } catch (error) {
            res.status(403).json({ error: "error occured while login", status: false })
        }
    }
)

router.get('/getUserDetails', async (req, res) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            return res.status(200).json({ // just to not get error in colsole when user open app first time 
                message: "Not authenticated"
            });
        }
        // if token is there verify the token 
        const decode = jwt.verify(token, process.env.SECRET_KEY);
        const user = await userModel.findById(decode.userId).select("-password")

        if (!user) {
            return res.status(400).json({
                message: "User not found"
            })
        }

        res.status(200).json({
            status: true,
            user
        })
    } catch (error) {
        res.status(401).json({
            message: "Invalid token"
        })
    }

})

router.post("/logout", async(req,res)=>{
    res.cookie('token', '', { httpOnly: true, expires: new Date(0) });
    res.json({ message: 'Logged out successfully' });
})

module.exports = router; 