import React, { useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Paper, Button } from "@material-ui/core";

// import TextField from "@material-ui/core/TextField";
// import Autocomplete from "@material-ui/lab/Autocomplete";
// import Loading from "../Tests/Loading";
// import UserContext from "../Context/UserContext";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Dialog, DialogActions, DialogTitle } from "@material-ui/core";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

const StyledTableCell = withStyles((theme) => ({
	head: {
		backgroundColor: "#0C659D",
		fontSize: 20,
		color: theme.palette.common.white,
		fontWeight: "bold",
	},
	body: {
		fontSize: 16,
		fontWeight: "bold",
		textDecoration: "none",
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
	table: {
		fontWeight: "bold",
	},
	loading: {
		display: "flex",
		justifyContent: "center",
	},
}));

export default function AdminProfile() {
	const classes = useStyles();
	toast.configure();

	const history = useHistory();
	const [activeTest, setActiveTest] = useState([]);

	const [openDeleteDialogue, setOpenDeleteDialogue] = useState(false);
	const [currentTestId, setCurrentTestId] = useState("");

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
					// console.log(err);
					toast.error(err, {
						position: "bottom-right",
						autoClose: 4000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: false,
					});
				});
		} else {
			toast.error("You're Not Signed in as Admin", {
				position: "bottom-right",
				autoClose: 4000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: false,
			});
			history.push("/");
		}
	}, [currentTestId]);
	// console.log(currentTestId);
	//
	// 	const { name, email, batch, contact, fname, parentContact, address } = userState.payload;

	const deleteTest = () => {
		if (localStorage.getItem("admin_jwt")) {
			fetch(`/delete-test/${currentTestId}`, {
				method: "delete",
				headers: {
					Authorization: "Bearer " + localStorage.getItem("admin_jwt"),
				},
			})
				.then((res) => res.json())
				.then((message) => {
					setCurrentTestId("");
					setOpenDeleteDialogue(false);
					toast.info(message.message, {
						position: "bottom-right",
						autoClose: 4000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: false,
					});
				})
				.catch((err) => {
					// console.log(err);
					toast.error(err, {
						position: "bottom-right",
						autoClose: 4000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: false,
					});
				});
		} else {
			history.push("/");
		}
	};

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
							<StyledTableCell align="right">&nbsp;</StyledTableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{activeTest.length > 0 &&
							activeTest.map(
								(
									{ _id, testId, testName, noOfQuestions, testDuration, forCorrect, forInCorrect },
									index
								) => (
									<StyledTableRow key={index}>
										<StyledTableCell component="th" scope="row">
											{testId}
										</StyledTableCell>
										<StyledTableCell component="th" scope="row">
											<Link style={{ color: "black", textDecoration: "none" }} to={"/admin-dashboard/" + _id}>
												{testName}
											</Link>
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
										<StyledTableCell
											component="th"
											scope="row"
											align="right"
											onClick={() => setCurrentTestId(_id)}>
											<EditIcon />
											<span onClick={() => setOpenDeleteDialogue(true)}>
												<DeleteForeverIcon />
											</span>
										</StyledTableCell>
									</StyledTableRow>
								)
							)}
					</TableBody>
				</Table>
			</TableContainer>
			<Dialog
				open={openDeleteDialogue}
				onClose={() => setOpenDeleteDialogue(false)}
				aria-labelledby="dialog-title">
				<DialogTitle id="dialog-title">Confirm Delete, are you sure?</DialogTitle>

				<DialogActions>
					<Button onClick={() => setOpenDeleteDialogue(false)} color="default">
						Cancel
					</Button>
					<Button onClick={deleteTest} color="default">
						Delete
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}
