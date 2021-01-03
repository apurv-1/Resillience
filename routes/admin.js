const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Admin = mongoose.model("Admin");
const Student = mongoose.model("Student");
const User = mongoose.model("User");
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

router.get("/enrolled-students", (req, res) => {
	Student.find()
		.sort("-createdAt")
		.select("picture name batch")
		.then((students) => {
			res.json({ students });
		})
		.catch((err) => {
			console.log(err);
		});
});

router.get("/users", (req, res) => {
	User.find()
		.sort("-createdAt")
		.select("picture name")
		.then((users) => {
			res.json({ users });
		})
		.catch((err) => {
			console.log(err);
		});
});

router.get("/admin/:studentId", (req, res) => {
	Student.findById(req.params.studentId)
		.select("-password")
		.then((student) => {
			res.json({ student });
		})
		.catch((err) => {
			console.log(err);
		});
});

router.get("/admin/user/:userId", (req, res) => {
	User.findById(req.params.userId)
		.select("-password")
		.then((user) => {
			res.json({ user });
		})
		.catch((err) => {
			console.log(err);
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
