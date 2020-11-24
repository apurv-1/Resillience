import React, { useContext } from "react";
import { makeStyles, Typography } from "@material-ui/core";
import TestContext from "../Context/TestContext";
import { SET_CURRENT_INDEX } from "../Reducers/types";

const useStyles = makeStyles(() => ({
	fabBox: {
		padding: "20px",
		margin: "10px",
		marginLeft: "0px",
		width: "320px",
	},
	keys: {
		margin: "18px",
		marginLeft: "0px",
		height: "60%",
	},
	label: {
		cursor: "pointer",
		margin: "8px",

		padding: "12px 18px",
		borderRadius: "35px",
		fontWeight: "bold",
		boxShadow: "0 0px 4px 0px rgba(54, 114, 192);",
		overflowY: "auto",
		"&:hover": {
			backgroundColor: "white",
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
		backgroundColor: "#0F7DC2",
		"&:hover": {
			// backgroundColor: "grey",
			boxShadow: "0 1px 3px 2px rgba(236, 236, 236);",
		},
	},
	bubbleContainer: {
		margin: "20px",
	},
}));

const QuestionKeysComponent = () => {
	const classes = useStyles();
	const { state, dispatch } = useContext(TestContext);
	const { test, currentIndex, isMarked, selectedAnswers } = state;
	const questions = test.questions;

	const handleCurrentIndex = (cIndex) => {
		dispatch({ type: SET_CURRENT_INDEX, currentIndex: cIndex });
	};

	return (
		<div>
			<div className={classes.fabBox}>
				<hr style={{ height: "2px", backgroundColor: "gray solid" }} />

				<Typography gutterBottom variant="h6" component="h6">
					Questions Overview:
				</Typography>

				<div className={classes.keys}>
					<Typography gutterBottom variant="h6" component="h6">
						Physics :
					</Typography>
					<div className={classes.bubbleContainer}>
						{questions.length &&
							questions.map(
								({ questionNumber, _id, subject }, index) =>
									subject === "Physics" && (
										<label
											key={_id}
											className={
												currentIndex === index
													? isMarked[index]
														? classes.markedLabel
														: classes.currentLabel
													: selectedAnswers[index]
													? isMarked[index] === true
														? classes.markedSelectedLabel
														: classes.attemptedLabel
													: selectedAnswers[index]
													? classes.attemptedLabel
													: isMarked[index] === true
													? classes.markedLabel
													: classes.label
												// : classes.label
											}
											onClick={() => handleCurrentIndex(index)}>
											{questionNumber}
										</label>
									)
							)}
					</div>
					<Typography gutterBottom variant="h6" component="h6">
						Chemistry :
					</Typography>
					<div className={classes.bubbleContainer}>
						{questions.length &&
							questions.map(
								({ questionNumber, _id, subject }, index) =>
									subject === "Chemistry" && (
										<label
											key={_id}
											className={
												currentIndex === index
													? isMarked[index]
														? classes.markedLabel
														: classes.currentLabel
													: selectedAnswers[index]
													? isMarked[index] === true
														? classes.markedSelectedLabel
														: classes.attemptedLabel
													: selectedAnswers[index]
													? classes.attemptedLabel
													: isMarked[index] === true
													? classes.markedLabel
													: classes.label
											}
											onClick={() => handleCurrentIndex(index)}>
											{questionNumber}
										</label>
									)
							)}
					</div>
					<Typography gutterBottom variant="h6" component="h6">
						Maths :
					</Typography>
					<div className={classes.bubbleContainer}>
						{questions.length &&
							questions.map(
								({ questionNumber, _id, subject }, index) =>
									subject === "Maths" && (
										<label
											key={_id}
											className={
												currentIndex === index
													? isMarked[index]
														? classes.markedLabel
														: classes.currentLabel
													: selectedAnswers[index]
													? isMarked[index] === true
														? classes.markedSelectedLabel
														: classes.attemptedLabel
													: selectedAnswers[index]
													? classes.attemptedLabel
													: isMarked[index] === true
													? classes.markedLabel
													: classes.label
												// : classes.label
											}
											onClick={() => handleCurrentIndex(index)}>
											{questionNumber}
										</label>
									)
							)}
					</div>
				</div>
				<hr style={{ height: "2px", backgroundColor: "gray solid" }} />
			</div>
		</div>
	);
};

export default QuestionKeysComponent;
