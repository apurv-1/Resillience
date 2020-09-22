const mongoose = require('mongoose');

const testSchema = new mongoose.Schema({
    testId:{
        type: Number,
        required: true,
        unique: true
    },
    question:[{
        questionImage:{
            type: String,
            required: true
        },
        correctOption:{
            type: Number,
            required: true
        },
        questionType:{
            type: String,
            required: true
        }    
    }],    
},{timestamps:true})


mongoose.model("Test",testSchema);