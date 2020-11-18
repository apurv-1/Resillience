import React, { useContext } from "react";
import { makeStyles, Fab } from "@material-ui/core";
import TestContext from "../Context/TestContext";
import {
	SET_CURRENT_INDEX,
	SET_CURRENT_ANSWER,
	SET_CURRENT_TIME,
	SET_TIMER,
} from "../Reducers/types";
// import Fab from "@material-ui/core/Fab";

const useStyles = makeStyles(() => ({
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
		width: "200px",
		marginTop: "2%",
		alignItems: "center",
	},
	optionContainer: {
		width: "100%",
	},
	option: {
		marginLeft: "22%",
		marginTop: "10px",
		marginBottom: "10px",
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
		maxWidth: "300px",
	},
	timer: {
		textAlign: "center",
		textSizeAdjust: "90%",
	},
}));

const QuestionKeysComponent = () => {
	const classes = useStyles();
	const { state, dispatch } = useContext(TestContext);
	const { test, timeElapsed, currentTime } = state;
	const questions = test.questions;
	// console.log(timeElapsed[currentIndex - 1]);
	// console.log(currentIndex);

	const handleCurrentIndex = (cIndex) => {
		dispatch({ type: SET_CURRENT_ANSWER, currentAnswer: "" });
		dispatch({ type: SET_CURRENT_INDEX, currentIndex: cIndex });
		if (timeElapsed[cIndex]) {
			console.log(timeElapsed[cIndex]);
			// currentTime = timeElapsed[cIndex] ;
			// dispatch({ type: SET_TIMER, timeElapsed: timeElapsed });
			dispatch({ type: SET_CURRENT_TIME, currentTime: timeElapsed[cIndex] });
		}
	};

	return (
		<div>
			<div className={classes.fabBox}>
				<hr style={{ height: "2px", backgroundColor: "gray solid" }} />
				<b>Questions Overview: </b>

				<div>
					{questions.length &&
						questions.map(({ questionNumber, _id }, index) => (
							<Fab
								size="medium"
								color="primary"
								key={_id}
								className={classes.fab}
								onClick={() => handleCurrentIndex(index)}>
								{questionNumber}
							</Fab>
						))}
				</div>
				<hr style={{ height: "2px", backgroundColor: "gray solid" }} />
			</div>
		</div>
	);
};

export default QuestionKeysComponent;
