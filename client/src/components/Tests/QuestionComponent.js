import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
// import Button from '@material-ui/core/Button';
import Fab from "@material-ui/core/Fab";

const useStyles = makeStyles((theme) => ({
	root: {
		// margin: "4%",
		marginTop: "5%",
		// maxWidth:"70%",
		// maxHeight:"100%",

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
		width: "100%",
	},
	option: {
		// display: "none",
		marginLeft: "22%",
		marginTop: "10px",
		marginBottom: "10px",
		// background: theme.palette.common.button,
	},
	buttonContainer: {
		padding: "20px",
	},
	button: {
		marginLeft: "80px",
	},
	fab: {
		margin: "10px",
	},
	fabBox: {
		padding: "20px",
	},
	span: {
		// display: "block",
		cursor: "point",
		border: "2px solid #ccc",
		borderRadius: "5px",
		padding: "5px 10px",
		"&: hover": {
			borderColor: "#55ae95",
			backgroundColor: "#6decb9",
		},
	},
	label: {
		// display: "none",
		borderColor: "black",
		"& input": {
			// display: "none",

			"& checked": {
				borderColor: "#55ae95",
				backgroundColor: "#ffac8e",
				fontWeight: "600",
			},
			"& span": {
				display: "block",
				cursor: "point",
				border: "1px solid #ccc",
				borderRadius: "5px",
				padding: "2px 5px",
				"&: hover": {
					borderColor: "#55ae95",
					backgroundColor: "#6decb9",
				},
			},
		},
	},
}));

const QuestionComponent = ({ test, currentQuestion, currentQuestionIndex }) => {
	const classes = useStyles();
	const [questions, SetQuestions] = useState([]);
	const [testName, SetTestName] = useState("");
	// const [selected, setSelected] = useState("#D10A0A");
	// const [currentQuestion, setCurrentQuestion] = useState({});
	// const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	// const [nextQuestion, setNextQuestion] = useState({});
	// const [previousQuestion, setPreviousQuestion] = useState({});
	// console.log(currentQuestion)

	useEffect(() => {
		SetTestName(test.testName);
		// SetQuestions(test.questions)
		SetQuestions(test.questions);
	}, []);

	return (
		<div>
			<div className={classes.box}>
				<div className={classes.top}>
					<span>
						<h2>{testName}</h2>
					</span>
					<span>
						{currentQuestionIndex} of {questions.length}
					</span>
				</div>

				<hr style={{ height: "2px", backgroundColor: "gray solid" }} />
				<div className={classes.question}>
					{/* <img alt="question" src="https://res.cloudinary.com/rweb1/image/upload/v1601136030/iukekz1lf7truo7huhtw.png" /> */}
					<img alt="question" src={currentQuestion.questionImage} />
					<hr style={{ height: "2px", backgroundColor: "gray solid" }} />
				</div>
				<div>
					<li>
						<div style={{ marginLeft: "-30%" }}>
							<label className={classes.label}>
								<input type="radio" name="Option A" className={classes.option} value="0" />
								<span className={classes.span}>Option A</span>
							</label>
							<label className={classes.label}>
								<input type="radio" name="Option A" className={classes.option} value="1" />
								<span className={classes.span}>Option B</span>
							</label>
						</div>
						<div style={{ marginLeft: "-30%" }}>
							<label className={classes.label}>
								<input type="radio" name="Option A" className={classes.option} value="2" />
								<span className={classes.span}>Option C</span>
							</label>
							<label className={classes.label}>
								<input type="radio" name="Option A" className={classes.option} value="3" />
								<span className={classes.span}>Option D</span>
							</label>
						</div>
					</li>
					<hr style={{ height: "1px", backgroundColor: "gray solid" }} />
				</div>
			</div>
		</div>
	);
};

export default QuestionComponent;
