const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Admin = mongoose.model("Admin");
const Student = mongoose.model("Student");
const SubmitTest = mongoose.model("SubmitTest");
const requireAdmin = require("../middleware/requireAdmin");

router.get("/admin-profile", requireAdmin, (req, res) => {
  Admin.findById(req.admin._id)
    .select("-password")
    .then((details) => {
      res.json({ details });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/enrolled-students", requireAdmin, (req, res) => {
  Student.find()
    .sort("-createdAt")
    .then((students) => {
      res.json({ students });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/student/:studentid", requireAdmin, (req, res) => {
  Student.findById(req.params.studentid)
    .select("-password")
    .then((student) => {
      res.json({ student });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/attempted-tests/:studentid", requireAdmin, (req, res) => {
  SubmitTest.find({ studentDetails: req.params.studentid })
    .populate("testDetails", "testId testName")
    .sort("-createdAt")
    .then((test) => {
      res.json({ test });
    })
    .catch((err) => {
      console.log(err);
    });
});
router.get("/attemptedtest-result/:resultid", requireAdmin, (req, res) => {
  SubmitTest.findById(req.params.resultid)
    .populate("testDetails")
    .then((details) => {
      return res.json({ details });
    })
    .catch((err) => {
      return console.log(err);
    });
});

router.patch("/update-student-details/:id", requireAdmin, (req, res) => {
  const { name, email, batch, contact, parentContact, fname, address } = req.body;
  const student = {
    name,
    email,
    batch,
    contact,
    parentContact,
    fname,
    address
  };
  Student.updateOne({ _id: req.params.id }, student).exec((err, result) => {
    if (err) {
      return res.status(422).json({ error: err });
    } else {
      res.json({ message: "Update Sucessful!" });
    }
  });
});

router.delete("/remove-student/:studentId", (req, res) => {
  Student.findOne({ _id: req.params.studentId }).exec((err, student) => {
    if (err || !student) {
      return res.status(422).json({ error: err });
    }
    student
      .remove()
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        console.log(err);
      });
  });
});

module.exports = router;
