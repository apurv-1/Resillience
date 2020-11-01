import React, { useState, useReducer } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
// import Alert from "@material-ui/lab/Alert";
// import Typography from "@material-ui/core/Typography";
//Components
import QuestionComponent from "./QuestionComponent";
import QuestionKeysComponent from "./QuestionKeysComponent";
import TimerComponent from "./TimerComponent";
//reducers
import TestContext from "../Context/TestContext";
import {
	SET_TEST,
	SET_CURRENT_INDEX,
	SET_CURRENT_ANSWER,
	SET_ANSWERS,
	SET_SHOW_RESULTS,
} from "../Reducers/types";
import { initialState, testReducer } from "../Reducers/TestReducer";

const useStyles = makeStyles((theme) => ({
	root: {
		// margin: "4%",
		marginTop: "5%",
		// maxWidth:"70%",
		// maxHeight:"100%",
		paddingLeft: "60px",
		paddingRight: "60px",
	},
	paper1: {
		margin: "1%",
		marginTop: "4%",
		paddingTop: "40px",
		maxWidth: "70%",
		maxHeight: "100%",
		textAlign: "center",
		// color: "#f8f8f8"
	},
	paper2: {
		margin: "1%",
		marginTop: "2%",
		paddingTop: "0px",
		maxWidth: "70%",
		maxHeight: "100%",
		textAlign: "center",
		marginBottom: "-10%",
	},
	paper3: {
		float: "right",
		// margin: "1%",
		// marginTop: "4%",
		paddingTop: "20px",
		maxWidth: "30%",
		maxHeight: "100%",
		// textAlign: "center",
	},
	startbox: {
		padding: "1%",
		marginTop: "5%",
		display: "flex",
		alignItems: "center",
		justifyContent: "space-around",
	},
	paper4: {
		padding: "5%",

		textAlign: "center",
		// color: "#f8f8f8"
	},
	buttonContainer: {
		padding: "1%",
		// backfaceVisibility: "hidden",
	},
	button: {
		margin: "2.5%",
		caretColor: "#0089FF",
		// color: theme.palette.common.red
	},
	text: {
		border: "2px",
		padding: "2%",
	},
	toast: {
		width: "100%",
		textAlign: "center",
		"& > * + *": {
			marginTop: "5px",
		},
	},
}));

const MainTest = () => {
	// const [check, setCheck] = useState(false);
	const [testId, setTestId] = useState(null);
	const [questionLength, setQuestionLength] = useState(0);
	// const initialState = {
	// 	currentQuestion: 0,
	// 	currentOption: "",
	// 	answers: [],
	// 	showResult: false,
	// };

	const [state, dispatch] = useReducer(testReducer, initialState);
	const { test, currentIndex, currentOption, correctOption, answers, showResult } = state;

	// const [currentIndex, setCurrentIndex] = useState(0);

	// const [questionNum, setQuestionNum] = useState(0);
	// const [openAlert, setOpenAlert] = useState(false);

	const fetchTest = () => {
		fetch(`/showtest?testid=${testId}`, {
			method: "get",
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((res) => res.json())
			.then((test) => {
				if (test.error) {
					// setOpenAlert(true);
					console.log(test);
				} else {
					// setTest(test.test);
					// setCheck(true);
					dispatch({ type: SET_TEST, test: test.test });
					setQuestionLength(test.test.questions.length);
				}
			})
			.catch((err) => {
				console.log(err);
			});
	};

	// console.log("hello: ", test.questions);

	const fetchTestId = () => {
		return (
			<div className={classes.startbox}>
				<Paper elevation={5} className={classes.paper4}>
					<div>
						<TextField
							id="outlined-basic"
							label="Enter Test ID"
							variant="outlined"
							value={testId}
							onChange={(e) => setTestId(e.target.value)}
							fullWidth
						/>
					</div>
					<Button
						variant="contained"
						color="primary"
						// className={classes.button}
						style={{ width: "100%", marginTop: "3%" }}
						onClick={() => fetchTest()}>
						Begin Test
					</Button>
				</Paper>
			</div>
		);
	};

	const next = () => {
		const question = test.questions[currentIndex];
		// debugger;
		const answer = { questionNo: question.questionNumber, answer: currentOption };

		answers.push(answer);
		dispatch({ type: SET_ANSWERS, answers });
		dispatch({ type: SET_CURRENT_ANSWER, currectOption: "" });

		if (currentIndex + 1 < test.questions.length) {
			dispatch({
				type: SET_CURRENT_INDEX,
				currentIndex: currentIndex + 1,
			});
			return;
		}
	};

	const previous = () => {
		dispatch({
			type: SET_CURRENT_INDEX,
			currentIndex: currentIndex - 1,
		});
		return;
	};

	const classes = useStyles();
	return (
		<div>
			{questionLength > 0 ? (
				<TestContext.Provider value={{ state, dispatch }}>
					<div className={classes.root}>
						<div>
							<Paper elevation={5} className={classes.paper3}>
								<TimerComponent timeRemaining={test.testDuration} />
								<QuestionKeysComponent />
							</Paper>
						</div>
						<Paper elevation={5} className={classes.paper1}>
							<QuestionComponent />
						</Paper>

						<Paper elevation={5} className={classes.paper2}>
							<div className={classes.buttonContainer}>
								<Button
									variant="contained"
									color="red"
									className={classes.button}
									style={{ marginLeft: "-10px" }}>
									End Test
								</Button>
								{currentIndex === 0 ? (
									<Button variant="contained" color="primary" className={classes.button} disabled>
										Previous Question
									</Button>
								) : (
									<Button
										variant="contained"
										color="primary"
										className={classes.button}
										onClick={() => previous()}>
										Previous Question
									</Button>
								)}

								<Button variant="contained" color="primary" className={classes.button}>
									Mark for Review
								</Button>

								{currentIndex === questionLength - 1 ? (
									<Button variant="contained" color="primary" className={classes.button} disabled>
										Next Question
									</Button>
								) : (
									<Button
										variant="contained"
										color="primary"
										className={classes.button}
										onClick={() => next()}>
										Next Question
									</Button>
								)}
								<Button variant="contained" color="primary" className={classes.button}>
									Submit Test
								</Button>
							</div>
						</Paper>
					</div>
				</TestContext.Provider>
			) : (
				fetchTestId()
			)}
		</div>
	);
};

export default MainTest;

// 	<div className={classes.root}>
// 		{check && test.questions.length > 0 ? (
// 			<div>
// 				<Paper elevation={5} className={classes.paper3}>
// 					<TimerComponent timeRemaining={test.testDuration} />
// 					<QuestionKeysComponent
// 						test={test}
// 						handleCurrentIndex={(questionNo) => setCurrentIndex(questionNo)}
// 					/>
// 				</Paper>
// <Paper elevation={5} className={classes.paper1}>
// 	<QuestionComponent
// 		test={test}
// 		currentQuestion={test.questions[currentIndex]}
// 		currentQuestionIndex={currentIndex}
// 		// selectedAnswer={(e) => SelectedAnswer(e)}
// 	/>
// </Paper>
// 			</div>
// 		) : (

// 		)}
// 	</div>
