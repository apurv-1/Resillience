import React, { useContext } from "react";
import { makeStyles, Typography } from "@material-ui/core";
import TestContext from "../Context/TestContext";
import { SET_CURRENT_INDEX } from "../Reducers/types";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

const useStyles = makeStyles(() => ({
	fabBox: {
		padding: "20px",
		margin: "10px",
		marginLeft: "0px",
		width: "320px",
		height: "400px",
		overflow: "scroll",
		overflowX: "hidden",
	},
	// keys: {
	// 	margin: "18px",
	// 	marginLeft: "0px",
	// 	height: "60%",
	// },
	bubbleContainer: {
		margin: "20px",
		display: "flex",
		flexWrap: "wrap",
		// justifyContent: "space-between",
	},
	label: {
		cursor: "pointer",
		margin: "6px",
		padding: "12px 18px",
		borderRadius: "35px",
		fontWeight: "bold",
		boxShadow: "0 0px 4px 0px rgba(54, 114, 192);",
	},
	visitedLabel: {
		cursor: "pointer",
		margin: "6px",
		padding: "12px 18px",
		borderRadius: "35px",
		fontWeight: "bold",
		boxShadow: "0 0px 4px 0px rgba(54, 114, 192);",
		backgroundColor: "#FF6961",
	},
	attemptedLabel: {
		cursor: "pointer",
		margin: "6px",
		padding: "12px 18px",
		borderRadius: "35px",
		fontWeight: "bold",
		backgroundColor: "#2E8B57",
		boxShadow: "0 0px 4px 0px rgba(54, 114, 192);",
	},
	markedLabel: {
		cursor: "pointer",
		margin: "6px",
		padding: "12px 18px",
		borderRadius: "35px",
		fontWeight: "bold",
		boxShadow: "0 0px 4px 0px rgba(54, 114, 192);",
		backgroundColor: "#565fb8",
	},
	markedSelectedLabel: {
		cursor: "pointer",
		margin: "6px",
		padding: "7px 9px",
		borderRadius: "35px",
		fontWeight: "bold",
		boxShadow: "0 0px 4px 0px rgba(54, 114, 192);",
		backgroundColor: "#565fb8",
	},
	currentLabel: {
		cursor: "pointer",
		margin: "6px",
		padding: "10px 16px",
		borderRadius: "35px",
		fontWeight: "bold",
		boxShadow: "0 0px 4px 0px rgba(54, 114, 192);",
		border: "2px solid",
		borderColor: "green",
	},
}));

const QuestionKeysComponent = () => {
	const classes = useStyles();
	const { state, dispatch } = useContext(TestContext);
	const { test, currentIndex, isMarked, selectedAnswers, isVisited, currentSubject } = state;
	// console.log(currentSubject);
	const questions = test.questions;

	const handleCurrentIndex = (cIndex) => {
		dispatch({ type: SET_CURRENT_INDEX, currentIndex: cIndex });
	};

	return (
		<div className={classes.fabBox}>
			<div>
				<hr style={{ height: "2px", backgroundColor: "gray solid" }} />

				<Typography gutterBottom variant="h6" component="h6">
					Questions Overview:
				</Typography>

				<div className={classes.keys}>
					<b>{currentSubject} :</b>
					<div className={classes.bubbleContainer}>
						{questions.length &&
							questions.map(
								({ questionNumber, _id, subject }, index) =>
									subject === currentSubject && (
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
													: isVisited[index] === true
													? classes.visitedLabel
													: classes.label
											}
											onClick={() => handleCurrentIndex(index)}>
											{isMarked[index] === true && selectedAnswers[index] ? (
												<CheckCircleIcon />
											) : (
												questionNumber
											)}
										</label>
									)
							)}
					</div>
				</div>
				<hr style={{ height: "2px", backgroundColor: "gray solid" }} />
				{/* <div>
					<label className={classes.currentLabel} />
					<label className={classes.attemptedLabel} />
					<label className={classes.markedLabel} />
					<label className={classes.label} />
					<label className={classes.markedSelectedLabel} />
				</div>
				<hr style={{ height: "2px", backgroundColor: "gray solid" }} /> */}
			</div>
		</div>
	);
};

export default QuestionKeysComponent;
