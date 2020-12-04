import React, { useContext, useState } from "react";
import TestContext from "../Context/TestContext";
import { makeStyles, Paper, FormControl, Select, MenuItem } from "@material-ui/core";
// import Loading from "./Loading"
// import Confetti from "react-confetti";
import CorrectQuestionsComponent from "./TestAnalysis/CorrectQuestions";
import IncorrectQuestionsComponent from "./TestAnalysis/IncorrectQuestion";
import NotAnsweredQuestionsComponent from "./TestAnalysis/NotAnsweredQuestions";
import AllQuestionsComponent from "./TestAnalysis/AllQuestions";

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
		display: "flex",
		flexDirection: "row",
		// flexWrap: "wrap",
		width: "65%",
	},
	analysisBlock: {
		margin: "2%",
		padding: "2%",
		width: "50%",
		fontWeight: "bolder",
		fontSize: "20px",
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
					{/* <Confetti numberOfPieces={50} width="800px" /> */}
					{calculateMarks()}

					<Paper className={classes.paper} elevation={5}>
						<span className={classes.span}>
							<h1>{total}</h1>
							<h3>Total Questions</h3>
						</span>
						<span className={classes.span}>
							<h1>{answered}</h1>
							<h3>Answered</h3>
						</span>
						<span className={classes.span}>
							<h1>{correct}</h1>
							<h3>Correct </h3>
						</span>
						<span className={classes.span}>
							<h1>{withinTime}</h1>
							<h3>Correct within target time </h3>
						</span>
						<span className={classes.span}>
							<h1>{wrong}</h1>
							<h3>Incorrect </h3>
						</span>

						<span className={classes.span}>
							<h1>{notAttempted}</h1>
							<h3>Not Visited</h3>
						</span>
						<span className={classes.span}>
							<h1>
								{score}/{4 * total}
							</h1>
							<h3>You Scored </h3>
						</span>
					</Paper>

					<div className={classes.analysisBlock}>
						Choose Test Analysis :
						<FormControl className={classes.analysisDropdown}>
							<Select
								labelId="controlled-open-select-label"
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
					</div>
					{type === "correct" ? (
						<CorrectQuestionsComponent />
					) : type === "incorrect" ? (
						<IncorrectQuestionsComponent />
					) : type === "notAnswered" ? (
						<NotAnsweredQuestionsComponent />
					) : (
						type === "all" && <AllQuestionsComponent />
					)}
				</div>
			)}
		</div>
	);
};

export default TestResult;
