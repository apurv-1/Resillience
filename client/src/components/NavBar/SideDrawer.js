import React, { useState } from "react";
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
});
const theme = createMuiTheme({
	palette: {
		primary: red,
		secondary: blue,
	},
});

export default function SideNav() {
	const classes = useStyles();
	const [open, setOpen] = useState(false);

	const handleDrawer = () => {
		setOpen(true);
	};
	// const toggleDrawer = (anchor, open) => (event) => {
	// 	if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
	// 		return;
	// 	}

	// 	setState({ ...state, [anchor]: open });
	// };

	// const list = (anchor) => (
	// 	<div className={classes.list}>
	// 		<Divider />
	// 		<List>
	// 			<ListItem button key="Profile">
	// 				<ListItemIcon>
	// 					<MailIcon />
	// 				</ListItemIcon>
	// 				<ListItemText>Profile</ListItemText>
	// 			</ListItem>
	// 		</List>
	// 	</div>
	// );

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
								RESILLIENCE
							</h1>
							<Avatar
								alt="Remy Sharp"
								src="https://res.cloudinary.com/rweb1/image/upload/v1599639734/resilience_default_lqmb3p.png"
								className={classes.avatar}
							/>
							<div className={classes.name}>Apurv Gupta</div>
							<ListItem button key="Profile" className={classes.listitem}>
								<ListItemIcon>
									<DashboardRoundedIcon />
								</ListItemIcon>
								<ListItemText>Dasboard</ListItemText>
							</ListItem>
							<Divider />
							<ListItem button key="Test" className={classes.listitem}>
								<ListItemIcon>
									<MenuBookRoundedIcon />
								</ListItemIcon>
								<ListItemText>Test</ListItemText>
							</ListItem>
							<Divider />
							<ListItem button key="Downloads" className={classes.listitem}>
								<ListItemIcon>
									<GetAppRoundedIcon />
								</ListItemIcon>
								<ListItemText>Download Section</ListItemText>
							</ListItem>
							<Divider />
							<ListItem button key="Blogs" className={classes.listitem}>
								<ListItemIcon>
									<WebRoundedIcon />
								</ListItemIcon>
								<ListItemText>Blogs</ListItemText>
							</ListItem>
							<Divider />
							<div className={classes.button}>
								<Button variant="contained" color="primary" className={classes.margin}>
									Sign Out
								</Button>
							</div>
						</List>
					</ThemeProvider>
				</div>
			</Drawer>
		</div>
	);
}
