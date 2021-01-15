import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Divider from "@material-ui/core/Divider";
import { Typography } from "@material-ui/core";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
	root1: {
		width: "auto",
		display: "flex",
		flexDirection: "column",
		height: "40px",
		letterSpacing: "1.2px",
		textTransform: "uppercase",
		alignItems: "center",
		color: "#3672c0",
		maxWidth: "110px",
		"@media only screen and (max-width: 950px)": {
			height: "25px",
			textTransform: "capitalize",
			paddingTop: "11px",
			paddingBottom: "11px",
		},
	},
	idk: {
		paddingLeft: "0px",
		paddingRight: "0px",
		"@media only screen and (max-width: 950px)": {
			paddingTop: "0px",
			paddingBottom: "0px",
		},
	},
	collapseMenu: {
		marginLeft: "160px",
		width: "275px",
		zIndex: "1",
		boxShadow:
			"0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
		"@media only screen and (max-width: 950px)": {
			marginLeft: "160px",
		},
	},
	nested: {
		paddingLeft: "24px",
		backgroundColor: "#ececec",
		"@media only screen and (max-width: 950px)": {
			paddingLeft: "16px",
			paddingBottom: "0px",
		},
	},
	navtext: {
		color: "#3672c0",
		textDecoration: "none",
		display: "flex",
		fontWeight: "bolder",
		alignItems: "center",
		cursor: "pointer",
		"&:hover": {
			color: "#232127",
		},
		"@media only screen and (max-width: 1050px)": {
			fontSize: "90%",
		},
		"@media only screen and (max-width: 950px)": {
			color: "#232127",
		},
	},
	text: {
		fontSize: "85%",
		cursor: "pointer",
		fontWeight: "bolder",
		color: "inherit",
		textDecoration: "none",
		"&:hover": {
			color: "#232127",
		},
		"@media only screen and (max-width: 950px)": {
			color: "#232127",
			fontFamily: "muli",
			padding: "11px 0px",
		},
	},
	root: {
		fontWeight: "800",
	},
}));

export default function Tuitions(props) {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);

	const handleClick = () => {
		setOpen(!open);
	};

	const handleClickAway = () => {
		setOpen(false);
	};

	return (
		<ClickAwayListener onClickAway={handleClickAway}>
			<div className={classes.root1}>
				<List onClick={handleClick} className={classes.idk}>
					<Typography className={classes.navtext}>
						Tuitions {open ? <ExpandLess /> : <ExpandMore />}
					</Typography>
				</List>
				<Collapse in={open} timeout="auto" unmountOnExit className={classes.collapseMenu}>
					<List component="div" onClick={props.handleChange}>
						<ListItem className={classes.nested}>
							<ListItemText>
								<NavLink
									to="/tuitions/one-on-one-home-tuitions"
									className={classes.text}
									onClick={handleClick}
									activeClassName="activeDropdown">
									1-On-1 Home Tuition
								</NavLink>
							</ListItemText>
							<Divider variant="middle" />
						</ListItem>
						<ListItem className={classes.nested}>
							<ListItemText>
								<NavLink
									to="/tuitions/one-on-one-online-tuitions"
									className={classes.text}
									onClick={handleClick}
									activeClassName="activeDropdown">
									1-on-1 Online Tuition
								</NavLink>
							</ListItemText>
							<Divider variant="middle" />
						</ListItem>
						<ListItem className={classes.nested}>
							<ListItemText>
								<NavLink
									to="/tuitions/mastering-a-week-topic"
									className={classes.text}
									onClick={handleClick}
									activeClassName="activeDropdown">
									Mastering a week topic
								</NavLink>
							</ListItemText>
						</ListItem>
					</List>
				</Collapse>
			</div>
		</ClickAwayListener>
	);
}
