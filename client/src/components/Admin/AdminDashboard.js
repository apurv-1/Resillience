import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";

// import TextField from "@material-ui/core/TextField";
// import Autocomplete from "@material-ui/lab/Autocomplete";
// import Loading from "../Tests/Loading";
// import UserContext from "../Context/UserContext";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const StyledTableCell = withStyles((theme) => ({
	head: {
		backgroundColor: "#0C659D",
		color: theme.palette.common.white,
	},
	body: {
		fontSize: 14,
	},
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
	root: {
		"&:nth-of-type(odd)": {
			backgroundColor: theme.palette.action.hover,
		},
	},
}))(TableRow);

const useStyles = makeStyles((theme) => ({
	root: {
		marginTop: "5rem",
		margin: "1rem",
		display: "flex",
	},
	loading: {
		display: "flex",
		justifyContent: "center",
	},
}));

export default function AdminProfile() {
	const classes = useStyles();

	const history = useHistory();
	const [activeTest, setActiveTest] = useState([]);

	useEffect(() => {
		if (localStorage.getItem("admin_jwt")) {
			fetch("/alltests", {
				method: "get",
				headers: {
					Authorization: "Bearer " + localStorage.getItem("admin_jwt"),
				},
			})
				.then((res) => res.json())
				.then((activeTests) => {
					// console.log(activeTests);
					setActiveTest(activeTests.test);
				})
				.catch((err) => {
					console.log(err);
				});
		} else {
			history.push("/");
		}
	}, []);
	console.log(activeTest);
	//
	// 	const { name, email, batch, contact, fname, parentContact, address } = userState.payload;

	return (
		<div className={classes.root}>
			<TableContainer component={Paper} elevation={4}>
				<Table className={classes.table} aria-label="customized table">
					<TableHead>
						<TableRow>
							<StyledTableCell>Test ID</StyledTableCell>
							<StyledTableCell>Test Name</StyledTableCell>
							<StyledTableCell align="right">Number of Questions</StyledTableCell>
							<StyledTableCell align="right">Test Duration</StyledTableCell>
							<StyledTableCell align="right">Correct</StyledTableCell>
							<StyledTableCell align="right">Incorrect</StyledTableCell>
							<StyledTableCell align="right">Total Marks</StyledTableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{activeTest.length > 0 &&
							activeTest.map(
								({ testId, testName, noOfQuestions, testDuration, forCorrect, forInCorrect }, index) => (
									<StyledTableRow key={index}>
										<StyledTableCell component="th" scope="row">
											{testId}
										</StyledTableCell>
										<StyledTableCell component="th" scope="row">
											{testName}
										</StyledTableCell>
										<StyledTableCell component="th" scope="row" align="right">
											{noOfQuestions}
										</StyledTableCell>
										<StyledTableCell component="th" scope="row" align="right">
											{testDuration / 60000}&nbsp;mins
										</StyledTableCell>
										<StyledTableCell component="th" scope="row" align="right">
											{forCorrect}
										</StyledTableCell>
										<StyledTableCell component="th" scope="row" align="right">
											{forInCorrect}
										</StyledTableCell>
										<StyledTableCell component="th" scope="row" align="right">
											{noOfQuestions * forCorrect}&nbsp;marks
										</StyledTableCell>
									</StyledTableRow>
								)
							)}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
}
