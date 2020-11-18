import React, { useContext, useEffect, useState } from "react";
import { makeStyles, createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TestContext from "../Context/TestContext";
import {
	SET_CURRENT_INDEX,
	SET_CURRENT_ANSWER,
	SET_SELECTED_ANSWERS,
	SET_SHOW_RESULTS,
	SET_CURRENT_TIME,
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

	const { state, dispatch } = useContext(TestContext);
	const {
		test,
		currentIndex,
		timeElapsed,
		currentAnswer,
		selectedAnswers,
		currentTime,
		showResult,
	} = state;
	const questionLength = test.questions.length;
	const [time, setTime] = useState(currentTime);
	console.log("time", time);
	useEffect(() => {
		const timer = setTimeout(() => {
			if (showResult) {
				clearTimeout(timer);
			}
			setTime(time + 1);
		}, 1000);
		return () => {
			clearTimeout(timer);
		};
	});
	/* eslint-disable */
	useEffect(() => {
		if (timeElapsed[currentIndex]) {
			setTime(timeElapsed[currentIndex]);
			timeElapsed[currentIndex] = time;
			dispatch({ type: SET_TIMER, timeElapsed: timeElapsed });
		} else {
			setTime(0);
			dispatch({ type: SET_CURRENT_TIME, currentTime: 0 });
		}
	}, [currentIndex]);

	const handleTimeElapsed = () => {
		timeElapsed[currentIndex] = time;
		dispatch({ type: SET_TIMER, timeElapsed: timeElapsed });
		dispatch({ type: SET_CURRENT_TIME, currentTime: 0 });
		setTime(0);
		console.log(timeElapsed);
	};

	const handleAnswer = () => {
		if (currentAnswer) {
			selectedAnswers[currentIndex] = currentAnswer;
			dispatch({ type: SET_SELECTED_ANSWERS, selectedAnswers: selectedAnswers });
			dispatch({ type: SET_CURRENT_ANSWER, currentAnswer: "" });
			console.log("selectd ", selectedAnswers);
		}
	};

	const next = () => {
		handleAnswer();
		handleTimeElapsed();
		if (timeElapsed[currentIndex + 1]) {
			setTime(timeElapsed[currentIndex + 1]);
		} else {
			setTime(0);
		}
		if (currentIndex + 1 < test.questions.length) {
			dispatch({
				type: SET_CURRENT_INDEX,
				currentIndex: currentIndex + 1,
			});
			return;
		}
	};

	const previous = () => {
		handleAnswer();
		handleTimeElapsed();
		dispatch({
			type: SET_CURRENT_INDEX,
			currentIndex: currentIndex - 1,
		});
		if (timeElapsed[currentIndex - 1]) {
			setTime(timeElapsed[currentIndex - 1]);
		} else {
			setTime(0);
		}
		return;
	};

	const handleSubmitTest = () => {
		if (currentAnswer) {
			handleAnswer();
		}
		timeElapsed[currentIndex] = time;
		dispatch({ type: SET_TIMER, timeElapsed: timeElapsed });
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
			{/* {time} */}
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
