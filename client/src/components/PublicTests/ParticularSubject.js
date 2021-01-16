import React, { useState, useReducer } from "react";
import { useParams } from "react-router-dom";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";

//MUI
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";

//Components
import KeysComponent from "./KeysComponent";
import QuestionComponent from "./QuestionComponent";
import QuestionKeysComponent from "./QuestionKeysComponent";
import TimerComponent from "./TimerComponent";
import TestResult from "./TestResult";
//reducers
import TestContext from "../Context/TestContext";
import { SET_TEST } from "../Reducers/types";
import { initialState, testReducer } from "../Reducers/TestReducer";
import StartPage from "./StartPage";

const styles = () => ({
	root: {
		flexGrow: 1,
		width: "90%",
		margin: "auto",
	},
	main: {
		margin: "1.5rem",
		marginTop: "4rem",
		display: "flex",
		flexDirection: "row",
		"@media only screen and (max-width: 1024px)": {
			margin: "0.6rem",
			marginTop: "4rem",
		},
		"@media only screen and (max-width: 440px)": {
			flexDirection: "column",
		},
	},
	questionComponent: {
		margin: "10px",
		flex: "0.7",
		textAlign: "center",
	},

	timerComponent: {
		margin: "10px",
		flex: "0.3",
		height: "33rem",
		"@media only screen and (max-width: 1024px)": {
			height: "28rem",
		},
		"@media only screen and (max-width: 770px)": {
			height: "25rem",
		},
		"@media only screen and (max-width: 440px)": {
			justifyContent: "flex-start",
		},
	},
	headingCard: {
		height: "68px",
		display: "flex",
		padding: "24px",
		alignItems: "center",
		flexDirection: "row",
		justifyContent: "space-between",
	},
	subjects: {
		display: "flex",
		flexDirection: "column",
		padding: "15px",
		width: "20rem",
		margin: "20px",
		"@media only screen and (max-width: 1024px)": {
			width: "16rem",
		},
		"@media only screen and (max-width: 770px)": {
			width: "17rem",
			padding: "20px",
		},
	},
	// subjectName: {
	// 	fontSize: "20px",
	// },
	button: {
		marginTop: "15px",
		marginBottom: "0%",
	},
});

function ParticularSubject(props) {
	const { classes } = props;
	const { subject } = useParams();
	const [questionLength, setQuestionLength] = useState(0);
	const [state, dispatch] = useReducer(testReducer, initialState);
	const { showResult, isStarted } = state;

	const fetchPublicTest = (testId) => {
		if (testId !== "") {
			fetch(`/api/fetch-public-test?testid=${testId}`, {
				method: "get",
				headers: {
					"Content-Type": "application/json",
				},
			})
				.then((res) => res.json())
				.then((test) => {
					if (test.error) {
						console.log(test.error);
					} else {
						dispatch({ type: SET_TEST, test: test.test });
						setQuestionLength(test.test.questions.length);
					}
				})
				.catch((err) => {
					console.log(err);
				});
		} else {
			console.log("Unvalid attempt");
		}
	};

	return (
		<div style={{ marginTop: "4%" }}>
			{questionLength > 0 ? (
				<TestContext.Provider value={{ state, dispatch }}>
					{showResult === false && isStarted === true ? (
						<div className={classes.main}>
							<Paper elevation={5} className={classes.questionComponent}>
								<QuestionComponent />
								<KeysComponent />
							</Paper>
							<Paper elevation={5} className={classes.timerComponent}>
								<TimerComponent />
								<QuestionKeysComponent />
							</Paper>
						</div>
					) : isStarted === false ? (
						<StartPage />
					) : (
						<TestResult />
					)}
				</TestContext.Provider>
			) : (
				<Paper elevation={0} className="MuiPaper-rounded">
					<Card className="outerCard" variant="outlined">
						<CardContent className={classes.headingCard}>
							<Typography variant="h4" color="primary">
								{subject}
							</Typography>
						</CardContent>

						<Divider light />

						<CardContent>
							{subject === "Mathematics" ? (
								<Grid container spacing={2}>
									<Paper className={classes.subjects} elevation={2}>
										<Typography variant="h6" className={classes.subjectName}>
											Mathematics Sample Paper 1
										</Typography>
										<Typography variant="body2">
											Questions: 30 <br />
											Duration: 90mins
										</Typography>
										<Button
											className={classes.button}
											variant="contained"
											color="secondary"
											onClick={() => fetchPublicTest(501)}
											disableElevation
											fullWidth>
											Start Test
										</Button>
									</Paper>

									<Paper className={classes.subjects} elevation={2}>
										<Typography variant="h6" className={classes.subjectName}>
											Mathematics Sample Paper 2
										</Typography>
										<Typography variant="body2">
											Questions: 30 <br />
											Duration: 90mins
										</Typography>
										<Button
											className={classes.button}
											variant="contained"
											color="secondary"
											disableElevation
											fullWidth>
											Start Test
										</Button>
									</Paper>

									<Paper className={classes.subjects} elevation={2}>
										<Typography variant="h6" className={classes.subjectName}>
											Mathematics Sample Paper 3
										</Typography>
										<Typography variant="body2">
											Questions: 30 <br />
											Duration: 90mins
										</Typography>
										<Button
											className={classes.button}
											variant="contained"
											color="secondary"
											disableElevation
											fullWidth>
											Start Test
										</Button>
									</Paper>
								</Grid>
							) : subject === "Physics" ? (
								<Grid container spacing={2}>
									<Paper className={classes.subjects} elevation={2}>
										<Typography variant="h6" className={classes.subjectName}>
											Physics Sample Paper 1
										</Typography>
										<Typography variant="body2">
											Questions: 30 <br />
											Duration: 90mins
										</Typography>
										<Button
											className={classes.button}
											variant="contained"
											color="secondary"
											disableElevation
											fullWidth>
											Start Test
										</Button>
									</Paper>

									<Paper className={classes.subjects} elevation={2}>
										<Typography variant="h6" className={classes.subjectName}>
											Physics Sample Paper 2
										</Typography>
										<Typography variant="body2">
											Questions: 30 <br />
											Duration: 90mins
										</Typography>
										<Button
											className={classes.button}
											variant="contained"
											color="secondary"
											disableElevation
											fullWidth>
											Start Test
										</Button>
									</Paper>

									<Paper className={classes.subjects} elevation={2}>
										<Typography variant="h6" className={classes.subjectName}>
											Physics Sample Paper 3
										</Typography>
										<Typography variant="body2">
											Questions: 30 <br />
											Duration: 90mins
										</Typography>
										<Button
											className={classes.button}
											variant="contained"
											color="secondary"
											disableElevation
											fullWidth>
											Start Test
										</Button>
									</Paper>
								</Grid>
							) : subject === "Chemistry" ? (
								<Grid container spacing={2}>
									<Paper className={classes.subjects} elevation={2}>
										<Typography variant="h6" className={classes.subjectName}>
											Chemistry Sample Paper 1
										</Typography>
										<Typography variant="body2">
											Questions: 30 <br />
											Duration: 90mins
										</Typography>
										<Button
											className={classes.button}
											variant="contained"
											color="secondary"
											disableElevation
											fullWidth>
											Start Test
										</Button>
									</Paper>

									<Paper className={classes.subjects} elevation={2}>
										<Typography variant="h6" className={classes.subjectName}>
											Chemistry Sample Paper 2
										</Typography>
										<Typography variant="body2">
											Questions: 30 <br />
											Duration: 90mins
										</Typography>
										<Button
											className={classes.button}
											variant="contained"
											color="secondary"
											disableElevation
											fullWidth>
											Start Test
										</Button>
									</Paper>

									<Paper className={classes.subjects} elevation={2}>
										<Typography variant="h6" className={classes.subjectName}>
											Chemistry Sample Paper 3
										</Typography>
										<Typography variant="body2">
											Questions: 30 <br />
											Duration: 90mins
										</Typography>
										<Button
											className={classes.button}
											variant="contained"
											color="secondary"
											disableElevation
											fullWidth>
											Start Test
										</Button>
									</Paper>
								</Grid>
							) : (
								<Grid container spacing={2}>
									<Paper className={classes.subjects} elevation={2}>
										<Typography variant="h6" className={classes.subjectName}>
											Mathematics
										</Typography>
										<Typography variant="body2">
											Questions: 30 <br />
											Duration: 90mins
										</Typography>
										<Button
											className={classes.button}
											variant="contained"
											color="secondary"
											disableElevation
											fullWidth>
											Start Test
										</Button>
									</Paper>

									<Paper className={classes.subjects} elevation={2}>
										<Typography variant="h6" className={classes.subjectName}>
											Physics
										</Typography>
										<Typography variant="body2">
											Questions: 30 <br />
											Duration: 90mins
										</Typography>
										<Button
											className={classes.button}
											variant="contained"
											color="secondary"
											disableElevation
											fullWidth>
											Start Test
										</Button>
									</Paper>

									<Paper className={classes.subjects} elevation={2}>
										<Typography variant="h6" className={classes.subjectName}>
											Chemistry
										</Typography>
										<Typography variant="body2">
											Questions: 30 <br />
											Duration: 90mins
										</Typography>
										<Button
											className={classes.button}
											variant="contained"
											color="secondary"
											disableElevation
											fullWidth>
											Start Test
										</Button>
									</Paper>

									<Paper className={classes.subjects} elevation={2}>
										<Typography variant="h6" className={classes.subjectName}>
											Foundation Classes
										</Typography>
										<Typography variant="body2">
											Questions: 30 <br />
											Duration: 90mins
										</Typography>
										<Button
											className={classes.button}
											variant="contained"
											color="secondary"
											disableElevation
											fullWidth>
											Start Test
										</Button>
									</Paper>
								</Grid>
							)}
						</CardContent>
					</Card>
				</Paper>
			)}
		</div>
	);
}

export default withStyles(styles)(ParticularSubject);
