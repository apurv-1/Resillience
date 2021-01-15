const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Blog = mongoose.model("Blog");
const requireAdmin = require("../middleware/requireAdmin");

router.get("/blogs", (req, res) => {
	Blog.find()
		.sort("-createdAt")
		.then((blogs) => {
			res.json({ blogs });
		})
		.catch((err) => {
			console.log(err);
		});
});

router.get("/blogs/:id", (req, res) => {
	Blog.findOne({ _id: req.params.id })
		.then((blog) => {
			res.json({ blog });
		})
		.catch((err) => {
			return res.status(404).json({ error: "Blog not found" });
		});
});

router.post("/createblogs", requireAdmin, (req, res) => {
	const { heading, date, description, content, picture } = req.body;

	if (heading == "") {
		return res.status(422).json({ heading: "Please add heading" });
	}
	if (description == "") {
		return res.status(422).json({ description: "Please add description" });
	}
	if (date == "") {
		return res.status(422).json({ date: "Please add date" });
	}

	const blog = new Blog({
		heading,
		date,
		description,
		content,
		picture,
	});

	blog
		.save()
		.then((blog) => {
			res.json({ message: "Blog added successfully!" });
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json({ error: err });
		});
});

module.exports = router;

// Output of getting blogs

// {
//   "blogs": [
//       {
//           "_id": "5f5a3940aa77ca2ffc9cd2aa",
//           "heading": "Personalized learning a new & effective learning",
//           "date": "26 Aug 2020",
//           "description": "Come and join below with the link",
//           "content": "<blockquote>Hello</blockquote><blockquote class=\"ql-align-center\"><em>Yes i am fine</em></blockquote>",
//           "createdAt": "2020-09-10T14:33:36.310Z",
//           "updatedAt": "2020-09-10T14:33:36.310Z",
//           "__v": 0
//       }
//   ]
// }
