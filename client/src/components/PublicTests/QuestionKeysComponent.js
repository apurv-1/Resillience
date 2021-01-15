import React, { useContext } from "react";
import { makeStyles, Typography } from "@material-ui/core";
import TestContext from "../Context/TestContext";
import { SET_CURRENT_INDEX } from "../Reducers/types";
import CheckCircleIcon from "@material-ui/icons/CheckCircleSharp";

const useStyles = makeStyles(() => ({
	fabBox: {
		padding: "20px",
		marginTop: "-8px",
		"@media only screen and (max-width: 1024px)": {
			marginTop: "-1.5rem",
		},
	},
	questionOverview: {
		"@media only screen and (max-width: 1024px)": {
			fontSize: "20px",
		},
		"@media only screen and (max-width: 770px)": {
			fontSize: "14px",
		},
	},
	tick: {
		height: "0px",
		width: "0px",
		margin: "-4px",
		marginLeft: "6px",
		padding: "0px",
		color: "black",
	},
	bubbleContainer: {
		margin: "20px",
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "space-between",
		"@media only screen and (max-width: 1024px)": {
			margin: "10px",
		},
		"@media only screen and (max-width: 770px)": {
			margin: "5px",
		},
	},
	label: {
		cursor: "pointer",
		margin: "5px",
		padding: "10px 10px",
		borderRadius: "5px",
		fontWeight: "bold",
		fontSize: "12px",
		color: "#7a7a7a",
		boxShadow: "0 0px 4px 0px rgba(54, 114, 192)",
		"@media only screen and (max-width: 1024px)": {
			fontSize: "10px",
			margin: "4px",
			padding: "8px 8px",
			borderRadius: "4px",
		},
		"@media only screen and (max-width: 770px)": {
			fontSize: "8px",
			margin: "2px",
			padding: "6px 6px",
			borderRadius: "3px",
		},
	},
	visitedLabel: {
		cursor: "pointer",
		margin: "5px",
		padding: "10px 10px",
		borderRadius: "5px",
		fontWeight: "bold",
		fontSize: "12px",
		color: "white",
		boxShadow: "0 0px 4px 0px rgba(54, 114, 192)",
		backgroundColor: "#FF6961",
		"@media only screen and (max-width: 1024px)": {
			fontSize: "10px",
			margin: "4px",
			padding: "8px 8px",
			borderRadius: "4px",
		},
		"@media only screen and (max-width: 770px)": {
			fontSize: "8px",
			margin: "2px",
			padding: "6px 6px",
			borderRadius: "3px",
		},
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
		boxShadow: "0 0px 4px 0px rgba(54, 114, 192)",
		"@media only screen and (max-width: 1024px)": {
			fontSize: "10px",
			margin: "4px",
			padding: "8px 8px",
			borderRadius: "4px",
		},
		"@media only screen and (max-width: 770px)": {
			fontSize: "8px",
			margin: "2px",
			padding: "6px 6px",
			borderRadius: "3px",
		},
	},
	markedLabel: {
		cursor: "pointer",
		margin: "5px",
		padding: "10px 10px",
		borderRadius: "5px",
		fontWeight: "bold",
		fontSize: "12px",
		color: "#ffff",
		boxShadow: "0 0px 4px 0px rgba(54, 114, 192)",
		backgroundColor: "#565fb8",
		"@media only screen and (max-width: 1024px)": {
			fontSize: "10px",
			margin: "4px",
			padding: "8px 8px",
			borderRadius: "4px",
		},
		"@media only screen and (max-width: 770px)": {
			fontSize: "8px",
			margin: "2px",
			padding: "6px 6px",
			borderRadius: "3px",
		},
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
		"@media only screen and (max-width: 1024px)": {
			fontSize: "10px",
			margin: "4px",
			padding: "6px 6px",
			borderRadius: "4px",
		},
		"@media only screen and (max-width: 770px)": {
			fontSize: "8px",
			margin: "2px",
			padding: "4px 4px",
			borderRadius: "3px",
		},
	},
	text: {
		fontSize: "14px",
		fontWeight: "bold",
		"@media only screen and (max-width: 1024px)": {
			fontSize: "11px",
		},
		"@media only screen and (max-width: 770px)": {
			fontSize: "8px",
		},
	},
	showCurrent: {
		margin: "5px",
		padding: "2px 10px",
		borderRadius: "5px",
		border: "3px solid green",
		"@media only screen and (max-width: 1024px)": {
			margin: "4px",
			padding: "0px 8px",
			border: "3px solid green",
			borderRadius: "4px",
		},
		"@media only screen and (max-width: 770px)": {
			margin: "2px",
			padding: "0px 6px",
			border: "2px solid green",
			borderRadius: "2px",
		},
	},
	showMarked: {
		margin: "5px",
		padding: "4px 12px",
		borderRadius: "5px",
		boxShadow: "0 0px 4px 0px rgba(54, 114, 192)",
		backgroundColor: "#565fb8",
		"@media only screen and (max-width: 1024px)": {
			margin: "4px",
			padding: "2px 10px",
			borderRadius: "4px",
		},
		"@media only screen and (max-width: 770px)": {
			margin: "3px",
			padding: "0px 8px",
			borderRadius: "3px",
		},
	},
	showVisited: {
		margin: "8px",
		padding: "4px 12px",
		borderRadius: "5px",
		boxShadow: "0 0px 4px 0px rgba(54, 114, 192)",
		backgroundColor: "#FF6961",
		"@media only screen and (max-width: 1024px)": {
			margin: "4px",
			padding: "2px 10px",
			borderRadius: "4px",
		},
		"@media only screen and (max-width: 770px)": {
			margin: "3px",
			padding: "0px 8px",
			borderRadius: "3px",
		},
	},
	showAttempted: {
		margin: "5px",
		padding: "4px 12px",
		borderRadius: "5px",
		boxShadow: "0 0px 4px 0px rgba(54, 114, 192)",
		backgroundColor: "#2E8B57",
		"@media only screen and (max-width: 1024px)": {
			margin: "4px",
			padding: "2px 10px",
			borderRadius: "4px",
		},
		"@media only screen and (max-width: 770px)": {
			margin: "3px",
			padding: "0px 8px",
			borderRadius: "3px",
		},
	},
	showLabel: {
		margin: "5px",
		padding: "4px 12px",
		borderRadius: "5px",
		boxShadow: "0 0px 4px 0px rgba(54, 114, 192)",
		"@media only screen and (max-width: 1024px)": {
			margin: "4px",
			padding: "2px 10px",
			borderRadius: "4px",
		},
		"@media only screen and (max-width: 770px)": {
			margin: "3px",
			padding: "0px 8px",
			borderRadius: "3px",
		},
	},
	infoContainer: {
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "space-between",
		margin: "20px",
		"@media only screen and (max-width: 1024px)": {
			margin: "11px",
		},
		"@media only screen and (max-width: 770px)": {
			margin: "5px",
		},
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
			<Typography className={classes.questionOverview} variant="h6">
				Questions Overview:
			</Typography>
			<div>
				<hr style={{ height: "2px", backgroundColor: "gray solid" }} />
			</div>
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
				<div className={classes.infoContainer}>
					<span>
						<label className={classes.showAttempted} />
						<span className={classes.text}>‏‏‎Attempted</span>
					</span>
					<span>
						<label className={classes.showVisited} />
						<span className={classes.text}>‏‏‎Not Attempted</span>
					</span>
				</div>
				<div className={classes.infoContainer}>
					<span>
						<label className={classes.showMarked} />
						‏‏‎<span className={classes.text}>‏‏‎To be reviewed</span>
					</span>
					<span>
						<label className={classes.showLabel} />
						<span className={classes.text}>‏‏‎Not viewed yet</span>
					</span>
				</div>
				<div className={classes.infoContainer}>
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
	);
};

export default QuestionKeysComponent;
