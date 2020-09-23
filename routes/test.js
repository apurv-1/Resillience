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

router.post('/addtest',(req,res)=>{
    const { testId, testName, questions } = req.body
    const test = new Test({
        testId,
        testName,
        questions
    })
    test
      .save()
      .then((result)=>{
          res.json({test:result})
      })
      .catch((err)=>{
          console.log(err)
      })
})

router.put('/add-question',(req,res)=>{
    const question ={
        questionImage:req.body.questionImage,
        correctOption:req.body.correctOption,
        questionType:req.body.questionType
    }
    Test.findByIdAndUpdate(req.body.testId,{
        $push:{questions:question}
    },{ 
        new:true 
    })
    .exec((err,result)=>{
        if(err){
            return res.status(422).json({error:err});
        }
        else{
            res.json(result)
        }
    })
})


router.get('/showtest',(req,res)=>{
    Test.findOne(req.body.testId)
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