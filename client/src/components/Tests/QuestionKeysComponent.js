import React, { useContext } from "react";
import { makeStyles, Typography } from "@material-ui/core";
import TestContext from "../Context/TestContext";
import { SET_CURRENT_INDEX } from "../Reducers/types";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

const useStyles = makeStyles(() => ({
	fabBox: {
		padding: "20px",
		// marginTop: "-18px",
	},
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
		margin: "15px",
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
		color: "#ffff",
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
	text: {
		fontSize: "14px",
		fontWeight: "bold",
	},
	showCurrent: {
		margin: "5px",
		padding: "2px 10px",
		borderRadius: "5px",
		border: "3px solid",
		borderColor: "green",
	},
	showMarked: {
		margin: "5px",
		padding: "4px 12px",
		borderRadius: "5px",
		boxShadow: "0 0px 4px 0px rgba(54, 114, 192);",
		backgroundColor: "#565fb8",
	},
	showVisited: {
		margin: "8px",
		padding: "4px 12px",
		borderRadius: "5px",
		boxShadow: "0 0px 4px 0px rgba(54, 114, 192);",
		backgroundColor: "#FF6961",
	},
	showAttempted: {
		margin: "5px",
		padding: "4px 12px",
		borderRadius: "5px",
		boxShadow: "0 0px 4px 0px rgba(54, 114, 192);",
		backgroundColor: "#2E8B57",
	},
	showLabel: {
		margin: "5px",
		padding: "4px 12px",
		borderRadius: "5px",
		boxShadow: "0 0px 4px 0px rgba(54, 114, 192);",
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

				<hr style={{ height: "2px", backgroundColor: "gray solid" }} />
				<div>
					<div className={classes.bubbleContainer}>
						<span>
							<label className={classes.showAttempted} />
							<span className={classes.text}>‏‏‎Attempted</span>
						</span>
						<span>
							<label className={classes.showVisited} />
							<span className={classes.text}>‏‏‎Not Attempted</span>
						</span>
					</div>
					<div className={classes.bubbleContainer} style={{ marginTop: "30px" }}>
						<span>
							<label className={classes.showMarked} />
							‏‏‎<span className={classes.text}>‏‏‎To be reviewed</span>
						</span>
						<span>
							<label className={classes.showLabel} />
							<span className={classes.text}>‏‏‎Not viewed yet</span>
						</span>
					</div>
					<div className={classes.bubbleContainer} style={{ marginTop: "30px" }}>
						<span>
							<label className={classes.showMarked}>
								<span style={{ position: "absolute", paddingTop: "5px" }}>
									<CheckCircleIcon fontSize="small" />
								</span>
							</label>
							<span className={classes.text}>‏‏‎Attempted and Marked</span>
						</span>
						<span>
							<label className={classes.showCurrent} />
							<span className={classes.text}>‏‏‎Current </span>
						</span>
					</div>
				</div>
				<hr style={{ height: "2px", backgroundColor: "gray solid" }} />
			</div>
		</div>
	);
};

export default QuestionKeysComponent;
