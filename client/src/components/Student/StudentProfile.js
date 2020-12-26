import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Avatar, Grid } from "@material-ui/core";

// import TextField from "@material-ui/core/TextField";
// import Autocomplete from "@material-ui/lab/Autocomplete";
import Loading from "../Tests/Loading";
import UserContext from "../Context/UserContext";

const useStyles = makeStyles((theme) => ({
	head: {
		marginTop: "-10%",
		position: "fixed",
		background:
			"https://res.cloudinary.com/rweb1/image/upload/v1603446021/Assets/Scattered-Forcefields_cuwkvq.svg",
	},
	card: {
		display: "flex",
		flexWrap: "wrap",
		margin: "5%",
		marginTop: "5%",
		marginBottom: "-10%",
		"& > *": {
			margin: theme.spacing(2),
			width: theme.spacing(104),
			height: theme.spacing(73),
		},
	},
	pic: {
		display: "flex",
		marginLeft: "18%",
		"& > *": {
			margin: theme.spacing(1),
			width: theme.spacing(14),
			height: theme.spacing(15),
		},
	},
	paper: {
		marginLeft: "2%",
		padding: theme.spacing(2),
		textAlign: "center",
		color: theme.palette.text.secondary,
	},
	textbox: {
		marginLeft: "26%",
		marginTop: "5%",
	},
	loading: {
		display: "flex",
		justifyContent: "center",
	},
}));

export default function StudentProfile() {
	const classes = useStyles();
	const { userState } = useContext(UserContext);

	// console.log(userState);
	return (
		<div>
			<Paper elevation={5} className={classes.card}>
				{userState ? (
					<div>
						<div className={classes.pic}>
							<Avatar alt="Student" src={userState.picture} />
						</div>
						<div>
							<Grid container spacing={3}>
								<Grid item xs={10} sm={6}>
									<Paper className={classes.paper}>Name : {userState.name}</Paper>
								</Grid>
							</Grid>
						</div>
						<div>
							<Grid container spacing={3}>
								<Grid item xs={10} sm={6}>
									<Paper className={classes.paper}>Email : {userState.email}</Paper>
								</Grid>
							</Grid>
						</div>
						<div>
							<Grid container spacing={3}>
								<Grid item xs={10} sm={6}>
									<Paper className={classes.paper}>Batch : {userState.batch}</Paper>
								</Grid>
							</Grid>
						</div>
						<div>
							<Grid container spacing={3}>
								<Grid item xs={10} sm={6}>
									<Paper className={classes.paper}>Contact : {userState.contact}</Paper>
								</Grid>
							</Grid>
						</div>
						<div>
							<Grid container spacing={3}>
								<Grid item xs={10} sm={6}>
									<Paper className={classes.paper}>Fathers Name : {userState.fname}</Paper>
								</Grid>
							</Grid>
						</div>
						<div>
							<Grid container spacing={3}>
								<Grid item xs={10} sm={6}>
									<Paper className={classes.paper}>Parents Contact : {userState.parentContact}</Paper>
								</Grid>
							</Grid>
						</div>
						<div>
							<Grid container spacing={3}>
								<Grid item xs={10} sm={6}>
									<Paper className={classes.paper}>Address : {userState.address}</Paper>
								</Grid>
							</Grid>
						</div>
					</div>
				) : (
					<div className={classes.loading}>
						<Loading />
					</div>
				)}
			</Paper>
		</div>
	);
}
