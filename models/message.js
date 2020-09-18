const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    phone:{
        type: String,
    },
    text:{
        type: String,
        required: true
    }
})

mongoose.model("Message",messageSchema);