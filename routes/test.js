const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const Test = mongoose.model("Test");
const requireUser = require("../middleware/requireUser");

router.get('/alltests',(req,res)=>{
    Test.find()
    .sort('-createdAt')
    .then(test=>{
        res.json({test})
    })
    .catch(err=>{
        console.log(err)
    })
})

// router.post('/addquestion',(req,res)=>{
//     const { questionId, questionImage, correctOption, questionType} = req.body
//     if(!questionId){
//      return  res.status(422).json({error:"Please give unique question ID"});
//     }
//     if(!questionImage){
//      return  res.status(422).json({error:"Please upload question"});
//     }
//     if(!correctOption){
//      return  res.status(422).json({error:"Please add correct option"});
//     }
//     if(!questionType){
//      return  res.status(422).json({error:"Please choose question type"});
//     }
//     const question = new Question({
//         questionId,
//         questionImage, //pic will be the variable name which will come from frontend
//         correctOption, // same in every case
//         questionType, // if same name then no need to add ":"
//         postedBy:req.user

//     })
//     question.save().then(ques=>{
//         res.json({message:"Question Added!"});
//     })
//     .catch(err=>{
//         console.log(err)
//     })
// })

module.exports = router;