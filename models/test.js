const mongoose = require('mongoose');

const testSchema = new mongoose.Schema({
    testId:{
        type: String,
        required: true,
        unique: true
    },
    testName:{
        type: String,
        required: true
    }, 
    questions:[{
        questionNumber:{
            type: Number,
            required: true,
            unique: true
        },
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