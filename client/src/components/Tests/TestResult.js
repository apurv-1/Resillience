import React, { useContext, useState } from "react";
import TestContext from "../Context/TestContext";
import { makeStyles, Typography, Paper, FormControl, Select, MenuItem } from "@material-ui/core";
// import Loading from "./Loading"
import Confetti from "react-confetti";
import CorrectQuestionComponent from "./TestAnalysis/CorrectQuestions";
import IncorrectQuestionComponent from "./TestAnalysis/IncorrectQuestion";
import NotAnsweredQuestions from "./TestAnalysis/NotAnsweredQuestions";

const useStyles = makeStyles((theme) => ({
	root: {
		// margin: "20px",
		marginTop: "100px",
		// marginLeft: "20%",
	},
	card: {
		width: "50%",
	},

	paper: {
		padding: "10px",
		textAlign: "center",
		// border: "2px solid",
		// borderColor: "grey",
		// borderRadius: "10px",
		display: "flex",
		flexDirection: "row",
		// width: "80%",
	},
	analysisBlock: {
		margin: "2%",
		padding: "2%",
		width: "50%",
		// border: "2px solid",
	},
	analysisDropdown: {
		width: "40%",
		height: "100%",
		marginLeft: "2%",
		marginTop: "-2.5%",
	},
	span: {
		margin: "10px",
		padding: "10px",
	},
}));

const TestResult = () => {
	const classes = useStyles();
	const { state } = useContext(TestContext);
	const [open, setOpen] = useState(false);
	const [type, setType] = useState("");
	const { test, showResult, selectedAnswers, timeElapsed, isVisited } = state;
	const questions = test.questions;

	const timePerQuestion = test.testDuration / (questions.length * 1000);
	// console.log(timePerQuestion);
	let score = 0,
		total = questions.length,
		notAttempted = 0,
		correct = 0,
		wrong = 0,
		answered = 0,
		withinTime = 0;

	const calculateMarks = () => {
		questions.forEach(({ correctOption }, index) => {
			if (selectedAnswers[index]) {
				correctOption === selectedAnswers[index]
					? (correct = correct + 1) &&
					  timeElapsed[index] <= timePerQuestion &&
					  (withinTime = withinTime + 1)
					: (wrong = wrong + 1);
				answered = answered + 1;
			}
			if (isVisited[index] === false) {
				notAttempted = notAttempted + 1;
			}
		});
		calculateScore();
		return;
	};

	const calculateScore = () => {
		score = correct * 4 - wrong;
		return;
	};

	return (
		<div className={classes.root}>
			<h1>Result Section</h1>

			{showResult === true && (
				<div>
					<Confetti numberOfPieces={50} />
					{calculateMarks()}

					<Paper className={classes.paper} elevation={5}>
						<span className={classes.span}>
							<h1>{total}</h1>
							<h2>Total Questions</h2>
						</span>
						<span className={classes.span}>
							<h1>{answered}</h1>
							<h2>Answered</h2>
						</span>
						<span className={classes.span}>
							<h1>{correct}</h1>
							<h2>Correct </h2>
						</span>
						<span className={classes.span}>
							<h1>{withinTime}</h1>
							<h2>Correct within target time </h2>
						</span>
						<span className={classes.span}>
							<h1>{wrong}</h1>
							<h2>Incorrect </h2>
						</span>

						<span className={classes.span}>
							<h1>{notAttempted}</h1>
							<h2>Not Visited</h2>
						</span>
						<span className={classes.span}>
							<h1>
								{score}/{4 * total}
							</h1>
							<h2>You Scored </h2>
						</span>
					</Paper>

					<div className={classes.analysisBlock}>
						<h3>
							Choose Test Analysis :
							<FormControl className={classes.analysisDropdown}>
								{/* <InputLabel>Select Question Type</InputLabel> */}
								<Select
									// labelId="controlled-open-select-label"
									variant="outlined"
									open={open}
									onClose={() => setOpen(false)}
									onOpen={() => setOpen(true)}
									value={type}
									onChange={(e) => setType(e.target.value)}
									fullWidth>
									<MenuItem value={""}>None</MenuItem>
									<MenuItem value={"correct"}>Correct</MenuItem>
									<MenuItem value={"incorrect"}>Incorrect</MenuItem>
									<MenuItem value={"notAnswered"}>Not Answered</MenuItem>
									<MenuItem value={"all"}>All</MenuItem>
								</Select>
							</FormControl>
						</h3>
					</div>
				</div>
			)}
			{showResult === true ? (
				type === "correct" ? (
					<CorrectQuestionComponent />
				) : type === "incorrect" ? (
					<IncorrectQuestionComponent />
				) : type === "notAnswered" ? (
					<NotAnsweredQuestions />
				) : (
					type === "all" &&
					questions.map(({ questionImage, correctOption, _id, difficuilty }, index) => (
						<Paper className={classes.card} key={_id}>
							<hr style={{ height: "1px", backgroundColor: "gray solid" }} />
							<Typography gutterBottom variant="h6" component="h6">
								Question Number: {test.questions[index].questionNumber}
							</Typography>
							<img src={questionImage} alt={_id} />
							{difficuilty}
							<Typography gutterBottom component="h6">
								Correct Option: {correctOption}
								<br />
								Selected Option: {selectedAnswers[index] ? selectedAnswers[index] : "Not Selected"}
								<br />
								<label>
									Time Taken: {timeElapsed[index] ? timeElapsed[index] : 0}s /{timePerQuestion}s
								</label>
							</Typography>

							<hr style={{ height: "1px", backgroundColor: "gray solid" }} />
						</Paper>
					))
				)
			) : (
				"Complete the Quiz first!"
			)}
		</div>
	);
};

export default TestResult;
