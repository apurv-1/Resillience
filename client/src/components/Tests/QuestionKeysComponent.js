import React, { useContext } from "react";
import { makeStyles, Typography } from "@material-ui/core";
import TestContext from "../Context/TestContext";
import { SET_CURRENT_INDEX } from "../Reducers/types";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

const useStyles = makeStyles(() => ({
	fabBox: {
		padding: "20px",
		marginTop: "-18px",
		// margin: "10px",
		marginLeft: "0px",
		width: "320px",
		height: "400px",
		// overflow: "scroll",
		// overflowX: "hidden",
	},
	// keys: {
	// 	margin: "18px",
	// 	marginLeft: "0px",
	// 	height: "60%",
	// },
	tick: {
		height: "0px",
		width: "0px",
		margin: "-4px",
		marginLeft: "5px",
		padding: "0px",
		color: "black",
		// border: "10px solid white",
	},
	bubbleContainer: {
		margin: "20px",
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "space-between",
	},
	label: {
		cursor: "pointer",
		margin: "5px",
		padding: "10px 10px",
		borderRadius: "5px",
		fontWeight: "bold",
		fontSize: "12px",
		color: "grey",
		boxShadow: "0 0px 4px 0px rgba(54, 114, 192);",
	},
	visitedLabel: {
		cursor: "pointer",
		margin: "5px",
		padding: "10px 10px",
		borderRadius: "5px",
		fontWeight: "bold",
		fontSize: "12px",
		color: "white",
		boxShadow: "0 0px 4px 0px rgba(54, 114, 192);",
		backgroundColor: "#FF6961",
	},
	attemptedLabel: {
		cursor: "pointer",
		margin: "5px",
		padding: "10px 10px",
		borderRadius: "5px",
		fontWeight: "bold",
		fontSize: "12px",
		color: "white",
		backgroundColor: "#2E8B57",
		boxShadow: "0 0px 4px 0px rgba(54, 114, 192);",
	},
	markedLabel: {
		cursor: "pointer",
		margin: "5px",
		padding: "10px 10px",
		borderRadius: "5px",
		fontWeight: "bold",
		fontSize: "12px",
		color: "white",
		boxShadow: "0 0px 4px 0px rgba(54, 114, 192);",
		backgroundColor: "#565fb8",
	},
	currentLabel: {
		cursor: "pointer",
		margin: "5px",
		padding: "8px 8px",
		borderRadius: "5px",
		fontWeight: "bold",
		fontSize: "12px",
		boxShadow: "0 0px 4px 0px rgba(54, 114, 192);",
		border: "2px solid",
		borderColor: "green",
	},
}));

const QuestionKeysComponent = () => {
	const classes = useStyles();
	const { state, dispatch } = useContext(TestContext);
	const { test, isMarked, selectedAnswers, currentIndex, isVisited, currentSubject } = state;
	// console.log(currentSubject);
	const questions = test.questions;

	const handleCurrentIndex = (cIndex) => {
		dispatch({ type: SET_CURRENT_INDEX, currentIndex: cIndex });
	};

	return (
		<div className={classes.fabBox}>
			<div>
				<div>
					<Typography gutterBottom variant="h6" component="h6">
						Questions Overview:
					</Typography>
				</div>
				<hr style={{ height: "2px", backgroundColor: "gray solid" }} />
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
													: isMarked[index] === true
													? classes.markedLabel
													: selectedAnswers[index]
													? classes.attemptedLabel
													: isVisited[index] === true
													? classes.visitedLabel
													: classes.label
											}
											onClick={() => handleCurrentIndex(index)}>
											{isMarked[index] === true && selectedAnswers[index] ? (
												<span>
													{questionNumber}
													<div className={classes.tick}>
														<CheckCircleIcon fontSize="small" />
													</div>
												</span>
											) : (
												questionNumber
											)}
										</label>
									)
							)}
					</div>
				</div>
				<hr style={{ height: "2px", backgroundColor: "gray solid" }} />
				<div className={classes.information}>
					<span>
						<label className={classes.currentLabel}>‏‏‎</label>
						<b> Current </b>
					</span>
					<span>
						<label className={classes.visitedLabel}>‎</label> <b> Visited</b>
					</span>
				</div>
				<hr style={{ height: "2px", backgroundColor: "gray solid" }} />
			</div>
		</div>
	);
};

export default QuestionKeysComponent;

// isMarked[index]
// 													? classes.markedLabel
// 													: // : selectedAnswers[index]
// 													// ? isMarked[index] === true
// 													// 	? classes.markedSelectedLabel
// 													// 	: classes.attemptedLabel
// 													selectedAnswers[index]
// 													? classes.attemptedLabel
// 													: isMarked[index] === true
// 													? classes.markedLabel
// 													: isVisited[index] === true
// 													? classes.visitedLabel
// 													: classes.label
