import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
//components

const useStyles = makeStyles(() => ({
	root: {
		// background:"#88888",
		marginTop: "2%",
		// margin: "20%"
	},
	showquestion: {
		marginTop: "11%",
		marginLeft: "5%",
		marginRight: "5%",
		marginBottom: "-3%",
	},
	paper: {
		padding: "2%",
	},
}));

const ShowTest = ({ testId }) => {
	const classes = useStyles();
	const [test, setTest] = useState("");
	const [testName, setTestName] = useState("");
	// const [questionNo, setQuestionNo] = useState(0);
	// const [questionImage, setQuestionImage] = useState("");
	const [correctOption, setCorrectOption] = useState("");

	useEffect(() => {
		fetch(`/showtest?testid=${testId}`, {
			method: "get",
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((res) => res.json())
			.then((test) => {
				setTest(test.test);
				// console.log(test.test)
				setTestName(test.testName);
				// setQuestionNo(test.testName);
				// setQuestionNo(test.testName);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<div className={classes.root}>
			<Paper elevation={5} className={classes.paper}>
				<div>
					<h1>{testName}</h1>
				</div>
				<hr style={{ height: "2px", backgroundColor: "#000000" }} />
				<div className={classes.question}>
					{test.length && test.map(({ questions }) => <img src={questions} />)}
				</div>
			</Paper>
		</div>
	);
};

export default ShowTest;
