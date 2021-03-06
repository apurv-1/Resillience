const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Test = mongoose.model("Test");
const requireStudent = require("../middleware/requireStudent");
const requireAdmin = require("../middleware/requireAdmin");

router.get("/alltests", requireAdmin, (req, res) => {
	Test.find()
		.sort("-createdAt")
		.select("-questions")
		.then((test) => {
			res.json({ test });
		})
		.catch((err) => {
			console.log(err);
		});
});
router.get("/alltests/:id", requireAdmin, (req, res) => {
	Test.findById(req.params.id)
		.then((test) => {
			res.json({ test });
		})
		.catch((err) => {
			return res.status(404).json({ error: "Test Not found!" });
		});
});

router.delete("/delete-test/:testid", requireAdmin, (req, res) => {
	Test.findByIdAndDelete(req.params.testid)
		.then(() => {
			res.json({ message: "Test deleted!" });
		})
		.catch((err) => {
			return res.status(404).json({ error: err });
		});
});

router.post("/createtest", requireAdmin, (req, res) => {
	const {
		testId,
		testName,
		testDuration,
		noOfQuestions,
		testType,
		forCorrect,
		forInCorrect,
		testLevel,
		syllabus,
	} = req.body;
	Test.findOne({ testId }).then((savedTest) => {
		if (savedTest) {
			return res.status(422).json({ error: "The TestId already exists" });
		}
		const test = new Test({
			testId,
			testName,
			testDuration: 60000 * testDuration,
			testType,
			syllabus,
			testLevel,
			forCorrect,
			forInCorrect,
			noOfQuestions,
		});
		test
			.save()
			.then((result) => {
				res.json({ message: "Test Created!" });
			})
			.catch((err) => {
				res.json({ error: err });
				console.log(err);
			});
	});
});

router.put("/add-question", requireAdmin, (req, res) => {
	const { testId, questionImage, questionNumber, correctOption, subject, difficuilty } = req.body;
	const question = {
		questionNumber,
		questionImage,
		correctOption,
		difficuilty,
		subject,
	};
	// console.log(question);
	Test.findOneAndUpdate(
		{ testId: testId },
		{
			$push: { questions: question },
		},
		{
			new: true,
		}
	).exec((err, result) => {
		if (err) {
			return res.status(422).json({ error: err });
		} else {
			res.json(result);
		}
	});
});

// router.put("/update-question/:id", requireAdmin, (req, res) => {
// 	const { index, questionNumber,questionImage,correctOption,difficuilty,subject } = req.body;
// 	const question = {
// 		questionNumber,
// 		questionImage,
// 		correctOption,
// 		difficuilty,
// 		subject,
// 	};
// 	// console.log(question);
// 	Test.findByIdAndUpdate({_id:req.params.id},{
// 		$set:{questions[index]:question}
// 	}
// 	).exec((err, result) => {
// 		if (err) {
// 			return res.status(422).json({ error: err });
// 		} else {
// 			res.json(result);
// 		}
// 	});
// });

router.get("/fetchtest", requireStudent, (req, res) => {
	const testId = req.query.testid;
	Test.findOne({ testId: testId })
		.then((test) => {
			// console.log(test);
			if (test === null) {
				return res.status(422).json({ error: "The Test ID is Invalid " });
			} else {
				res.json({ test });
			}
		})
		.catch((err) => {
			return res.status(404).json({ error: "Test not found" });
		});
});
router.get("/fetch-public-test", (req, res) => {
	const testId = req.query.testid;
	Test.findOne({ testId: testId })
		.then((test) => {
			// console.log(test);
			if (test === null) {
				return res.status(422).json({ error: "The Test ID is Invalid " });
			} else {
				res.json({ test });
			}
		})
		.catch((err) => {
			return res.status(404).json({ error: "Test not found" });
		});
});

module.exports = router;

// router.put("/add-question", (req, res) => {
// 	const { testId, questionType } = req.body;
//
// 	if (questionType == "singleCorrect") {
// 		const { questionNumber, questionId, questionImage, correctOption } = req.body;
// 		const singleCorrectQuestions = new SingleCorrect({
// 			questionNumber,
// 			questionType,
// 			questionImage,
// 			correctOption,
// 		});
// 		singleCorrectQuestions.save().catch((err) => {
// 			console.log(err);
// 		});
//
// 		// console.log({ singleCorrectQuestions });
// 		// const question = {
// 		// 	questionNumber: questionNumber,
// 		// 	questionType: questionType,
// 		// 	singleCorrectQuestions: singleCorrectQuestions,
// 		// };
// 		Test.findOneAndUpdate(
// 			{ testId: testId },
// 			{
// 				$push: {
// 					questions: singleCorrectQuestions,
// 				},
// 			},
// 			{
// 				new: true,
// 			}
// 		)
// 			// .populate("singleCorrectQuestions")
// 			.then((test) => {
// 				res.json({ test });
// 			})
// 			.catch((err) => {
// 				console.log(err);
// 			});
// 		// .exec((err, result) => {
// 		// 	if (err) {
// 		// 		return res.status(422).json({ error: err });
// 		// 	} else {
// 		// 		res.json(result);
// 		// 	}
// 		// });
// 	} else if (questionType == "multipleCorrect") {
// 		// const { one, two, three } = req.body.correctOption;
// 		var correctOption = correctOption[(one, two, three)];
// 		console.log(correctOption);
// 		const {
// 			questionNumber,
// 			questionType,
// 			questionImage,
// 			correctOption: [one, two, three],
// 		} = req.body;
// 		// const question = {
// 		// 	questionImage: questionImage,
// 		// 	correctOptionOne: correctOptionOne,
// 		// 	correctOptionTwo: correctOptionTwo,
// 		// 	correctOptionThree: correctOptionThree,
// 		// };
// 		const multipleCorrectQuestions = new MultipleCorrect({
// 			questionNumber,
// 			questionType,
// 			questionImage,
// 			correctOption,
// 		});
// 		// console.log({ multipleCorrect });
// 		Test.findOneAndUpdate(
// 			{ testId: testId },
// 			{
// 				$push: {
// 					multipleCorrectQuestions: multipleCorrectQuestions,
// 				},
// 			},
// 			{
// 				new: true,
// 			}
// 		).exec((err, result) => {
// 			if (err) {
// 				return res.status(422).json({ error: err });
// 			} else {
// 				res.json(result);
// 			}
// 		});
// 	} else if (questionType == "numerical") {
// 		const { questionNumber, questionImage, numerical } = req.body;
// 		const question = {
// 			questionImage: questionImage,
// 			numerical: numerical,
// 		};
// 		Test.findOneAndUpdate(
// 			{ testId: testId },
// 			{
// 				$push: { questionNumber: questionNumber, questions: question, questionType: questionType },
// 			},
// 			{
// 				new: true,
// 			}
// 		).exec((err, result) => {
// 			if (err) {
// 				return res.status(422).json({ error: err });
// 			} else {
// 				res.json(result);
// 			}
// 		});
// 	} else {
// 		res.status(404).json({ message: "Question Type not found!" });
// 	}
// });
