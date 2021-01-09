const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Student = mongoose.model("Student");
const SubmitTest = mongoose.model("SubmitTest");
const requireStudent = require("../middleware/requireStudent");

router.get("/student-profile", requireStudent, (req, res) => {
	Student.findById(req.student._id)
		.select("-password")
		.then((details) => {
			res.json({ details });
		})
		.catch((err) => {
			console.log(err);
		});
});

router.put("/attempted-test", requireStudent, (req, res) => {
	const { id } = req.body;
	Student.findByIdAndUpdate(req.student._id, { $push: { attemptedTests: id } }, { new: true })
		.then(() => {
			return res.json({ message: "Attempted" });
		})
		.catch((err) => {
			return console.log(err);
		});
});

router.get("/test-result/:resultid", requireStudent, (req, res) => {
	SubmitTest.findById(req.params.resultid)
		.populate("testDetails")
		.then((details) => {
			return res.json({ details });
		})
		.catch((err) => {
			return console.log(err);
		});
});

router.put("/api/updateprofile-picture", requireStudent, (req, res) => {
	Student.findByIdAndUpdate(
		req.student._id,
		{ $set: { picture: req.body.picture } },
		{ new: true }
	).exec((err, result) => {
		if (err) {
			return res.status(422).json({ error: "Cant upload photo" });
		}
		res.json({ message: "Successfully updated!" });
	});
});

router.post("/submit-Test", requireStudent, (req, res) => {
	const { email, testId, testDetails, selectedOptions, timePerQuestion, visitedQuestion } = req.body;
	if (!email || !testId || !testDetails || !selectedOptions || !timePerQuestion) {
		return res.status(422).json({ error: "Can't submit!" });
	}
	const submitTest = new SubmitTest({
		email,
		testId,
		studentDetails: req.student._id,
		testDetails,
		selectedOptions,
		timePerQuestion,
		visitedQuestion,
	});
	submitTest
		.save()
		.then(() => {
			res.json({ message: "Submitted Result!" });
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json({ error: err });
		});
});

router.get("/attempted-tests", requireStudent, (req, res) => {
	// console.log(req.student);
	SubmitTest.find({ studentDetails: req.student._id })
		.populate("testDetails", "testId testName")
		.sort("-createdAt")
		.then((test) => {
			res.json({ test });
		})
		.catch((err) => {
			console.log(err);
		});
});

module.exports = router;
