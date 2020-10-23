const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Student = mongoose.model("Student");
const requireStudent = require("../middleware/requireStudent");

router.get("/myprofile", requireStudent, (req, res) => {
	Student.find(req.student._id)
		.select("-password")
		.then((details) => {
			res.json({ details });
		})
		.catch((err) => {
			console.log(err);
		});
});

{
	/* not completed yet */
}
router.put("/editprofile", requireStudent, (req, res) => {
	Student.findByIdAndUpdate(req.student._id, {});
});

module.exports = router;
