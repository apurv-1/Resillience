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
		padding: "20px",
		gridRowStart: "2",
	},
	option: {
		display: "none",
	},

	span: {
		// display: "inline-block",
		// position: "space-around",
		cursor: "pointer",
		border: "3px solid gray",
		borderRadius: "10px",
		padding: "15px 20px",
		"&:hover": {
			borderColor: "#232127",
			backgroundColor: "#33c9dc",
		},
		"&: checked": {
			borderColor: "#55ae95",
			backgroundColor: "#ffac8e",
			fontWeight: "600",
		},
	},
	// label: {
	// 	// display: "none",
	// 	borderColor: "black",
	// 	"& input": {
	// 		// display: "none",

	// 		"& checked": {
	// 			borderColor: "#55ae95",
	// 			backgroundColor: "#ffac8e",
	// 			fontWeight: "600",
	// 		},
	// 		"& span": {
	// 			display: "block",
	// 			cursor: "point",
	// 			border: "1px solid #ccc",
	// 			borderRadius: "5px",
	// 			padding: "2px 5px",
	// 			"&: hover": {
	// 				borderColor: "#55ae95",
	// 				backgroundColor: "#6decb9",
	// 			},
	// 		},
	// 	},
	// },
}));

const QuestionComponent = ({ test, currentQuestion, currentQuestionIndex, selectedAnswer }) => {
	const classes = useStyles();
	const [questions, setQuestions] = useState([]);
	const [testName, setTestName] = useState("");
	const [option, setOption] = useState([]);
	const [selected, setSelected] = useState([]);

	// const [currentQuestion, setCurrentQuestion] = useState({});
	// const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	// const [nextQuestion, setNextQuestion] = useState({});
	// const [previousQuestion, setPreviousQuestion] = useState({});
	// console.log(currentQuestion)

	useEffect(() => {
		setTestName(test.testName);
		// setQuestions(test.questions)
		setQuestions(test.questions);
		setOption([
			...option,
			{
				name: "Option A",
				value: 0,
			},
			{
				name: "Option B",
				value: 1,
			},
			{
				name: "Option C",
				value: 2,
			},
			{
				name: "Option D",
				value: 3,
			},
		]);
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
					{option.map(({ name, value }) => (
						<ul className={classes.optionContainer} key={value}>
							<label className={classes.label}>
								<input
									type="radio"
									name="option"
									checked={value === currentQuestion.correctOption}
									className={classes.option}
									value={selected}
									onClick={selectedAnswer}
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
// 							<label className={classes.label}>
// 								<input type="radio" name="Option A" className={classes.option} value="0" />
// 								<span className={classes.span}>Option A</span>
// 							</label>
// 							<label className={classes.label}>
// 								<input type="radio" name="Option A" className={classes.option} value="1" />
// 								<span className={classes.span}>Option B</span>
// 							</label>
// 						</div>
// 						<div style={{ marginLeft: "-30%" }}>
// 							<label className={classes.label}>
// 								<input type="radio" name="Option A" className={classes.option} value="2" />
// 								<span className={classes.span}>Option C</span>
// 							</label>
// 							<label className={classes.label}>
// 								<input type="radio" name="Option A" className={classes.option} value="3" />
// 								<span className={classes.span}>Option D</span>
// 							</label>
// 						</div>
