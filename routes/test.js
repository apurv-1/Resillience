const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Api = require("twilio/lib/rest/Api");
const Test = mongoose.model("Test");
const SingleCorrect = mongoose.model("SingleCorrect");
const MultipleCorrect = mongoose.model("MultipleCorrect");
const requireUser = require("../middleware/requireUser");

router.get("/alltests", (req, res) => {
	Test.find()
		.sort("-createdAt")
		.then((test) => {
			res.json({ test });
		})
		.catch((err) => {
			console.log(err);
		});
});

router.post("/addtest", (req, res) => {
	const { testId, testName, testDuration, noOfQuestions, forCorrect, forInCorrect } = req.body;
	const test = new Test({
		testId,
		testName,
		testDuration: 60000 * testDuration,
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
			res.json({ error: err.keyValue.testId });
			console.log(err);
		});
});

router.put("/add-question", (req, res) => {
	const { testId, questionImage, questionNumber, correctOption, subject, difficuilty } = req.body;
	// Test.findOne({testId})
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

router.get("/showtest", (req, res) => {
	const testId = req.query.testid;
	// console.log(req.query)
	Test.findOne({ testId: testId })
		// .populate({
		// 	path: "singleCorrectQuestions",
		// })
		.then((test) => {
			// console.log(test);
			if (test === null) {
				return res.status(422).json({ error: "Please enter valid Test ID" });
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
