import React, { useContext, useState } from "react";
import TestContext from "../Context/TestContext";
import { makeStyles, FormControl, Select, MenuItem } from "@material-ui/core";
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
	// card: {
	// 	width: "50%",
	// },
	subjectScore: {
		display: "flex",
		float: "right",
		textAlign: "center",
		width: "35rem",
	},
	paper: {
		textAlign: "center",
		display: "flex",
		flexDirection: "row",
		// flexWrap: "wrap",
		// width: "100%",
	},
	analysisBlock: {
		marginTop: "2rem",
		padding: "1rem",

		fontWeight: "bolder",
		fontSize: "20px",
	},
	analysisDropdown: {
		width: "12rem",
		marginTop: "-1rem",
		marginLeft: "10px",
	},
	span: {
		margin: "6px",
		padding: "5px",
		width: "20rem",
		height: "8rem",
		background: "rgba( 74, 74, 74, 0.05 )",
		boxShadow: "0 6px 12px 0 rgba( 31, 38, 135, 0.37 ), inset 0 6px 2px 0 rgba( 31, 38, 135, 0.37 )",
		backdropFilter: "blur( 20.0px )",
		WebkitBackdropFilter: "blur( 20.0px )",
		borderRadius: "12px",
	},
	container: {
		display: "flex",
		flexDirection: "row",
		margin: "1rem",
	},
}));

const TestResult = () => {
	const classes = useStyles();

	const { state } = useContext(TestContext);
	const { test, showResult, selectedAnswers, timeElapsed, isVisited } = state;
	const questions = test.questions;

	const [open, setOpen] = useState(false);
	const [openSubject, setOpenSubject] = useState(false);

	const [type, setType] = useState("");
	const [cSubject, setcSubject] = useState("");

	const timePerQuestion = test.testDuration / (questions.length * 1000);
	// console.log(timePerQuestion);
	let score = 0,
		total = questions.length,
		notAttempted = 0,
		correct = 0,
		wrong = 0,
		answered = 0,
		withinTime = 0,
		correctButOverTime = 0,
		timeSpentOnInCorrect = 0,
		timeSpentOnCorrect = 0,
		timeSpentOnNotAttempted = 0,
		SubjectwiseTotal = 0,
		SubjectwiseAnswered = 0,
		SubjectwiseCorrect = 0,
		SubjectwiseWrong = 0;

	const calculateMarks = () => {
		for (let index = 0; index < questions.length; index++) {
			if (selectedAnswers[index]) {
				questions[index].correctOption === selectedAnswers[index]
					? (correct = correct + 1) &&
					  (timeSpentOnCorrect = timeSpentOnCorrect + timeElapsed[index]) &&
					  timeElapsed[index] <= timePerQuestion
						? (withinTime = withinTime + 1)
						: (correctButOverTime = correctButOverTime + 1)
					: (wrong = wrong + 1) && (timeSpentOnInCorrect = timeSpentOnInCorrect + timeElapsed[index]);
				answered = answered + 1;
			}
			if (isVisited[index] === false) {
				notAttempted = notAttempted + 1;
			}
			if (!selectedAnswers[index]) {
				timeSpentOnNotAttempted = timeSpentOnNotAttempted + timeElapsed[index];
			}
			if (questions[index].subject === cSubject) {
				SubjectwiseTotal = SubjectwiseTotal + 1;
				if (selectedAnswers[index]) {
					SubjectwiseAnswered = SubjectwiseAnswered + 1;
					if (questions[index].correctOption === selectedAnswers[index]) {
						SubjectwiseCorrect = SubjectwiseCorrect + 1;
					} else {
						SubjectwiseWrong = SubjectwiseWrong + 1;
					}
				}
			}
		}
		calculateScore();
		return;
	};

	const calculateScore = () => {
		console.log(correct, test.forCorrect, test.forInCorrect);
		score = correct * test.forCorrect + wrong * test.forInCorrect;
		return;
	};

	return (
		<div className={classes.root}>
			<h1>Result Section</h1>

			{showResult === true && (
				<div>
					{/* <Confetti numberOfPieces={50} width="800px" /> */}
					{calculateMarks()}

					<div className={classes.paper}>
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
							<h4>Correct within target time </h4>
						</span>
						<span className={classes.span}>
							<h1>{correctButOverTime}</h1>
							<h3>Correct but Overtime</h3>
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
							<h2>
								{timeSpentOnCorrect > 60
									? `${parseInt(timeSpentOnCorrect / 60)}m : ${timeSpentOnCorrect % 60}`
									: timeSpentOnCorrect}
								s
							</h2>
							<h5>Total Time spent on Correct Questions </h5>
						</span>
						<span className={classes.span}>
							<h2>
								{timeSpentOnInCorrect > 60
									? `${parseInt(timeSpentOnInCorrect / 60)}m:${timeSpentOnInCorrect % 60}`
									: timeSpentOnInCorrect}
								s
							</h2>
							<h5>Total Time spent on Incorrect Questions </h5>
						</span>

						<span className={classes.span}>
							<h2>
								{timeSpentOnNotAttempted > 60
									? `${parseInt(timeSpentOnNotAttempted / 60)}m : ${timeSpentOnNotAttempted % 60}`
									: timeSpentOnNotAttempted}
								s
							</h2>
							<h5>Time spent on Not Attempted Questions</h5>
						</span>

						<span className={classes.span}>
							<h1>
								{score}/{4 * total}
							</h1>
							<h3>You Scored </h3>
						</span>
					</div>

					<div className={classes.container}>
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
						<div className={classes.analysisBlock}>
							Choose Subject :
							<FormControl className={classes.analysisDropdown}>
								<Select
									labelId="controlled-open-select-label"
									variant="outlined"
									open={openSubject}
									onClose={() => setOpenSubject(false)}
									onOpen={() => setOpenSubject(true)}
									value={cSubject}
									onChange={(e) => setcSubject(e.target.value)}
									fullWidth>
									<MenuItem value={""}>None</MenuItem>
									<MenuItem value={"Physics"}>Physics</MenuItem>
									<MenuItem value={"Chemistry"}>Chemistry</MenuItem>
									{test.testType === "pcb" ? (
										<MenuItem value={"Biology"}>Maths</MenuItem>
									) : (
										<MenuItem value={"Maths"}>Maths</MenuItem>
									)}
								</Select>
							</FormControl>
						</div>
						<div className={classes.subjectScore} elevation={5}>
							{/* <b>{cSubject}: </b> */}
							<span className={classes.span}>
								<h1>{SubjectwiseTotal}</h1>
								<h3>Total Questions</h3>
							</span>
							<span className={classes.span}>
								<h1>{SubjectwiseAnswered}</h1>
								<h3>Answered</h3>
							</span>
							<span className={classes.span}>
								<h1>{SubjectwiseCorrect}</h1>
								<h3>Correct </h3>
							</span>
							<span className={classes.span}>
								<h1>{SubjectwiseWrong}</h1>
								<h3>Wrong </h3>
							</span>
						</div>
					</div>
					{type === "correct" ? (
						<CorrectQuestionsComponent cSubject={cSubject} />
					) : type === "incorrect" ? (
						<IncorrectQuestionsComponent cSubject={cSubject} />
					) : type === "notAnswered" ? (
						<NotAnsweredQuestionsComponent cSubject={cSubject} />
					) : (
						type === "all" && <AllQuestionsComponent cSubject={cSubject} />
					)}
				</div>
			)}
		</div>
	);
};

export default TestResult;
