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
    const testId = req.body.testId 
    const question = {
        questionImage:req.body.questionImage,
        correctOption:req.body.correctOption,
        questionType:req.body.questionType
    }
    Test.findOneAndUpdate({testId:testId},{
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
    const testId = req.query.testid ;
    // console.log(req.query)
    Test.findOne({testId})
    .then(test=>{
        res.json({test})
    })
    .catch(err=>{
        return res.status(404).json({error:"Test not found"})
    })
})

module.exports = router;