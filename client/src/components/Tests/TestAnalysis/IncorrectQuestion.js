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

const IncorrectQuestion = (cSubject) => {
	const classes = useStyles();
	const { state } = useContext(TestContext);
	const { test, selectedAnswers, timeElapsed } = state;
	const questions = test.questions;
	var timePerQuestion = parseInt(test.testDuration / (questions.length * 1000));
	return (
		<div className={classes.root}>
			{questions.map(({ questionImage, correctOption, _id, difficuilty, subject }, index) =>
				cSubject.cSubject !== ""
					? subject === cSubject.cSubject &&
					  selectedAnswers[index] &&
					  selectedAnswers[index] !== correctOption && (
							<div className={classes.card} key={_id}>
								<TableContainer component={Paper} elevation={4}>
									<Table className={classes.table} aria-label="simple table">
										<TableHead>
											<TableRow component="th">
												<TableCell style={{ fontSize: "20px", fontWeight: "bolder" }}>
													Question Number: {test.questions[index].questionNumber}
													<b style={{ marginLeft: "20rem" }}>Subject : {subject}</b>
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
													<img src={questionImage} alt={_id} width="100%" />
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
					: selectedAnswers[index] &&
					  selectedAnswers[index] !== correctOption && (
							<div className={classes.card} key={_id}>
								<TableContainer component={Paper} elevation={4}>
									<Table className={classes.table} aria-label="simple table">
										<TableHead>
											<TableRow component="th">
												<TableCell style={{ fontSize: "20px", fontWeight: "bolder" }}>
													Question Number: {test.questions[index].questionNumber}
													<b style={{ marginLeft: "20rem" }}>Subject : {subject}</b>
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
													<img src={questionImage} alt={_id} width="100%" />
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

export default IncorrectQuestion;
