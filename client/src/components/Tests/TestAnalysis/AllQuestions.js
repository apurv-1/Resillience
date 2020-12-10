import React, { useContext } from "react";
import TestContext from "../../Context/TestContext";
import {
	makeStyles,
	Paper,
	Table,
	TableBody,
	TableContainer,
	TableHead,
	TableCell,
	TableRow,
} from "@material-ui/core";

const useStyles = makeStyles({
	root: {
		margin: "2%",
	},
	card: {
		padding: "5px",
	},
	table: {
		padding: "10px",
		borderCollapse: "collapse",
		borderSpacing: "0 12px",
	},
});

const CorrectQuestion = () => {
	const classes = useStyles();
	const { state } = useContext(TestContext);
	const { test, selectedAnswers, timeElapsed } = state;
	const questions = test.questions;
	var timePerQuestion = parseInt(test.testDuration / (questions.length * 1000));
	return (
		<div className={classes.root}>
			{questions.map(
				({ questionImage, correctOption, difficuilty, questionNumber, subject }, index) => (
					<div className={classes.card} key={index}>
						<TableContainer component={Paper} elevation={4}>
							<Table className={classes.table} aria-label="simple table">
								<TableHead>
									<TableRow component="th">
										<TableCell style={{ fontSize: "20px", fontWeight: "bolder" }}>
											Question Number: {questionNumber}
											<b style={{ marginLeft: "35%" }}>Subject : {subject}</b>
										</TableCell>
										<TableCell align="right" style={{ fontSize: "20px", fontWeight: "bolder" }}>
											Difficuilty level
										</TableCell>
										<TableCell align="right" style={{ fontSize: "20px", fontWeight: "bolder" }}>
											Correct Option
										</TableCell>
										<TableCell align="right" style={{ fontSize: "20px", fontWeight: "bolder" }}>
											Selected Option
										</TableCell>
										<TableCell align="right" style={{ fontSize: "20px", fontWeight: "bolder" }}>
											Time Taken
										</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									<TableRow>
										<TableCell>
											<img src={questionImage} alt="question" />
										</TableCell>
										<TableCell align="right" style={{ fontSize: "20px", fontWeight: "bold" }}>
											{difficuilty}
										</TableCell>
										<TableCell align="right" style={{ fontSize: "20px", fontWeight: "bold" }}>
											{correctOption}
										</TableCell>
										<TableCell align="right" style={{ fontSize: "20px", fontWeight: "bold" }}>
											{selectedAnswers[index]}
										</TableCell>
										<TableCell align="right" style={{ fontSize: "20px", fontWeight: "bold" }}>
											{timeElapsed[index] ? timeElapsed[index] : 0}s / {timePerQuestion}s&nbsp;
										</TableCell>
									</TableRow>
								</TableBody>
							</Table>
						</TableContainer>
					</div>
				)
			)}
		</div>
	);
};

export default CorrectQuestion;
