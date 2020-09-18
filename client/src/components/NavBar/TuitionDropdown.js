import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { Typography } from "@material-ui/core";

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
    "@media only screen and (max-width: 950px)": {
      height: "20px",
      textTransform: "capitalize"
    }
  },
  idk: {
    paddingLeft: "0px",
    paddingRight: "0px",
    "@media only screen and (max-width: 950px)": {
      paddingTop: "0px",
      paddingBottom: "0px"
    }
  },
  nested: {
    paddingLeft: theme.spacing(3),
    backgroundColor: "#ececec"
  },
  navtext: {
    color: "#3672c0",
    textDecoration: "none",
    display: "flex",
    fontWeight: "bolder",
    alignItems: "center",
    cursor: "pointer",
    "@media only screen and (max-width: 1050px)": {
      fontSize: "90%"
    },
    "@media only screen and (max-width: 950px)": {
      color: "#232127",
      fontWeight: "normal"
    }
  },
  text: {
    fontSize: "84%",
    cursor: "pointer",
    fontWeight: "bolder",
    "@media only screen and (max-width: 950px)": {
      color: "#232127",
      fontFamily: "muli",
      fontWeight: "normal",
      padding: "11px 0px"
    }
  },
  root: {
    fontWeight: "800"
  }
}));

export default function Tuitions() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List className={classes.root1}>
      <ListItem button onClick={handleClick} className={classes.idk}>
        <Typography className={classes.navtext}>Tuitions {open ? <ExpandLess /> : <ExpandMore />}</Typography>
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div">
          <ListItem button className={classes.nested}>
            <ListItemText>
              <Typography
                className={classes.text}
                onClick={() => {
                  window.location.href = "/tuitions/one-on-one-home-tuitions";
                }}
              >
                One On One Home Tuition
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText>
              <Typography
                className={classes.text}
                onClick={() => {
                  window.location.href = "/tuitions/one-on-one-live-tuitions";
                }}
              >
                One On One Live Tuition
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText>
              <Typography
                className={classes.text}
                onClick={() => {
                  window.location.href = "/tuitions/mastering-a-week-topic";
                }}
              >
                Mastering a week chapter
              </Typography>
            </ListItemText>
          </ListItem>
        </List>
      </Collapse>
    </List>
  );
}
