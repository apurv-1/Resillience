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
        testName
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
    const testId = req.body.testId ;
    const question = {
        questionImage:req.body.questionImage,
        correctOption:req.body.correctOption,
        questionType:req.body.questionType
    };
    // console.log(req.query)
    Test.findOneAndUpdate(testId,{
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
    const testId = req.body.testId ;
    // console.log(testId)
    Test.findOne({test:testId})
    // .populate("testId","testName questions[]")
    // .then(test=>{
    //     Test.find()
        // .populate("test","testId testName questions")
    // .exec((err,questions)=>{
    //         if(err){
    //             return res.status(422).json({error:err})
    //         }
    //         res.json({test,questions})
        // })
    // })
    // .populate("questions._id","questionImage correctOption questionType")
    .then(tests=>{
        Test.findOne({testId})
        .exec((err,test)=>{
            if(err){
                return res.status(422).json({error:err})
            }
            res.json({test})
        })
    })
    .catch(err=>{
        return res.status(404).json({error:"Test not found"})
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