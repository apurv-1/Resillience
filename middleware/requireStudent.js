const jwt = require('jsonwebtoken');
const {JWT_STUDENT} = require('../config/keys')

//mongoDB
const mongoose = require('mongoose');
const Student = mongoose.model("Student");

module.exports = (req,res,next)=>{
    const {authorization} = req.headers;

    // authorization === Bearer qpmcskjvbhjdfziod
    if(!authorization){
        return res.status(401).json({error:"Student must be logged in!"})
    }
    const token = authorization.replace("Bearer ","");

    jwt.verify(token, JWT_STUDENT, (err,payload) =>{
        if(err) {
            return res.status(401).json({error:"Student must be logged in!"})
        }

        const {_id} = payload;
        Student.findById(_id).then(studentdata=>{
            req.student = studentdata
            next()
        })
    })

}