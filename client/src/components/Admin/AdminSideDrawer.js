import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { makeStyles, createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import {
	Drawer,
	Button,
	List,
	Divider,
	ListItem,
	ListItemIcon,
	ListItemText,
	Avatar,
} from "@material-ui/core";
import DashboardRoundedIcon from "@material-ui/icons/DashboardRounded";
import ClearAllRoundedIcon from "@material-ui/icons/ClearAllRounded";
import MenuBookRoundedIcon from "@material-ui/icons/MenuBookRounded";
import GetAppRoundedIcon from "@material-ui/icons/GetAppRounded";
import WebRoundedIcon from "@material-ui/icons/WebRounded";
import AddBoxRoundedIcon from "@material-ui/icons/AddBoxRounded";
import { blue, red } from "@material-ui/core/colors";
import UserContext from "../Context/UserContext";
//dialog box
import { Dialog, DialogActions, DialogTitle } from "@material-ui/core";

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
	admin: {
		fontFamily: "rubik",
		fontSize: "15px",
		textAlign: "center",
		marginTop: "45px",
	},
});
const theme = createMuiTheme({
	palette: {
		primary: red,
		secondary: blue,
	},
});

export default function SideNav() {
	const classes = useStyles();
	const history = useHistory();
	const { userState, userDispatch } = useContext(UserContext);
	const [open, setOpen] = useState(false);
	const [signOut, setSignOut] = useState(false);
	console.log(userState);

	const handleDrawer = () => {
		setOpen(true);
	};
	const handleSignOut = () => {
		localStorage.clear();
		userDispatch({ type: "CLEAR" });
		setSignOut(false);
		history.push("/");
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
						<List>
							<h1 color="secondary" className={classes.resillience}>
								RESILLIENCE ADMIN
							</h1>
							<Avatar
								alt="profile-pic"
								src="https://res.cloudinary.com/rweb1/image/upload/v1599639734/resilience_default_lqmb3p.png"
								className={classes.avatar}
							/>
							<div className={classes.name}>{userState ? userState.name : "loading..."}</div>

							<Link to="/admin-dashboard" className={classes.link} onClick={() => setOpen(false)}>
								<ListItem button key="Profile" className={classes.listitem}>
									<ListItemIcon>
										<DashboardRoundedIcon />
									</ListItemIcon>

									<ListItemText>Admin Dashboard</ListItemText>
								</ListItem>
							</Link>

							<Divider />
							<Link to="/createtest" className={classes.link} onClick={() => setOpen(false)}>
								<ListItem button key="Test" className={classes.listitem}>
									<ListItemIcon>
										<MenuBookRoundedIcon />
									</ListItemIcon>

									<ListItemText>Create Test</ListItemText>
								</ListItem>
							</Link>
							<Divider />

							<Link to="/admin/createblogs" className={classes.link} onClick={() => setOpen(false)}>
								<ListItem button key="Blogs" className={classes.listitem}>
									<ListItemIcon>
										<WebRoundedIcon />
									</ListItemIcon>

									<ListItemText>Create Blogs</ListItemText>
								</ListItem>
							</Link>
							<Divider />
							<Link to="/enroll-student" className={classes.link} onClick={() => setOpen(false)}>
								<ListItem
									button
									key="Downloads"
									className={classes.listitem}
									onClick={() => setOpen(false)}>
									<ListItemIcon>
										<AddBoxRoundedIcon />
									</ListItemIcon>
									<ListItemText>Enroll Student</ListItemText>
								</ListItem>
							</Link>
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
									aria-labelledby="draggable-dialog-title">
									<DialogTitle id="draggable-dialog-title">Confirm sign out, are you sure?</DialogTitle>

									<DialogActions>
										<Button autoFocus onClick={() => setSignOut(false)} color="secondary">
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
