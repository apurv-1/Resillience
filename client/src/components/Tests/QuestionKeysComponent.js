import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
// import AccessTimeIcon from "@material-ui/icons/AccessTime";
// import Button from '@material-ui/core/Button';
import TestContext from "../Context/TestContext";
import { SET_CURRENT_INDEX } from "../Reducers/types";
import Fab from "@material-ui/core/Fab";

const useStyles = makeStyles(() => ({
	root: {
		marginTop: "5%",
		paddingLeft: "60px",
		paddingRight: "60px",
	},
	top: {
		marginTop: "-5%",
	},
	box: {
		padding: "10px",
	},
	question: {
		height: "100%",
		width: "200px",
		marginTop: "2%",
		alignItems: "center",
	},
	optionContainer: {
		width: "100%",
	},
	option: {
		marginLeft: "22%",
		marginTop: "10px",
		marginBottom: "10px",
	},
	buttonContainer: {
		padding: "20px",
	},
	button: {
		marginLeft: "80px",
	},
	fab: {
		margin: "10px",
	},
	fabBox: {
		padding: "20px",
		maxWidth: "300px",
	},
	timer: {
		textAlign: "center",
		textSizeAdjust: "90%",
	},
}));

const QuestionKeysComponent = () => {
	const classes = useStyles();
	const { state, dispatch } = useContext(TestContext);
	const questions = state.test.questions;

	const handleCurrentIndex = (cIndex) => {
		dispatch({ type: SET_CURRENT_INDEX, currentIndex: cIndex });
	};

	return (
		<div>
			<div className={classes.fabBox}>
				<hr style={{ height: "2px", backgroundColor: "gray solid" }} />
				<b>Questions Overview: </b>

				<div>
					{questions.length &&
						questions.map(({ questionNumber, _id }, index) => (
							<Fab
								size="medium"
								color="secondary"
								key={_id}
								className={classes.fab}
								onClick={() => handleCurrentIndex(index)}>
								{questionNumber}
							</Fab>
						))}
				</div>
				<hr style={{ height: "2px", backgroundColor: "gray solid" }} />
			</div>
		</div>
	);
};

export default QuestionKeysComponent;
