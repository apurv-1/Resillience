import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TestContext from "../Context/TestContext";
import { SET_CURRENT_ANSWER } from "../Reducers/types";
// import Button from '@material-ui/core/Button';
// import Fab from "@material-ui/core/Fab";

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
		// display: "none",
		padding: "10px",
		gridRowStart: "2",
	},
	// option: {
	// 	display: "none",
	// },

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
	label: {
		// display: "none",
		// /borderColor: "black",
		cursor: "pointer",
		border: "3px solid gray",
		borderRadius: "25px",
		padding: "10px 150px",
		fontWeight: "bold",
		"&:hover": {
			borderColor: "#232127",
			backgroundColor: "grey",
		},
		"&:selected": {
			borderColor: "#55ae95",
		},
		$input: {
			display: "none",

			// "&$checked": {
			// 	borderColor: "#55ae95",
			// 	backgroundColor: "#ffac8e",
			// 	fontWeight: "600",
			// },
			span: {
				display: "block",
				cursor: "point",
				border: "1px solid #ccc",
				borderRadius: "5px",
				padding: "2px 5px",
				"&:hover": {
					borderColor: "#55ae95",
					backgroundColor: "#6decb9",
				},
				"&:checked": {
					fontWeight: "bold",
					borderColor: "#55ae95",
				},
			},
		},
	},
}));

const QuestionComponent = () => {
	const classes = useStyles();
	const { state, dispatch } = useContext(TestContext);
	const { currentIndex, options } = state;
	const questions = state.test.questions;

	const handleSelect = (selectedOption) => {
		// console.log(selectedOption);
		// console.log(questions[currentIndex].correctOption);
		const answer = { questionNo: questions[currentIndex].questionNumber, answer: selectedOption };
		dispatch({ type: SET_CURRENT_ANSWER, currentAnswer: answer });
	};

	// const isCorrect = (selectedOption) => {
	// 	if(value === questions[currentIndex].correctOption){
	//
	// 	}
	// }
	// console.log(answers);

	return (
		<div>
			<div className={classes.box}>
				<div className={classes.top}>
					<span>
						<h2>{state.test.testName}</h2>
					</span>
					<span>
						{1 + currentIndex} of {questions.length}
					</span>
				</div>
				<hr style={{ height: "2px", backgroundColor: "gray solid" }} />

				<div className={classes.question}>
					<img alt="question" src={questions[currentIndex].questionImage} />
					<hr style={{ height: "2px", backgroundColor: "gray solid" }} />
				</div>

				<div>
					{options.map(({ name, value }) => (
						<ul className={classes.optionContainer} key={value}>
							<label className={classes.label}>
								<input
									type="radio"
									name="option"
									// className={classes.option}
									value={value}
									// onSelect={() => handleSelect(value)}
									// checked={() => isCorrect(value)}
									onChange={() => handleSelect(value)}
								/>
								<span className={classes.span}>{name}</span>
							</label>
						</ul>
					))}

					<hr style={{ height: "1px", backgroundColor: "gray solid" }} />
				</div>
			</div>
		</div>
	);
};

export default QuestionComponent;

// <div style={{ marginLeft: "-30%" }}>
// 	<label className={classes.label}>
// 		<input type="radio" name="Option A" className={classes.option} value="0" />
// 		<span className={classes.span}>Option A</span>
// 	</label>
// 	<label className={classes.label}>
// 		<input type="radio" name="Option A" className={classes.option} value="1" />
// 		<span className={classes.span}>Option B</span>
// 	</label>
// </div>
// <div>
// 	<label className={classes.label}>
// 		<input type="radio" name="Option A" className={classes.option} value="2" />
// 		<span className={classes.span}>Option C</span>
// 	</label>
// 	<label className={classes.label}>
// 		<input type="radio" name="Option A" className={classes.option} value="3" />
// 		<span className={classes.span}>Option D</span>
// 	</label>
// </div>
