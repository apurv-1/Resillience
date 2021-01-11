const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Notice = mongoose.model("Notice");
const requireStudent = require("../middleware/requireStudent");
const requireAdmin = require("../middleware/requireAdmin");

router.get("/all-notices", requireStudent, (req, res) => {
	Notice.find()
		.sort("-createdAt")
		.then((notice) => {
			res.json({ notice });
		})
		.catch((err) => {
			console.log(err);
		});
});

router.delete("/delete-notice/:noticeid", requireAdmin, (req, res) => {
	Notice.findByIdAndDelete(req.params.noticeid)
		.then(() => {
			res.json({ message: "Notice deleted!" });
		})
		.catch((err) => {
			return res.status(404).json({ error: err });
		});
});

router.post("/post-notice", requireAdmin, (req, res) => {
	const { title, description, link } = req.body;

	const notice = new Notice({
		title,
		description,
		link,
	});
	notice
		.save()
		.then(() => {
			res.json({ message: "Notice posted!" });
		})
		.catch((err) => {
			res.json({ error: err });
			console.log(err);
		});
});

module.exports = router;
