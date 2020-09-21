const express = require("express");
const { req, res } = require("express");
const router = express.Router();

const mongoose = require("mongoose");

//models
const Admin = mongoose.model("Admin");
const User = mongoose.model("User");
const Student = mongoose.model("Student");
const Message = mongoose.model("Message");
const Counselling = mongoose.model("Counselling");

//jwt
const jwt = require("jsonwebtoken");
const { JWT_USER, JWT_ADMIN, JWT_STUDENT } = require("../config/keys");

//middlewares
const requireUser = require("../middleware/requireUser");
const requireAdmin = require("../middleware/requireAdmin");

//hashed password
const bcrypt = require("bcryptjs");

//node mailer
const nodemailer = require('nodemailer');
const { EMAIL,PASS } = require("../config/keys");
const { ConnectionPolicyInstance } = require("twilio/lib/rest/voice/v1/connectionPolicy");

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: EMAIL,
        pass: PASS
    }
}) 

router.post("/send-mail", (req, res) => {
  const { parentname, phone, tuition } = req.body;
  if (!parentname) {
    return res.status(422).json({ parentname: "Please enter name" });
  }
  if (!phone) {
    return res.status(422).json({ phone: "Please enter phone number" });
  }
  if (!tuition) {
    return res.status(422).json({ tuition: "Please enter tuition" });
  }
  const counselling = new Counselling({
    parentname,
    phone,
    tuition
  });
  counselling
    .save()
    .then((mail) => {
      transporter.sendMail({
        to: "resillience.in@gmail.com",
        from: EMAIL,
        subject: "New Counselling alert!",
        html: `Hey! ${parentname} asked for free counselling of ${tuition}, <br /> with Mobile no. ${phone}`
      });
      res.json({ message: "Team Resillience will contact you soon!" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

router.post('/send-message', (req,res)=>{
  const { name, email, phone, text } = req.body;
  if (!name) {
    return res.status(422).json({ name: "Please enter name" });
  }
  if (!email) {
    return res.status(422).json({ email: "Please enter email" });
  }
  if (!text) {
    return res.status(422).json({ text: "Please write message!! " });
  }
  const message = new Message({
    name,
    email,
    phone,
    text
  })
    message
      .save()
      .then((message)=>{
        transporter.sendMail({
          to:'resillience.in@gmail.com',
          from: EMAIL,
          subject:`A new message from ${name}, and ${email}`,
          html:`Hey, ${text}<br /> from phone no: ${phone}`
        })
        res.json({ message: "Team Resillience will contact you soon!" });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ error: err });
      });
})

router.post('/admin/signup', (req,res) => {
  const { name, email, password } = req.body;

  if (!name) {
    return res.status(422).json({ name: "Please add name" });
  }
  if (!email) {
    return res.status(422).json({ email: "Please add email" });
  }
  if (!password) {
    return res.status(422).json({ password: "Please add password" });
  }

  Admin.findOne({email}).then((savedAdmin) => {
    if (savedAdmin) {
      return res.status(422).json({ error: "This Admin already exists" });
    }
    bcrypt.hash(password, 12).then((encryptedPassword) => {
      const admin = new Admin({
        name,
        email,
        password: encryptedPassword
      });

      admin
        .save()
        .then((admin) => {
          res.json({ message: "Admin added!" });
        })
        .catch((err) => {
          console.log(err);
          res.status(500).json({ error: err });
        });
    });
  });
});

router.post('/user/signup', (req,res) => {
  const { name, email, password } = req.body;

  if (!name) {
    return res.status(422).json({ name: "Please add name" });
  }
  if (!email) {
    return res.status(422).json({ email: "Please add email" });
  }
  if (!password) {
    return res.status(422).json({ password: "Please add password" });
  }
  User.findOne({email}).then((savedUser) => {
    if (savedUser) {
      return res.status(422).json({ error: "This User already exists" });
    }
    bcrypt.hash(password, 12).then((encryptedPassword) => {
      const user = new User({
        name,
        email,
        password: encryptedPassword
      });

      user
        .save()
        .then((user) => {
          res.json({ message: "User added!" });
        })
        .catch((err) => {
          console.log(err);
          res.status(500).json({ error: err });
        });
    });
  });
});

router.post('/student/signup', (req,res)=>{
  const { name, email, password, batch, contact, parentContact, fname, address, picture, phy, chem, math, bio } = req.body;
  if (!name) {
    return res.status(422).json({ name: "Please add name" });
  }
  if (!email) {
    return res.status(422).json({ email: "Please add email" });
  }
  if (!password) {
    return res.status(422).json({ password: "Please add password" });
  }
  if (!contact) {
    return res.status(422).json({ contact: "Please add mobile number" });
  }
  Student.findOne({email}).then((savedStudent) =>{
    if(savedStudent){
      return res.status(422).json({error: "The student already exists"});
    }
    bcrypt.hash(password, 12).then((encryptedPassword) => {
      const student = new Student({
        name,
        email,
        password: encryptedPassword,
        batch,
        contact,
        parentContact,
        fname,
        address,
        picture,
        phy,
        chem,
        math,
        bio
      });

      student
        .save()
        .then((student)=> { 
          // sending enrollment mail to student 
          transporter.sendMail({
            to: student.email,
            from: EMAIL,
            subject:"Enrollment Successful!",
            html: `<h2>Hello ${student.name},</h2>
                  you're successfully enrolled for batch ${student.batch}. <br />Regards!,
                  <br />Team Resillience.`
          })
          res.json({ message: "Student added!" });
        })
        .catch((err) => {
          console.log(err);
          res.status(500).json({ error: err });
        });
    });
  });
});

router.post('/admin/signin', (req,res) => {
  const { email, password } = req.body;

  if (!email) {
    return res.status(422).json({ email: "Please add email" });
  }
  if (!password) {
    return res.status(422).json({ password: "Please add password" });
  }
  Admin.findOne({ email }).then((savedAdmin) => {
    if (!savedAdmin) {
      return res.status(422).json({ error: "Invalid email or password" });
    } 
    bcrypt
      .compare(password, savedAdmin.password)
      .then((doMatch) => {
        if (doMatch) {
          // res.json({message:"Signin Successful!"})
          const token = jwt.sign({ _id: savedAdmin._id }, JWT_ADMIN);
          res.json({ token: token ,message: "Admin signed in successfully"});
        } else {
          return res.status(422).json({ error: "Invalid email or password" });
        }
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ error: err });
      });
  });
});

router.post('/user/signin', (req,res) => {
  const { email, password } = req.body;

  if (email == "") {
    return res.status(422).json({ email: "Please add email" });
  }
  if (password == "") {
    return res.status(422).json({ password: "Please add password" });
  }
  User.findOne({ email }).then((savedUser) => {
    if (!savedUser) {
      return res.status(422).json({ error: "Invalid email or password" });
    }
    bcrypt
      .compare(password, savedUser.password)
      .then((doMatch) => {
        if (doMatch) {
          // res.json({message:"Signin Successful!"})
          const token = jwt.sign({ _id: savedUser._id }, JWT_USER);
          res.json({ token: token, message: "User signed in successfully" });
        } else {
          return res.status(422).json({ error: "Invalid email or password" });
        }
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ error: err });
      });
  });
});

router.post('/student-signin', (req,res) => {
  const { email, password } = req.body;

  if (email == "") {
    return res.status(422).json({ email: "Please add email" });
  }
  if (password == "") {
    return res.status(422).json({ password: "Please add password" });
  }
  Student.findOne({email:email})
    .then((savedStudent) => {
      if (!savedStudent) {
        return res.status(422).json({ error: "Invalid email or password" });
      }
      bcrypt.compare(password, savedStudent.password)
        .then((doMatch) => {
          if (doMatch) {
            // res.json({message:"Signin Successful!"})
            const token = jwt.sign({ _id: savedStudent._id }, JWT_STUDENT);
            const { _id, name, email, batch, contact, parentContact, fname, address, picture, phy, chem, math, bio } = savedStudent
            res.json({token, student:{ _id, name, email, batch, contact, parentContact, fname, address, picture, phy, chem, math, bio}});
          } 
          else {
            return res.status(422).json({ error: "Invalid email or password" });
          }
        })
        .catch((err) => {
          console.log(err);
          res.status(500).json({ error: err });
        });
    });
});

module.exports = router;
