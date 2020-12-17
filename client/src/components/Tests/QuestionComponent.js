import React, { useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TestContext from "../Context/TestContext";
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
	top: {
		// marginTop: "-5%",
	},
	box: {
		padding: "10px",
	},
	question: {
		height: "100%",
		width: "100%",
		marginTop: "2%",
		alignItems: "center",
		"@media only screen and (max-width: 1024px)": {
			height: "50%",
			width: "50%",
		},
	},
	optionContainer: {
		marginLeft: "5%",
		marginRight: "5%",
		padding: "2%",
		display: "flex",
		justifyContent: "space-around",
	},
	option: {
		display: "none",
	},
	label: {
		cursor: "pointer",
		borderRadius: "25px",
		padding: "10px 40px",
		fontWeight: "bold",
		alignContent: "center",
		border: "2px solid #ececec",
		outline: "none",
		boxShadow: "0 1px 3px 1px rgba(35, 34, 39)",
		// boxShadow: "0 0.5px 5px 1px rgba(35, 34, 39), inset 1px 0.5px 10px 0.5px rgba(35, 34, 39)",
		"&:hover": {
			borderColor: "#7a7a7a",
			backgroundColor: "#D2D2D2",
		},
	},
	selectedLabel: {
		cursor: "pointer",
		borderRadius: "25px",
		padding: "10px 40px",
		fontWeight: "bold",
		alignContent: "center",
		backgroundColor: "#0F7DC2",
		border: "2px solid #ececec",
		color: "#F8F8F8",
		boxShadow: "0 1px 3px 1px rgba(35, 34, 39)",
	},
	subjectContainer: {
		// marginTop: "-10px",
		paddingBottom: "30px",
	},
	span: {
		border: "2px solid #25B5E9",
		borderRadius: "4px",
		padding: "10px",
		margin: "4px",
		fontWeight: "bold",
		cursor: "pointer",
		color: "grey",
	},
	selectedSpan: {
		border: "1px solid #25B5E9",
		borderRadius: "4px",
		padding: "10px",
		margin: "4px",
		cursor: "pointer",
		color: "#ffff",
		fontWeight: "bold",
		backgroundColor: "#25B5E9",
	},
	questionNumber: {
		float: "left",
		margin: "1px",
	},
}));

function QuestionComponent() {
	const classes = useStyles();
	window.onbeforeunload = function () {
		return "are you sure? Test will not be submitted";
	};
	const { state, dispatch } = useContext(TestContext);
	const { test, currentIndex, selectedAnswers, isVisited, currentSubject } = state;
	const questions = state.test.questions;

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

	return (
		<div>
			<div className={classes.box}>
				{/* Subjects */}
				<div className={classes.top}>
					<div className={classes.subjectContainer}>
						<label
							className={currentSubject === "Physics" ? classes.selectedSpan : classes.span}
							onClick={() => handleSubject("Physics")}>
							Physics
						</label>
						<label
							className={currentSubject === "Chemistry" ? classes.selectedSpan : classes.span}
							onClick={() => handleSubject("Chemistry")}>
							Chemistry
						</label>
						{test.testType === "pcb" ? (
							<label
								className={currentSubject === "Biology" ? classes.selectedSpan : classes.span}
								onClick={() => handleSubject("Biology")}>
								Biology
							</label>
						) : (
							<label
								className={currentSubject === "Maths" ? classes.selectedSpan : classes.span}
								onClick={() => handleSubject("Maths")}>
								Maths
							</label>
						)}
					</div>
				</div>
				<div className={classes.questionNumber}>
					<b>Question Number : {questions[currentIndex].questionNumber}</b>
				</div>
				<br />
				<hr style={{ height: "2px", backgroundColor: "gray solid" }} />

				{/* Question Image */}
				<div className={classes.question}>
					<img alt="question" src={questions[currentIndex].questionImage} />
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
								className={classes.option}
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
								className={classes.option}
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
								className={classes.option}
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
								className={classes.option}
								value="d"
								onClick={(e) => handleSelect(e.target.value)}
							/>
							<span>Option D</span>
						</label>
					</ul>
				</div>
				<hr style={{ height: "2px", backgroundColor: "gray solid" }} />
			</div>
		</div>
	);
}

export default QuestionComponent;
