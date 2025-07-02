const jwt = require('jsonwebtoken');

function auth(req, res, next) {
    try {
        const token = req.cookies.token;

        if (!token) {
            return res.status(401).json({
                message: "Unauthorized: No token provided",
            });
        }

        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = decoded;
        next();
    } catch (err) {
        return res.status(401).json({
            message: "Unauthorized: Invalid token",
        })
    }
}

module.exports = auth;