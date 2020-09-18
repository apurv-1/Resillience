const mongoose = require('mongoose');
const Question = require("./questions");
// const {questionImage} = mongoose.Schema.Types;

const testSchema = new mongoose.Schema({
    testId:{
        type: Number,
        required: true,
        unique: true
    },
    numberOfQ:{
        type: Number,
        required: true
    },
    ques:[{
        questionText:Question.questionImage,
        correctOption:Question.correctOption,
        questionType:Question.questionType        
    }],

},{timestamps:true})


mongoose.model("Test",testSchema);
