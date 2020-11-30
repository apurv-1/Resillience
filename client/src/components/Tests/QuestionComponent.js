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
	},
	optionContainer: {
		padding: "2%",
	},
	option: {
		display: "none",
	},
	label: {
		cursor: "pointer",
		margin: "2%",
		borderRadius: "25px",
		padding: "10px 40px",
		fontWeight: "bold",
		alignContent: "center",
		boxShadow: "0 1px 3px 1px rgba(35, 34, 39);",
		"&:hover": {
			borderColor: "black",
			backgroundColor: "#D2D2D2",
		},
		"&:active": {
			borderColor: "#AAA19E",
			backgroundColor: "#0E6195",
		},
	},
	selectedLabel: {
		cursor: "pointer",
		margin: "2%",
		borderRadius: "25px",
		padding: "10px 40px",
		fontWeight: "bold",
		alignContent: "center",
		backgroundColor: "#0F7DC2",
		boxShadow: "0 1px 3px 1px rgba(35, 34, 39);",
	},
	subjectContainer: {
		marginTop: "-20px",
		paddingBottom: "25px",
		// marginLeft: "20%",
		// margin: "auto",
		// width: "50%",
	},
	span: {
		border: "1px solid #25B5E9",
		borderRadius: "4px",
		padding: "10px",
		margin: "4px",
		cursor: "pointer",
	},
	selectedSpan: {
		border: "1px solid #25B5E9",
		borderRadius: "4px",
		padding: "10px",
		margin: "4px",
		cursor: "pointer",
		backgroundColor: "#25B5E9",
	},
}));

function QuestionComponent() {
	const classes = useStyles();
	const { state, dispatch } = useContext(TestContext);
	const { currentIndex, selectedAnswers, isVisited, currentSubject } = state;
	const questions = state.test.questions;

	const handleSelect = (selectedOption) => {
		selectedAnswers[currentIndex] = selectedOption;
		dispatch({ type: SET_SELECTED_ANSWERS, currentAnswer: selectedAnswers });
	};

	const handleSubject = (cSubject) => {
		console.log("hello");
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
				{/* Test Heading */}
				<div className={classes.top}>
					{/* <span>
						<h2>{state.test.testName}</h2>
					</span> */}
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
						<label
							className={currentSubject === "Maths" ? classes.selectedSpan : classes.span}
							onClick={() => handleSubject("Maths")}>
							Maths
						</label>
					</div>
					<span>
						<b>Question Number : {questions[currentIndex].questionNumber}</b>
					</span>
				</div>
				<hr style={{ height: "2px", backgroundColor: "gray solid" }} />

				{/* Question Image */}
				<div className={classes.question}>
					<img alt="question" src={questions[currentIndex].questionImage} />
					<hr style={{ height: "2px", backgroundColor: "gray solid" }} />
				</div>

				{/* Question Options */}
				<div className={classes.optionContainer}>
					<ul>
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
			</div>
		</div>
	);
}

export default QuestionComponent;
