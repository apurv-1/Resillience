import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { makeStyles, FormControl, Select, MenuItem, Typography } from "@material-ui/core";

import CorrectQuestionsComponent from "./TestAnalysis/CorrectQuestions";
import IncorrectQuestionsComponent from "./TestAnalysis/IncorrectQuestion";
import NotAnsweredQuestionsComponent from "./TestAnalysis/NotAnsweredQuestions";
import AllQuestionsComponent from "./TestAnalysis/AllQuestions";

const useStyles = makeStyles((theme) => ({
	root: {
		marginTop: "5rem",
		margin: "1.5rem",
		"@media only screen and (max-width: 1125px)": {
			margin: "1rem",
			marginTop: "5rem",
		},
	},
	subjectScore: {
		display: "flex",
		textAlign: "center",
		width: "49rem",
		"@media only screen and (max-width: 1125px)": {
			width: "33rem",
		},
		"@media only screen and (max-width: 440px)": {
			width: "25rem",
		},
	},
	scoreContainer: {
		textAlign: "center",
		display: "flex",
		flexDirection: "row",
		"@media only screen and (max-width: 770px)": {
			flexWrap: "wrap",
		},
	},
	container: {
		display: "flex",
		flexDirection: "row",
		marginTop: "1rem",
		"@media only screen and (max-width: 770px)": {
			flexDirection: "column",
		},
	},
	analysisBlock: {
		marginTop: "2rem",
		padding: "1rem",
		flex: "0.5",
		"@media only screen and (max-width: 1125px)": {
			flex: "0.5",
			marginTop: "0.8rem",
		},
		"@media only screen and (max-width: 770px)": {
			flex: "0.1",
			// width: "5rem",
			marginTop: "0.5rem",
		},
	},
	analysisDropdown: {
		width: "12rem",
		marginTop: "-1rem",
		marginLeft: "11px",
		"@media only screen and (max-width: 1125px)": {
			width: "10rem",
			marginLeft: "10px",
		},
		"@media only screen and (max-width: 440px)": {
			width: "12rem",
			marginLeft: "10px",
		},
	},
	analysisText: {
		marginBottom: "1.5rem",
		fontWeight: "bolder",
		fontSize: "20px",
		"@media only screen and (max-width: 1125px)": {
			fontSize: "16px",
		},
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
		"@media only screen and (max-width: 1125px)": {
			margin: "2px",
			padding: "4px",
			width: "16rem",
			height: "6rem",
			fontSize: "11px",
		},
		"@media only screen and (max-width: 770px)": {
			margin: "2px",
			padding: "4px",
			width: "4rem",
			height: "5rem",
			fontSize: "10px",
		},
	},
	spanCorrect: {
		margin: "6px",
		padding: "5px",
		width: "20rem",
		height: "8rem",
		background: "rgba( 74, 74, 74, 0.05 )",
		boxShadow: "0 6px 12px 0 rgba( 31, 38, 135, 0.37 ), inset 0 6px 2px 0  rgba( 28, 223, 17, 0.80 )",
		backdropFilter: "blur( 20.0px )",
		WebkitBackdropFilter: "blur( 20.0px )",
		borderRadius: "12px",
		"@media only screen and (max-width: 1125px)": {
			margin: "2px",
			padding: "4px",
			width: "16rem",
			height: "6rem",
			fontSize: "11px",
		},
		"@media only screen and (max-width: 770px)": {
			margin: "2px",
			padding: "4px",
			width: "4rem",
			height: "5rem",
			fontSize: "10px",
		},
	},
	spanWrong: {
		margin: "6px",
		padding: "5px",
		width: "20rem",
		height: "8rem",
		background: "rgba( 74, 74, 74, 0.05 )",
		boxShadow: "0 6px 12px 0 rgba( 31, 38, 135, 0.37 ), inset 0 6px 2px 0  rgba( 208, 2, 27, 0.80 )",
		backdropFilter: "blur( 20.0px )",
		WebkitBackdropFilter: "blur( 20.0px )",
		borderRadius: "12px",
		"@media only screen and (max-width: 1125px)": {
			margin: "2px",
			padding: "4px",
			width: "16rem",
			height: "6rem",
			fontSize: "11px",
		},
		"@media only screen and (max-width: 770px)": {
			margin: "2px",
			padding: "4px",
			width: "4rem",
			height: "5rem",
			fontSize: "10px",
		},
	},
	spanScore: {
		margin: "6px",
		padding: "5px",
		width: "20rem",
		height: "8rem",
		background: "rgba( 74, 74, 74, 0.05 )",
		boxShadow:
			"0 6px 12px 0 rgba( 31, 38, 135, 0.37 ), inset 0 6px 2px 0  rgba( 13, 113, 230, 0.80 )",
		backdropFilter: "blur( 20.0px )",
		WebkitBackdropFilter: "blur( 20.0px )",
		borderRadius: "12px",
		"@media only screen and (max-width: 1125px)": {
			margin: "2px",
			padding: "4px",
			width: "16rem",
			height: "6rem",
			fontSize: "11px",
		},
		"@media only screen and (max-width: 770px)": {
			margin: "2px",
			padding: "4px",
			width: "4rem",
			height: "5rem",
			fontSize: "10px",
		},
	},
}));

const ViewResult = () => {
	const classes = useStyles();
	const { resultid } = useParams();
	const history = useHistory();

	const [test, setTest] = useState([]);
	const [selectedAnswers, setSelectedAnswers] = useState([]);
	const [timeElapsed, setTimeElapsed] = useState([]);
	const [isVisited, setIsVisited] = useState([]);
	const [questions, setQuestions] = useState([]);

	const [open, setOpen] = useState(false);
	const [openSubject, setOpenSubject] = useState(false);

	const [type, setType] = useState("");
	const [cSubject, setcSubject] = useState("");

	/* eslint-disable */
	useEffect(() => {
		if (localStorage.getItem("student_jwt")) {
			fetch(`/api/test-result/${resultid}`, {
				method: "get",
				headers: {
					Authorization: "Bearer " + localStorage.getItem("student_jwt"),
				},
			})
				.then((res) => res.json())
				.then((testDetails) => {
					// console.log(testDetails);
					setTest(testDetails.details.testDetails);
					setSelectedAnswers(testDetails.details.selectedOptions);
					setTimeElapsed(testDetails.details.timePerQuestion);
					setIsVisited(testDetails.details.visitedQuestion);
					setQuestions(testDetails.details.testDetails.questions);
				})
				.catch((err) => {
					console.log(err);
				});
		} else if (localStorage.getItem("admin_jwt")) {
			fetch(`/api/attemptedtest-result/${resultid}`, {
				method: "get",
				headers: {
					Authorization: "Bearer " + localStorage.getItem("admin_jwt"),
				},
			})
				.then((res) => res.json())
				.then((testDetails) => {
					// console.log(testDetails);
					setTest(testDetails.details.testDetails);
					setSelectedAnswers(testDetails.details.selectedOptions);
					setTimeElapsed(testDetails.details.timePerQuestion);
					setIsVisited(testDetails.details.visitedQuestion);
					setQuestions(testDetails.details.testDetails.questions);
				})
				.catch((err) => {
					console.log(err);
				});
		} else {
			history.push("/");
		}
	}, []);
	// console.log(questions);

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
		SubjectwiseWrong = 0,
		SubjectwiseTime = 0,
		SubjectwiseScore = 0;

	const CalculateMarks = () => {
		const timePerQuestion = test.testDuration / (questions.length * 1000);
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
				SubjectwiseTime = SubjectwiseTime + timeElapsed[index];
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
		// console.log(correct, test.forCorrect, test.forInCorrect);
		SubjectwiseScore = SubjectwiseCorrect * test.forCorrect - SubjectwiseWrong * test.forInCorrect;
		score = correct * test.forCorrect - wrong * test.forInCorrect;
		return;
	};

	const handleCurrentSubject = (e) => {
		e.preventDefault();
		setcSubject(e.target.value);
	};
	const handleTestType = (e) => {
		e.preventDefault();
		setType(e.target.value);
	};

	const handleOpenSubject = (e) => {
		e.preventDefault();
		setOpenSubject(true);
	};
	const handleCloseSubject = (e) => {
		e.preventDefault();
		setOpenSubject(false);
	};

	return (
		<div className={classes.root}>
			{CalculateMarks()}
			<Typography variant="h4">
				Result for {test.testName}{" "}
				<span role="img" aria-label="result">
					📊
				</span>
			</Typography>

			<div className={classes.scoreContainer}>
				<span className={classes.span}>
					<h1>{total}</h1>
					<h3>Total Questions</h3>
				</span>

				<span className={classes.span}>
					<h1>{answered}</h1>
					<h3>Answered</h3>
				</span>

				<span className={classes.spanCorrect}>
					<h1>{correct}</h1>
					<h3>
						Correct{" "}
						<span role="img" aria-label="correct">
							📗
						</span>
					</h3>
				</span>

				<span className={classes.span}>
					<h1>{withinTime}</h1>
					<h4>Correct within target time</h4>
				</span>

				<span className={classes.span}>
					<h1>{correctButOverTime}</h1>
					<h3>Correct but Overtime</h3>
				</span>

				<span className={classes.spanWrong}>
					<h1>{wrong}</h1>
					<h3>
						Wrong{" "}
						<span role="img" aria-label="wrong">
							📕
						</span>
					</h3>
				</span>

				<span className={classes.span}>
					<h1>{notAttempted}</h1>
					<h3>Not Visited</h3>
				</span>

				<span className={classes.span}>
					<h2>
						{timeSpentOnCorrect > 60
							? `${parseInt(timeSpentOnCorrect / 60)}𝗺 ${timeSpentOnCorrect % 60}`
							: timeSpentOnCorrect}
						𝘀
					</h2>
					<h5>Total Time spent on Correct Questions </h5>
				</span>
				<span className={classes.span}>
					<h2>
						{timeSpentOnInCorrect > 60
							? `${parseInt(timeSpentOnInCorrect / 60)}𝗺 ${timeSpentOnInCorrect % 60}`
							: timeSpentOnInCorrect}
						𝘀
					</h2>
					<h5>Total Time spent on Incorrect Questions </h5>
				</span>

				<span className={classes.span}>
					<h2>
						{timeSpentOnNotAttempted > 60
							? `${parseInt(timeSpentOnNotAttempted / 60)}𝗺 ${timeSpentOnNotAttempted % 60}`
							: timeSpentOnNotAttempted}
						𝘀
					</h2>
					<h5>Time spent on Not Attempted Questions</h5>
				</span>

				<span className={classes.spanScore}>
					<h1>
						{score}/{4 * total}
					</h1>
					<h3>
						Score{" "}
						<span role="img" aria-label="score">
							📘
						</span>
					</h3>
				</span>
			</div>

			<div className={classes.container}>
				<div className={classes.analysisBlock}>
					<div className={classes.analysisText}>Choose Test Analysis :</div>
					<FormControl className={classes.analysisDropdown}>
						<Select
							labelId="controlled-open-select-label"
							variant="outlined"
							open={open}
							onClose={() => setOpen(false)}
							onOpen={() => setOpen(true)}
							value={type}
							onChange={handleTestType}
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
					<div className={classes.analysisText}>Choose Subject :</div>
					<FormControl className={classes.analysisDropdown}>
						<Select
							labelId="controlled-open-select-label"
							variant="outlined"
							open={openSubject}
							onClose={handleCloseSubject}
							onOpen={handleOpenSubject}
							value={cSubject}
							onChange={handleCurrentSubject}
							fullWidth>
							<MenuItem value={""}>None</MenuItem>
							<MenuItem value={"Physics"}>Physics</MenuItem>
							<MenuItem value={"Chemistry"}>Chemistry</MenuItem>
							{test.testType === "pcb" ? (
								<MenuItem value={"Biology"}>Biology</MenuItem>
							) : (
								<MenuItem value={"Maths"}>Maths</MenuItem>
							)}
						</Select>
					</FormControl>
				</div>
				<div className={classes.subjectScore}>
					<span className={classes.span}>
						<h1>{SubjectwiseTotal}</h1>
						<h3>Total Questions</h3>
					</span>
					<span className={classes.span}>
						<h1>{SubjectwiseAnswered}</h1>
						<h3>Answered</h3>
					</span>
					<span className={classes.spanCorrect}>
						<h1>{SubjectwiseCorrect}</h1>
						<h3>
							Correct{" "}
							<span role="img" aria-label="correct">
								📗
							</span>
						</h3>
					</span>
					<span className={classes.spanWrong}>
						<h1>{SubjectwiseWrong}</h1>
						<h3>
							Wrong{" "}
							<span role="img" aria-label="wrong">
								📕
							</span>
						</h3>
					</span>
					<span className={classes.span}>
						<h3>
							{SubjectwiseTime > 60
								? `${parseInt(SubjectwiseTime / 60)}𝗺 ${SubjectwiseTime % 60}`
								: SubjectwiseTime}
							𝘀
						</h3>
						<h4>Total Time spent on {cSubject} </h4>
					</span>
					<span className={classes.spanScore}>
						<h1>{SubjectwiseScore ? SubjectwiseScore : "0"}</h1>
						<h3>
							{cSubject} Score{" "}
							<span role="img" aria-label="score">
								📘
							</span>
						</h3>
					</span>
				</div>
			</div>
			{type === "correct" ? (
				<CorrectQuestionsComponent
					cSubject={cSubject}
					selectedAnswers={selectedAnswers}
					timeElapsed={timeElapsed}
					test={test}
					questions={questions}
				/>
			) : type === "incorrect" ? (
				<IncorrectQuestionsComponent
					cSubject={cSubject}
					selectedAnswers={selectedAnswers}
					timeElapsed={timeElapsed}
					test={test}
					questions={questions}
				/>
			) : type === "notAnswered" ? (
				<NotAnsweredQuestionsComponent
					cSubject={cSubject}
					selectedAnswers={selectedAnswers}
					timeElapsed={timeElapsed}
					test={test}
					questions={questions}
				/>
			) : (
				type === "all" && (
					<AllQuestionsComponent
						cSubject={cSubject}
						selectedAnswers={selectedAnswers}
						timeElapsed={timeElapsed}
						test={test}
						questions={questions}
					/>
				)
			)}
		</div>
	);
};

export default ViewResult;
