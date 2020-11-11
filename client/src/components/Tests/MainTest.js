import React, { useState, useReducer } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
// import Alert from "@material-ui/lab/Alert";
// import Typography from "@material-ui/core/Typography";
//Components
import KeysComponent from "./KeysComponent";
import QuestionComponent from "./QuestionComponent";
import QuestionKeysComponent from "./QuestionKeysComponent";
import TimerComponent from "./TimerComponent";
import TestResult from "./TestResult";
//reducers
import TestContext from "../Context/TestContext";
import { SET_TEST, SET_OPTIONS } from "../Reducers/types";
import { initialState, testReducer } from "../Reducers/TestReducer";

const useStyles = makeStyles((theme) => ({
	root: {
		marginTop: "5%",
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
	// const [openTestId, setOpenTestId] = useState(true)
	// const [openMainTest, setOpenMainTest] = useState(false)
	// const [openResult, setOpenResult] = useState(false)

	const [testId, setTestId] = useState(null);
	const [questionLength, setQuestionLength] = useState(0);
	// const [setShowResult, setsetShowResult] = useState(false);

	const [state, dispatch] = useReducer(testReducer, initialState);
	const { test, showResult, currentIndex } = state;
	// console.log(showResult);
	// debugger;
	// console.log(test.questions[currentIndex].correctOption);
	const options = [
		{
			name: "Option A",
			value: "a",
			selected: false,
		},
		{
			name: "Option B",
			value: "b",
			selected: false,
		},
		{
			name: "Option C",
			value: "c",
			selected: false,
		},
		{
			name: "Option D",
			value: "d",
			selected: false,
		},
	];
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
					// console.log(options);
					dispatch({ type: SET_TEST, test: test.test });
					dispatch({ type: SET_OPTIONS, options: options });
					// console.log(test.test.questions[currentIndex].correctOption);
					// dispatch({type: SET_CORRECT_ANSWERS, correctAnswers: test.test.correctOption })
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

	const classes = useStyles();
	return (
		<div>
			{questionLength > 0 ? (
				<TestContext.Provider value={{ state, dispatch }}>
					{showResult === false ? (
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
								<KeysComponent />
							</Paper>
						</div>
					) : (
						<TestResult />
					)}
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
