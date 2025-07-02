const mongoose = require('mongoose'); 

function connnectToDB(){
    try {
        mongoose.connect(process.env.MONGO_URI).then(()=>{
            console.log('Connected to DB'); 
        })
    } catch (error) {
        console.log("error occurred while connectiong to db") ;
    }
}

module.exports = connnectToDB; 
