import React, { useContext, useEffect, useState } from "react";
import { makeStyles, createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TestContext from "../Context/TestContext";
import {
	SET_CURRENT_INDEX,
	SET_CURRENT_ANSWER,
	SET_SELECTED_ANSWERS,
	SET_SHOW_RESULTS,
	SET_MARKS,
	SET_TIMER,
} from "../Reducers/types";
import { blue, red } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
	buttonContainer: {
		padding: "1%",
		// backfaceVisibility: "hidden",
	},
	button: {
		margin: "2.5%",
		caretColor: "#0089FF",
	},

	toast: {
		width: "100%",
		textAlign: "center",
		"& > * + *": {
			marginTop: "5px",
		},
	},
}));
const theme = createMuiTheme({
	palette: {
		primary: red,
		secondary: blue,
	},
});

const KeysComponent = () => {
	const classes = useStyles();
	const [time, setTime] = useState(0);
	const { state, dispatch } = useContext(TestContext);
	const { test, currentIndex, timeElapsed, currentAnswer, selectedAnswers, marks } = state;
	const questionLength = state.test.questions.length;
	let correct = test.questions[currentIndex].correctOption;

	useEffect(() => {
		const timer = setTimeout(() => {
			setTime(time + 1);
		}, 1000);
		return () => {
			clearTimeout(timer);
		};
	});
	// console.log(time);

	const handleTimeElapsed = () => {
		if (currentIndex) {
			timeElapsed[currentIndex] = time;
			console.log(timeElapsed);
			if (timeElapsed[currentIndex]) {
				setTime(timeElapsed[currentIndex]);
			} else {
				setTime(0);
			}
		}
	};

	const handleAnswer = () => {
		if (currentAnswer) {
			// console.log("correct: ", correct);
			// correctAnswers[currentIndex] = correct;
			// dispatch({ type: SET_CORRECT_ANSWERS, correctAnswers: correctAnswers });

			selectedAnswers[currentIndex] = currentAnswer;
			dispatch({ type: SET_SELECTED_ANSWERS, selectedAnswers: selectedAnswers });
			// console.log("selectd ", selectedAnswers);

			dispatch({ type: SET_CURRENT_ANSWER, currectOption: "" });
			correct = "";
		}
	};

	const handleCorrectOption = () => {
		// console.log(correct, "false", currentAnswer);

		if (currentAnswer === correct) {
			console.log(correct, " true ", currentAnswer);
			dispatch({
				type: SET_MARKS,
				marks: marks + 1,
			});
			return;
		}
	};

	useEffect(() => {
		handleCorrectOption();
		handleAnswer();
		handleTimeElapsed();
	}, [currentIndex]);

	const next = () => {
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

	const handleSubmitTest = () => {
		if (currentAnswer) {
			selectedAnswers.push(currentAnswer);
			dispatch({ type: SET_SELECTED_ANSWERS, selectedAnswers: selectedAnswers });
			dispatch({ type: SET_CURRENT_ANSWER, currectOption: "" });
		}
		dispatch({
			type: SET_SHOW_RESULTS,
			showResult: true,
		});
	};

	return (
		<div className={classes.buttonContainer}>
			<ThemeProvider theme={theme}>
				<Button
					variant="contained"
					color="primary"
					className={classes.button}
					style={{ marginLeft: "-10px" }}>
					End Test
				</Button>
			</ThemeProvider>

			<Button
				variant="contained"
				color="primary"
				className={classes.button}
				disabled={currentIndex === 0}
				onClick={() => previous()}>
				Previous Question
			</Button>

			<Button variant="contained" color="primary" className={classes.button}>
				Mark for Review
			</Button>

			<Button
				variant="contained"
				color="primary"
				className={classes.button}
				disabled={currentIndex === questionLength - 1}
				onClick={() => next()}>
				Next Question
			</Button>
			{time}
			<Button
				variant="contained"
				color="primary"
				className={classes.button}
				onClick={() => handleSubmitTest()}>
				Submit Test
			</Button>
		</div>
	);
};

export default KeysComponent;
