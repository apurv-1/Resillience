import React, { useContext } from "react";
import TestContext from "../../Context/TestContext";
import { makeStyles, Paper } from "@material-ui/core";

const useStyles = makeStyles({
	root: {
		margin: "2%",
	},
	card: {
		padding: "5px",
	},
	table: {
		padding: "10px",
		// border: "2px solid black",
		borderCollapse: "collapse",
		borderSpacing: "0 12px",
	},
});

const CorrectQuestion = () => {
	const classes = useStyles();
	const { state } = useContext(TestContext);
	const { test, selectedAnswers, timeElapsed } = state;
	const questions = test.questions;
	const timePerQuestion = test.testDuration / (questions.length * 1000);
	return (
		<div className={classes.root}>
			{questions.map(
				({ questionImage, correctOption, _id, difficuilty }, index) =>
					selectedAnswers[index] === correctOption && (
						<Paper className={classes.card} key={_id}>
							<hr style={{ height: "1px", backgroundColor: "gray solid" }} />
							<img src={questionImage} alt={_id} />

							<table className={classes.table} border="1px">
								<tr>
									<th>Question Number</th>
									<th>Difficuilty level</th>
									<th>Correct Option</th>
									<th>Selected Option</th>
									<th>Time Taken</th>
								</tr>
								<tr>
									<td>{test.questions[index].questionNumber}</td>
									<td>{difficuilty}</td>
									<td>{correctOption}</td>
									<td>{selectedAnswers[index] ? selectedAnswers[index] : "Not Selected"}</td>
									<td>
										{timeElapsed[index] ? timeElapsed[index] : 0}s / {timePerQuestion}s
									</td>
								</tr>
							</table>
							<hr style={{ height: "1px", backgroundColor: "gray solid" }} />
						</Paper>
					)
			)}
		</div>
	);
};

export default CorrectQuestion;
