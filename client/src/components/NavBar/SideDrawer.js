import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles, createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardRoundedIcon from "@material-ui/icons/DashboardRounded";
import ClearAllRoundedIcon from "@material-ui/icons/ClearAllRounded";
import MenuBookRoundedIcon from "@material-ui/icons/MenuBookRounded";
import GetAppRoundedIcon from "@material-ui/icons/GetAppRounded";
import WebRoundedIcon from "@material-ui/icons/WebRounded";
import Avatar from "@material-ui/core/Avatar";
import { blue, red } from "@material-ui/core/colors";
import { Context } from "../../App";
//dialog box
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Paper from "@material-ui/core/Paper";
import Draggable from "react-draggable";

const useStyles = makeStyles({
	icon: {
		cursor: "pointer",
		"&:hover": {
			color: "#232127",
		},
	},
	resillience: {
		textTransform: "capitalize",
		cursor: "pointer",
		fontFamily: "rubik",
		fontSize: "26px",
		textAlign: "center",
		color: "secondary",
		"@media only screen and (max-width: 950px)": {
			paddingLeft: "5%",
			marginTop: "8.5px",
			marginBottom: "8.5px",
		},
	},
	list: {
		width: 300,
		// paddingTop: "20%",
	},
	fullList: {
		width: "auto",
	},
	avatar: {
		paddingTop: "10%",
		margin: "0 auto",
		padding: "5%",
		height: "35%",
		width: "35%",
	},
	listitem: {
		padding: "5%",
	},
	name: {
		marginBottom: "8%",
		fontWeight: "700",
		fontSize: "20px",
		color: "#000",
		textAlign: "center",
	},
	button: {
		paddingTop: "20%",
		paddingRight: "35%",
		// margin: "5%",
		// position: "absolute",
		textAlign: "center",
	},
	margin: {
		position: "absolute",
		// top: "50%",
	},
	link: {
		// display: "none",
		textDecoration: "none",
		fontWeight: "700",
		fontSize: "20px",
		color: "#000",
	},
});
const theme = createMuiTheme({
	palette: {
		primary: red,
		secondary: blue,
	},
});

function SignOutDialog(props) {
	return (
		<Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
			<Paper {...props} />
		</Draggable>
	);
}

export default function SideNav() {
	const classes = useStyles();
	const { state, dispatch } = useContext(Context);
	const [open, setOpen] = useState(false);
	const [signOut, setSignOut] = useState(false);
	console.log(state);

	const handleDrawer = () => {
		setOpen(true);
	};
	const handleSignOut = () => {
		localStorage.clear();
		dispatch({ type: "CLEAR" });
		setSignOut(false);
	};

	return (
		<div>
			<ClearAllRoundedIcon
				onClick={handleDrawer}
				className={classes.icon}
				fontSize="large"
				color="secondary"
			/>

			<Drawer anchor={"right"} open={open} onClose={() => setOpen(false)}>
				<div className={classes.list}>
					<ThemeProvider theme={theme}>
						<List onClick={() => setOpen(false)}>
							<h1 color="secondary" className={classes.resillience}>
								RESILLIENCE
							</h1>
							<Avatar
								alt="profile-pic"
								src="https://res.cloudinary.com/rweb1/image/upload/v1599639734/resilience_default_lqmb3p.png"
								className={classes.avatar}
							/>
							<div className={classes.name}>{state ? state.name : "loading..."}</div>

							<Link to="/student-dashboard" className={classes.link}>
								<ListItem button key="Profile" className={classes.listitem}>
									<ListItemIcon>
										<DashboardRoundedIcon />
									</ListItemIcon>

									<ListItemText>Dasboard</ListItemText>
								</ListItem>
							</Link>

							<Divider />
							<Link to="/maintest" className={classes.link}>
								<ListItem button key="Test" className={classes.listitem}>
									<ListItemIcon>
										<MenuBookRoundedIcon />
									</ListItemIcon>

									<ListItemText>Test</ListItemText>
								</ListItem>
							</Link>
							<Divider />

							<Link to="/blogs" className={classes.link}>
								<ListItem button key="Blogs" className={classes.listitem}>
									<ListItemIcon>
										<WebRoundedIcon />
									</ListItemIcon>

									<ListItemText>Blogs</ListItemText>
								</ListItem>
							</Link>
							<Divider />

							<ListItem button key="Downloads" className={classes.listitem}>
								<ListItemIcon>
									<GetAppRoundedIcon />
								</ListItemIcon>
								<ListItemText>Download Section</ListItemText>
							</ListItem>
							<Divider />
							<div className={classes.button}>
								<Button
									variant="contained"
									color="primary"
									className={classes.margin}
									onClick={() => setSignOut(true)}>
									Sign Out
								</Button>
								<Dialog
									open={signOut}
									onClose={() => setSignOut(false)}
									PaperComponent={SignOutDialog}
									aria-labelledby="draggable-dialog-title">
									<DialogTitle id="draggable-dialog-title">Sign Out</DialogTitle>
									<DialogContent>
										<DialogContentText>Confirm Sign Out?</DialogContentText>
									</DialogContent>
									<DialogActions>
										<Button autoFocus onClick={() => setSignOut(false)} color="primary">
											Cancel
										</Button>
										<Button onClick={handleSignOut} color="primary">
											Sign Out
										</Button>
									</DialogActions>
								</Dialog>
							</div>
						</List>
					</ThemeProvider>
				</div>
			</Drawer>
		</div>
	);
}
