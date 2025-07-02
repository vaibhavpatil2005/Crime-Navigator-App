const express = require("express"); 
const app = express(); 
const cors = require("cors"); 
const dotenv = require("dotenv"); 
const cookieParser = require("cookie-parser")
dotenv.config(); 


const accountRoutes = require('./router/userRoutes'); 



// db connection 
const connectDB = require('./db/connection/config')
connectDB(); 


app.use(express.json()); 
app.use(cookieParser()); 
app.use(cors({
    origin: 'http://localhost:5173', // Allow requests from this origin
    credentials: true, // Enable credentials sharing (cookies, etc.)
}));

// routes 
app.use('/user', accountRoutes); 

const port = process.env.PORT 
app.listen(port || 4044);
