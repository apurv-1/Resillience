import React, { useContext, useEffect } from "react";
import {
	makeStyles,
	// createMuiTheme,
	// ThemeProvider,
} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TestContext from "../Context/TestContext";
import {
	SET_CURRENT_INDEX,
	SET_SELECTED_ANSWERS,
	SET_SHOW_RESULTS,
	SET_IS_MARKED,
	SET_INCREMENT_TIME,
} from "../Reducers/types";
// import { blue, red } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
	buttonContainer: {
		marginLeft: "5%",
		marginRight: "5%",
		padding: "4%",
		display: "flex",
		justifyContent: "space-around",
	},
	toast: {
		width: "100%",
		textAlign: "center",
		"& > * + *": {
			marginTop: "5px",
		},
	},
}));
// const theme = createMuiTheme({
// 	palette: {
// 		primary: red,
// 		secondary: blue,
// 	},
// });

const KeysComponent = () => {
	const classes = useStyles();

	const { state, dispatch } = useContext(TestContext);
	const { test, currentIndex, selectedAnswers, showResult, isMarked } = state;
	const questionLength = test.questions.length;
	// const [time, setTime] = useState(timeElapsed);

	// console.log("time", isMarked);

	useEffect(() => {
		const timer = setTimeout(() => {
			if (showResult) {
				clearTimeout(timer);
			}
			dispatch({ type: SET_INCREMENT_TIME });
		}, 1000);
		return () => {
			clearTimeout(timer);
		};
	});
	// console.log(currentIndex, timeElapsed);
	// /* eslint-disable */

	// const handleTimeElapsed = () => {
	// 	// if (timeElapsed[time]) {
	// 	// }
	// 	timeElapsed[currentIndex] = time;
	// 	dispatch({ type: SET_TIMER, timeElapsed: timeElapsed });
	// 	dispatch({ type: SET_CURRENT_TIME, currentTime: 0 });
	// 	setTime(0);
	// console.log(timeElapsed);
	// };

	// const handleAnswer = () => {
	// 	if (currentAnswer) {
	// 		selectedAnswers[currentIndex] = currentAnswer;
	// 		dispatch({ type: SET_SELECTED_ANSWERS, selectedAnswers: selectedAnswers });
	// 		dispatch({ type: SET_CURRENT_ANSWER, currentAnswer: "" });
	// 		console.log("selectd ", selectedAnswers);
	// 	}
	// };
	// console.log("selectd ", isMarked);
	const save = () => {
		// handleAnswer();
		// isAttempted[currentIndex] = true;
		// dispatch({ type: SET_IS_ATTEMPTED, isAttempted: isAttempted });

		if (currentIndex + 1 < questionLength) {
			dispatch({
				type: SET_CURRENT_INDEX,
				currentIndex: currentIndex + 1,
			});
			return;
		}
	};

	const clear = () => {
		isMarked[currentIndex] = false;
		dispatch({ type: SET_IS_MARKED, isMarked: isMarked });
		selectedAnswers[currentIndex] = "";
		dispatch({ type: SET_SELECTED_ANSWERS, selectedAnswers: selectedAnswers });
		// console.log(selectedAnswers);
		return;
	};

	const handleSubmitTest = () => {
		dispatch({
			type: SET_SHOW_RESULTS,
			showResult: true,
		});
	};

	const marked = () => {
		isMarked[currentIndex] = true;
		dispatch({ type: SET_IS_MARKED, isMarked: isMarked });
		if (currentIndex + 1 < questionLength) {
			dispatch({
				type: SET_CURRENT_INDEX,
				currentIndex: currentIndex + 1,
			});
			return;
		}
	};

	return (
		<div className={classes.buttonContainer}>
			<Button variant="contained" color="primary" className={classes.button} onClick={() => clear()}>
				Clear Selection
			</Button>

			<Button variant="contained" color="primary" className={classes.button} onClick={() => marked()}>
				Review Later
			</Button>

			<Button variant="contained" color="primary" className={classes.button} onClick={() => save()}>
				Save Selection
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
