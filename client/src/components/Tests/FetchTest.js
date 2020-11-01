// import React, { useEffect, useState, useContext, useReducer } from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Button from "@material-ui/core/Button";
// import Paper from "@material-ui/core/Paper";
// import TextField from "@material-ui/core/TextField";
// import Maintest from "./MainTest";
// import { SET_TEST } from "../Reducers/types";
// import { initialState, testReducer } from "../Reducers/TestReducer";
//
// const useStyles = makeStyles((theme) => ({
// 	startbox: {
// 		padding: "1%",
// 		display: "flex",
// 		alignItems: "center",
// 		justifyContent: "space-around",
// 	},
// 	paper: {
// 		padding: "5%",
// 		textAlign: "center",
// 	},
// }));
//
// const FetchTest = () => {
// 	const [testId, setTestId] = useState("");
// 	const [test, setTest] = useState({});
// 	const { dispatch } = useReducer(testReducer);
//
// 	const fetchTest = () => {
// 		fetch(`/showtest?testid=${testId}`, {
// 			method: "get",
// 			headers: {
// 				"Content-Type": "application/json",
// 			},
// 		})
// 			.then((res) => res.json())
// 			.then((test) => {
// 				if (test.error) {
// 					// setOpenAlert(true);
// 					console.log(test);
// 				} else {
// 					console.log(test);
// 					dispatch({ type: SET_TEST, test: test });
// 					console.log(SET_TEST);
// 				}
// 			})
// 			.catch((err) => {
// 				console.log(err);
// 			});
// 	};
// 	console.log(test);
//
// 	const classes = useStyles();
// 	return (
// 		<div className={classes.startbox}>
// 			<Paper elevation={5} className={classes.paper4}>
// 				<div>
// 					<TextField
// 						id="outlined-basic"
// 						label="Enter Test ID"
// 						variant="outlined"
// 						value={testId}
// 						onChange={(e) => setTestId(e.target.value)}
// 						fullWidth
// 					/>
// 				</div>
// 				<Button
// 					variant="contained"
// 					color="primary"
// 					// className={classes.button}
// 					style={{ width: "100%", marginTop: "3%" }}
// 					onClick={() => fetchTest()}>
// 					Begin Test
// 				</Button>
// 			</Paper>
// 		</div>
// 	);
// };
//
// export default FetchTest;
