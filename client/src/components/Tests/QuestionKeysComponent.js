import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core";
import TestContext from "../Context/TestContext";
import {
	SET_CURRENT_INDEX,
	SET_CURRENT_ANSWER,
	SET_CURRENT_TIME,
	// SET_TIMER,
} from "../Reducers/types";

const useStyles = makeStyles(() => ({
	fabBox: {
		padding: "20px",
		margin: "10px",
		marginLeft: "0px",
		maxWidth: "300px",
	},
	keys: {
		margin: "20px",
		marginLeft: "0px",
		height: "60%",
		// width: "300px",
		// minHeight: "60%",
		// overflowY: "auto",
	},
	label: {
		cursor: "pointer",
		margin: "8px",
		padding: "12px 18px",
		borderRadius: "35px",
		fontWeight: "bold",
		boxShadow: "0 0px 4px 0px rgba(54, 114, 192);",
		overflowY: "auto",
		// backgroundColor: "grey",
		"&:hover": {
			backgroundColor: "white",
			// boxShadow: "0 1px 3px 2px rgba(236, 236, 236);",
		},
	},
	attemptedLabel: {
		cursor: "pointer",
		margin: "8px",
		padding: "12px 18px",
		borderRadius: "35px",
		fontWeight: "bold",
		backgroundColor: "grey",
		boxShadow: "0 0px 4px 0px rgba(54, 114, 192);",
		// backgroundColor: "grey",
		"&:hover": {
			backgroundColor: "white",
		},
	},
	markedLabel: {
		cursor: "pointer",
		margin: "8px",
		padding: "12px 18px",
		borderRadius: "35px",
		fontWeight: "bold",
		boxShadow: "0 0px 4px 0px rgba(54, 114, 192);",
		backgroundColor: "#FFAC45",
		"&:hover": {
			backgroundColor: "grey",
			boxShadow: "0 1px 3px 2px rgba(236, 236, 236);",
		},
	},
	markedSelectedLabel: {
		cursor: "pointer",
		margin: "8px",
		padding: "12px 18px",
		borderRadius: "35px",
		fontWeight: "bold",
		boxShadow: "0 0px 4px 0px rgba(54, 114, 192);",
		backgroundColor: "green",
		"&:hover": {
			backgroundColor: "grey",
			boxShadow: "0 1px 3px 2px rgba(236, 236, 236);",
		},
	},
	currentLabel: {
		cursor: "pointer",
		margin: "8px",
		padding: "12px 18px",
		borderRadius: "35px",
		fontWeight: "bold",
		boxShadow: "0 0px 4px 0px rgba(54, 114, 192);",
		backgroundColor: "#0C659D",
		"&:hover": {
			// backgroundColor: "grey",
			boxShadow: "0 1px 3px 2px rgba(236, 236, 236);",
		},
	},
}));

const QuestionKeysComponent = () => {
	const classes = useStyles();
	const { state, dispatch } = useContext(TestContext);
	const { test, timeElapsed, currentIndex, isMarked, selectedAnswers } = state;
	// const [handleClass, setHandleClass] = useState(false);
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
	// console.log(isMarked);

	return (
		<div>
			<div className={classes.fabBox}>
				<hr style={{ height: "2px", backgroundColor: "gray solid" }} />
				<b>Questions Overview: </b>

				<div className={classes.keys}>
					{questions.length &&
						questions.map(({ questionNumber, _id }, index) => (
							<label
								key={_id}
								className={
									currentIndex === index
										? classes.currentLabel
										: isMarked[index]
										? classes.markedLabel
										: selectedAnswers[index]
										? isMarked[index] === true
											? classes.markedSelectedLabel
											: classes.attemptedLabel
										: selectedAnswers[index]
										? classes.attemptedLabel
										: classes.label
									// : classes.label
								}
								onClick={() => handleCurrentIndex(index)}>
								{questionNumber}
							</label>
						))}
				</div>
				<hr style={{ height: "2px", backgroundColor: "gray solid" }} />
			</div>
		</div>
	);
};

export default QuestionKeysComponent;
