const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Student = mongoose.model("Student");
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
	// Student.findById(req.student._id)
	// 	.then((attempted) => {
	// 		const ids = attempted.attemptedTests;
	// 		// console.log(attempted);
	// 		// console.log(ids);
	// 		ids.find(id).then((testid) => {
	// 			if (testid === id) {
	// 				return res.json({ message: "Already Attempted!" });
	// 			} else {
	// 				Student.findByIdAndUpdate(req.student._id, { $push: { attemptedTests: id } }, { new: true })
	// 					.then(() => {
	// 						return res.json({ message: "Attempted" });
	// 					})
	// 					.catch((err) => {
	// 						return console.log(err);
	// 					});
	// 			}
	// 		});
	// 		// for (let index = 0; index < ids.length; index++) {
	// 		// 	if (id === ids[index].toString()) {
	// 		// 		return res.json({ message: "Already Attempted!" });
	// 		// 	} else {
	// 		// 	}
	// 		// }
	// 	})
	// 	.catch((err) => {
	// 		console.log(err);
	// 	});
});

{
	/* not completed yet */
}
router.put("/editprofile", requireStudent, (req, res) => {
	Student.findByIdAndUpdate(req.student._id, {});
});

router.post("/submit-Test", requireStudent, (req, res) => {
	const { email, testId } = req.body;
	Student.findOne({ email }).then();
});

module.exports = router;
