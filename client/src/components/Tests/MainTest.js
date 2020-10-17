import React, { useReducer, useState } from "react";
//  import { Helmet } from "react-helmet";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Alert from "@material-ui/lab/Alert";
// import Typography from "@material-ui/core/Typography";
//Components
import QuestionComponent from "./QuestionComponent";
import QuestionKeysComponent from "./QuestionKeysComponent";
import TimerComponent from "./TimerComponent";
//reducers
import { SET_CURRENT_QUESTION, SET_CURRENT_ANSWER, SET_ANSWERS, SET_SHOW_RESULTS } from "../Reducers/types";
import { quizReducer } from "../Reducers/Reducer";

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
	const [check, setCheck] = useState(false);
	const [testId, setTestId] = useState("");
	const [test, setTest] = useState([]);
	const [selected, setSelected] = useState([]);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [questionLength, setQuestionLength] = useState(0);
	const [questionNum, setQuestionNum] = useState(0);
	// const [openAlert, setOpenAlert] = useState(false);

	const initialState = {
		currentQuestion: 0,
		currentOption: "",
		correctOption: "",
		showResult: false,
	};
	const [state, dispatch] = useReducer(quizReducer, initialState);
	const { currentQuestion, currectOption, correctOption, showResult } = state;

	const question = test.questions[currentQuestion];

	const FetchTest = () => {
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
					setTest(test.test);
					setQuestionLength(test.test.questions.length);
					setQuestionNum(test.test.questions.questionNumber);
					// setTime(test.test.testDuration)
					// console.log(test.test.testDuration)
					setCheck(true);
				}
			})
			.catch((err) => {
				console.log(err);
			});
	};

	// const handleSelect = e =>{
	// 	setSelected({

	// 	})
	// }
	// const SelectedAnswer = (e) => {
	// 	// debugger;
	// 	console.log(e);
	// 	const studentAnswer = [selected];
	// 	studentAnswer[currentIndex] = e;
	// 	// console.log(studentAnswer);
	// 	setSelected([studentAnswer]);
	// };
	// const handleCurrentIndex = (questionNo) => {
	// 	setCurrentIndex(() => questionNo);
	// };

	// const AlertBox = () => {
	// 	return(
	// 		<div className={classes.toast}>
	// 			<Alert variant="outlined" severity="error">
	// 				Please enter valid Test ID
	// 			</Alert>
	// 		</div>
	// 	)
	// }

	// useEffect(()=>{
	//     if(currentIndex === (questionLength-1)){
	//         setDisable(true);
	//     }
	//     else{
	//         setDisable(false)
	//     }
	// })

	const classes = useStyles();
	return (
		<div className={classes.root}>
			{check && test.questions.length > 0 ? (
				<div>
					<Paper elevation={5} className={classes.paper3}>
						<TimerComponent timeRemaining={test.testDuration} />
						<QuestionKeysComponent
							test={test}
							handleCurrentIndex={(questionNo) => setCurrentIndex(questionNo)}
							// questionsLength = {questionLength}
							// currentQuestionIndex={1 + currentIndex}
							// question = {}
						/>
					</Paper>
					<Paper elevation={5} className={classes.paper1}>
						<QuestionComponent
							test={test}
							currentQuestion={test.questions[currentIndex]}
							currentQuestionIndex={currentIndex}
							// selectedAnswer={(e) => SelectedAnswer(e)}
						/>
					</Paper>
					<Paper elevation={5} className={classes.paper2}>
						<div className={classes.buttonContainer}>
							<Button variant="contained" color="red" className={classes.button} style={{ marginLeft: "-10px" }}>
								End Test
							</Button>
							{currentIndex === 0 ? (
								<Button variant="contained" color="primary" className={classes.button} disabled>
									Previous Question
								</Button>
							) : (
								<Button variant="contained" color="primary" className={classes.button} onClick={() => setCurrentIndex(currentIndex - 1)}>
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
									onClick={() => {
										setCurrentIndex(currentIndex + 1);
										// SelectedAnswer();
									}}>
									Next Question
								</Button>
							)}
							<Button variant="contained" color="primary" className={classes.button}>
								Submit Test
							</Button>
						</div>
					</Paper>
				</div>
			) : (
				<div className={classes.startbox}>
					<Paper elevation={5} className={classes.paper4}>
						<div>
							<TextField id="outlined-basic" label="Enter Test ID" variant="outlined" value={testId} onChange={(e) => setTestId(e.target.value)} fullWidth />
						</div>

						<Button
							variant="contained"
							color="primary"
							// className={classes.button}
							style={{ width: "100%", marginTop: "3%" }}
							onClick={() => FetchTest()}>
							Begin Test
						</Button>
					</Paper>
				</div>
			)}
		</div>
	);
};

export default MainTest;
