import React, { useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TestContext from "../Context/TestContext";
import { Prompt } from "react-router-dom";
// import Loading from "./Loading";
import {
	SET_SELECTED_ANSWERS,
	SET_IS_VISITED,
	SET_SUBJECT,
	SET_CURRENT_INDEX,
} from "../Reducers/types";

const useStyles = makeStyles((theme) => ({
	root: {
		marginTop: "5%",
		paddingLeft: "60px",
		paddingRight: "60px",
	},
	box: {
		padding: "10px",
		paddingBottom: "0%",
	},
	question: {
		marginTop: "2%",
		alignItems: "center",
		"@media only screen and (max-width: 1024px)": {
			maxWidth: "80%",
		},
	},
	optionContainer: {
		marginLeft: "5%",
		marginRight: "5%",
		padding: "2%",
		display: "flex",
		justifyContent: "space-around",
		"@media only screen and (max-width: 1024px)": {
			marginLeft: "2%",
			marginRight: "2%",
			padding: "1%",
		},
	},
	label: {
		cursor: "pointer",
		borderRadius: "25px",
		padding: "10px 40px",
		fontWeight: "bold",
		alignContent: "center",
		border: "1px solid #ececec",
		outline: "none",
		boxShadow: "0 1px 3px 1px rgba(35, 34, 39)",
		"&:hover": {
			borderColor: "#7a7a7a",
			backgroundColor: "#D2D2D2",
		},
		"@media only screen and (max-width: 1024px)": {
			borderRadius: "20px",
			padding: "8px 24px",
			fontSize: "12px",
		},
	},
	selectedLabel: {
		cursor: "pointer",
		borderRadius: "25px",
		padding: "10px 40px",
		fontWeight: "bold",
		alignContent: "center",
		backgroundColor: "#0F7DC2",
		border: "1px solid #ececec",
		color: "#F8F8F8",
		boxShadow: "0 1px 3px 1px rgba(35, 34, 39)",
		"@media only screen and (max-width: 1024px)": {
			borderRadius: "25px",
			padding: "8px 24px",
			fontSize: "12px",
		},
	},
	subjectContainer: {
		margin: "2.2rem",
		"@media only screen and (max-width: 1024px)": {
			margin: "1.6rem",
		},
	},
	span: {
		border: "2px solid #25B5E9",
		borderRadius: "4px",
		padding: "10px",
		margin: "4px",
		fontWeight: "bold",
		cursor: "pointer",
		color: "grey",
		"@media only screen and (max-width: 1024px)": {
			padding: "6px",
			margin: "2px",
		},
	},
	selectedSpan: {
		border: "2px solid #25B5E9",
		borderRadius: "4px",
		padding: "10px",
		margin: "4px",
		cursor: "pointer",
		color: "#ffff",
		fontWeight: "bold",
		background: "rgba( 37, 181, 233, 1.00 )",
		"@media only screen and (max-width: 1024px)": {
			padding: "6px",
			margin: "2px",
		},
	},
	questionNumber: {
		float: "left",
		margin: "1px",
	},
}));

function QuestionComponent() {
	const classes = useStyles();
	const { state, dispatch } = useContext(TestContext);
	const { test, currentIndex, selectedAnswers, isVisited, currentSubject, isStarted } = state;
	const questions = state.test.questions;
	var phy = 0,
		chem = 0,
		math = 0,
		bio = 0;

	const handleSelect = (selectedOption) => {
		selectedAnswers[currentIndex] = selectedOption;
		dispatch({ type: SET_SELECTED_ANSWERS, currentAnswer: selectedAnswers });
	};

	const handleSubject = (cSubject) => {
		// console.log("hello");
		dispatch({ type: SET_SUBJECT, currentSubject: cSubject });
		for (let index = 0; index < questions.length; index++) {
			if (questions[index].subject === cSubject) {
				dispatch({
					type: SET_CURRENT_INDEX,
					currentIndex: index,
				});
				break;
			}
		}
	};

	/* eslint-disable */
	useEffect(() => {
		isVisited[currentIndex] = true;
		dispatch({ type: SET_IS_VISITED, isVisited: isVisited });
	}, [currentIndex]);

	const subjectwiseQuestions = () => {
		for (let index = 0; index < questions.length; index++) {
			if (questions[index].subject === "Physics") {
				phy = 1 + phy;
			} else if (questions[index].subject === "Chemistry") {
				chem = chem + 1;
			} else if (questions[index].subject === "Maths") {
				math = math + 1;
			} else if (questions[index].subject === "Biology") {
				bio = bio + 1;
			}
		}
	};

	return (
		<div className={classes.box}>
			{/* Subjects */}
			<Prompt
				when={isStarted === true}
				message={(location) => {
					return location.pathname.startsWith("/") ? "Test will not be submitted! Are you sure?" : false;
				}}
			/>
			{subjectwiseQuestions()}
			<div className={classes.subjectContainer}>
				{phy > 0 && (
					<label
						className={currentSubject === "Physics" ? classes.selectedSpan : classes.span}
						onClick={() => handleSubject("Physics")}>
						Physics
					</label>
				)}
				{chem > 0 && (
					<label
						className={currentSubject === "Chemistry" ? classes.selectedSpan : classes.span}
						onClick={() => handleSubject("Chemistry")}>
						Chemistry
					</label>
				)}
				{test.testType === "pcb"
					? bio > 0 && (
							<label
								className={currentSubject === "Biology" ? classes.selectedSpan : classes.span}
								onClick={() => handleSubject("Biology")}>
								Biology
							</label>
					  )
					: math > 0 && (
							<label
								className={currentSubject === "Maths" ? classes.selectedSpan : classes.span}
								onClick={() => handleSubject("Maths")}>
								Maths
							</label>
					  )}
			</div>
			<div className={classes.questionNumber}>
				<b>Question Number : {questions[currentIndex].questionNumber}</b>
			</div>
			<br />
			<hr style={{ height: "2px", backgroundColor: "gray solid" }} />

			{/* Question Image */}
			<div>
				<img alt="question" className={classes.question} src={questions[currentIndex].questionImage} />
				<hr style={{ height: "2px", backgroundColor: "gray solid" }} />
			</div>

			{/* Question Options */}
			<div>
				<ul className={classes.optionContainer}>
					<label
						className={selectedAnswers[currentIndex] === "a" ? classes.selectedLabel : classes.label}>
						<input
							type="radio"
							name="option"
							style={{ display: "none" }}
							value="a"
							onClick={(e) => handleSelect(e.target.value)}
						/>
						<span>Option A</span>
					</label>
					<label
						className={selectedAnswers[currentIndex] === "b" ? classes.selectedLabel : classes.label}>
						<input
							type="radio"
							name="option"
							style={{ display: "none" }}
							value="b"
							onClick={(e) => handleSelect(e.target.value)}
						/>
						<span>Option B</span>
					</label>
					<label
						className={selectedAnswers[currentIndex] === "c" ? classes.selectedLabel : classes.label}>
						<input
							type="radio"
							name="option"
							style={{ display: "none" }}
							value="c"
							onClick={(e) => handleSelect(e.target.value)}
						/>
						<span>Option C</span>
					</label>
					<label
						className={selectedAnswers[currentIndex] === "d" ? classes.selectedLabel : classes.label}>
						<input
							type="radio"
							name="option"
							style={{ display: "none" }}
							value="d"
							onClick={(e) => handleSelect(e.target.value)}
						/>
						<span>Option D</span>
					</label>
				</ul>
			</div>
			<hr style={{ height: "2px", backgroundColor: "gray solid" }} />
		</div>
	);
}

export default QuestionComponent;
