import React, { useContext, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TestContext from "../Context/TestContext";
import { SET_CURRENT_ANSWER } from "../Reducers/types";

const useStyles = makeStyles((theme) => ({
	root: {
		marginTop: "5%",
		paddingLeft: "60px",
		paddingRight: "60px",
	},
	top: {
		marginTop: "-5%",
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
		// marginLeft: "8%",
		// display: "flex",
		// flexDirection: "row",
	},
	option: {
		display: "none",
	},
	label: {
		cursor: "pointer",
		margin: "2%",
		// border: "3px solid",
		borderRadius: "25px",
		padding: "10px 40px",
		fontWeight: "bold",
		alignContent: "center",
		boxShadow: "0 1px 3px 1px rgba(35, 34, 39);",
		"&:hover": {
			// border: "2px solid",
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
		// border: "3px solid",
		borderRadius: "25px",
		padding: "10px 40px",
		fontWeight: "bold",
		alignContent: "center",
		backgroundColor: "#0F7DC2",
		boxShadow: "0 1px 3px 1px rgba(35, 34, 39);",
	},
}));

const QuestionComponent = () => {
	const classes = useStyles();
	const [select, setSelect] = useState({
		a: false,
		b: false,
		c: false,
		d: false,
	});
	const { state, dispatch } = useContext(TestContext);
	const { currentIndex, selectedAnswers } = state;
	const questions = state.test.questions;

	const handleSelect = (selectedOption) => {
		dispatch({ type: SET_CURRENT_ANSWER, currentAnswer: selectedOption });
		if (selectedOption === "a") {
			setSelect({ a: true });
		} else if (selectedOption === "b") {
			setSelect({ b: true });
		} else if (selectedOption === "c") {
			setSelect({ c: true });
		} else {
			setSelect({ d: true });
		}
	};
	/* eslint-disable */
	useEffect(() => {
		// setSelect(false);
		if (selectedAnswers[currentIndex] === "a") {
			setSelect({ a: true });
		} else if (selectedAnswers[currentIndex] === "b") {
			setSelect({ b: true });
		} else if (selectedAnswers[currentIndex] === "c") {
			setSelect({ c: true });
		} else if (selectedAnswers[currentIndex] === "d") {
			setSelect({ d: true });
		} else {
			setSelect(false);
		}
	}, [currentIndex]);

	const handleDoubleClick = () => {
		dispatch({ type: SET_CURRENT_ANSWER, currentAnswer: "" });
		setSelect(false);
		console.log("hello");
	};

	return (
		<div>
			<div className={classes.box}>
				{/* Test Heading */}
				<div className={classes.top}>
					<span>
						<h2>{state.test.testName}</h2>
					</span>
					<span>
						{1 + currentIndex} of {questions.length}
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
					{/* {options.map(({ name, value }) => ( */}
					<ul>
						<label
							className={select.a ? classes.selectedLabel : classes.label}
							onDoubleClick={() => handleDoubleClick()}>
							<input
								type="radio"
								name="option"
								className={classes.option}
								value="a"
								onClick={() => handleSelect("a")}
								onDoubleClick={() => handleDoubleClick()}
							/>
							<span className={classes.span}>Option A</span>
						</label>
						<label
							className={select.b ? classes.selectedLabel : classes.label}
							onDoubleClick={() => handleDoubleClick()}>
							<input
								type="radio"
								name="option"
								className={classes.option}
								value="b"
								onClick={() => handleSelect("b")}
								onDoubleClick={() => handleDoubleClick()}
							/>
							<span className={classes.span}>Option B</span>
						</label>
						<label
							className={select.c ? classes.selectedLabel : classes.label}
							onDoubleClick={() => handleDoubleClick()}>
							<input
								type="radio"
								name="option"
								className={classes.option}
								value="c"
								onClick={() => handleSelect("c")}
								onDoubleClick={() => handleDoubleClick()}
							/>
							<span className={classes.span}>Option C</span>
						</label>
						<label
							className={select.d ? classes.selectedLabel : classes.label}
							onDoubleClick={() => handleDoubleClick()}>
							<input
								type="radio"
								name="option"
								className={classes.option}
								value="d"
								onClick={() => handleSelect("d")}
								onDoubleClick={() => handleDoubleClick()}
							/>
							<span className={classes.span}>Option D</span>
						</label>
					</ul>
					{/* ))} */}
				</div>
				{/* <h3>
					<span>Select : "{currentAnswer}" </span>
					<span> Selected : "{selectedAnswers[currentIndex]}"</span>
				</h3>
				<hr style={{ height: "1px", backgroundColor: "gray solid" }} /> */}
			</div>
		</div>
	);
};

export default QuestionComponent;
