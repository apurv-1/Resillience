const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    picture:{
        type: String,
        default: "https://res.cloudinary.com/rweb1/image/upload/v1599639734/resilience_default_lqmb3p.png"
    },
    password:{
        type: String,
        required: true
    }
})

mongoose.model("User",userSchema);