import React, { useRef, useState, useEffect, useContext } from "react";
// import {useHistory} from 'react-router-dom';
import { makeStyles } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import { SET_SHOW_RESULTS } from "../Reducers/types";
import TestContext from "../Context/TestContext";

const useStyles = makeStyles(() => ({
	root: {
		display: "flex",
		justifyContent: "center",
		padding: "10px",
	},
	time: {
		margin: "13px",
		// position: "absolute",
	},
}));

const TimerComponent = () => {
	// const history = useHistory();

	const { state, dispatch } = useContext(TestContext);
	const { test, showResult } = state;
	let interval = useRef();
	let timeRemaining = test.testDuration;
	const [testDuration, setTestDuration] = useState(timeRemaining);
	const [timeHours, setTimeHours] = useState("00");
	const [timeMins, setTimeMins] = useState("00");
	const [timeSeconds, setTimeSeconds] = useState("00");

	const startTimer = () => {
		const countDownTime = Date.now() + testDuration;
		// console.log( "countdown",countDownTime)

		interval = setInterval(() => {
			const now = new Date();
			// console.log("now ",now)

			const distance = countDownTime - now;
			// console.log("distance ",distance)
			const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
			const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
			const seconds = Math.floor((distance % (1000 * 60)) / 1000);

			if (distance < 0 || showResult === true) {
				//stop timer
				clearInterval(interval);
				setTimeHours("00");
				setTimeMins("00");
				setTimeSeconds("00");
				alert("Times up!!");
				dispatch({
					type: SET_SHOW_RESULTS,
					showResult: true,
				});
				// history.push('/')
			} else {
				//update timer
				setTimeHours(hours);
				setTimeMins(minutes);
				setTimeSeconds(seconds);
			}
		}, 1000);
	};

	const useTimer = () => {
		setTestDuration(timeRemaining);
		startTimer();
		return () => {
			clearInterval(interval);
		};
	};
	/* eslint-disable */
	useEffect(useTimer, []);

	const classes = useStyles();
	return (
		<div className={classes.root}>
			<AccessTimeIcon fontSize="large" />
			<span className={classes.time}>
				<b>{timeHours} </b>hours :<b> {timeMins}</b> minutes : <b>{timeSeconds}</b> seconds
			</span>
		</div>
	);
};

export default TimerComponent;
