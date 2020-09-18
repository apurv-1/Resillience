const express = require("express");
const router = express.Router();
const twilio = require('twilio');
const { serviceID, accountSID, authToken } = require("../config/keys");


router.get('/sendotp',(req,res)=>{
    twilio(accountSID, authToken)
        .verify
        .services(serviceID)
        .verifications
        .create({
            to: `+${req.query.phonenumber}`,
            channel: req.query.channel,
        })
        .then((data)=>{
            res.status(200).send(data)
        })
})

router.get('/verify',(req,res)=>{
    twilio(accountSID, authToken)
        .verify
        .services(serviceID)
        .verificationChecks
        .create({
            to: `+${req.query.phonenumber}`,
            code: req.query.code
        })
        .then((data)=>{
            res.status(200).send(data)
        })
})

module.exports = router;