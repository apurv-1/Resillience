import React, { useContext, useState } from "react";
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
		marginLeft: "8%",
		display: "flex",
		flexDirection: "row",
	},
	option: {
		display: "none",
	},
	label: {
		// display: "none",
		// /borderColor: "black",
		cursor: "pointer",
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
		"&:checked": {
			borderColor: "#55ae95",
			backgroundColor: "#ffac8e",
			fontWeight: "600",
		},
	},
}));

const QuestionComponent = () => {
	const classes = useStyles();
	// const [select, setSelect] = useState({
	// 	backgroundColor: "#55ae95",
	// });
	const { state, dispatch } = useContext(TestContext);
	const { currentIndex, options, selectedAnswers, currentAnswer } = state;
	const questions = state.test.questions;

	const handleSelect = (selectedOption) => {
		dispatch({ type: SET_CURRENT_ANSWER, currentAnswer: selectedOption });
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
					{options.map(({ name, value }) => (
						<ul key={value}>
							<label className={classes.label}>
								<input
									type="radio"
									name="option"
									className={classes.option}
									value={value}
									// onClick={(e) => {
									// 	e.preventDefault();
									// 	e.target.style.color = "yellow";
									// 	console.log(e.target);
									// }}
									// onSelect={() => handleSelect(value)}
									// checked={value === questions[currentIndex].correctOption}
									onChange={() => handleSelect(value)}
								/>
								<span className={classes.span}>{name}</span>
							</label>
						</ul>
					))}
				</div>
				<h3>
					<span>Select : "{currentAnswer}" </span>
					<span> Selected : "{selectedAnswers[currentIndex]}"</span>
				</h3>
				<hr style={{ height: "1px", backgroundColor: "gray solid" }} />
			</div>
		</div>
	);
};

export default QuestionComponent;

// label: {
// 	// display: "flex",
// 	// position: "space-around",
// 	cursor: "pointer",
// 	border: "3px solid gray",
// 	borderRadius: "10px",
// 	padding: "8px 12px",
// 	"&:hover": {
// 		borderColor: "#232127",
// 		backgroundColor: "#33c9dc",
// 	},
// 	"&${checked}": {
// 		borderColor: "#55ae95",
// 		backgroundColor: "#ffac8e",
// 		fontWeight: "500",
// 	},
// },
// span:{

// }
