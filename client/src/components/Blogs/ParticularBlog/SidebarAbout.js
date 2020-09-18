import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";

const styles = () => ({
  heading: {
    marginBottom: "3%"
  },
  sidebar: {
    padding: "2%",
    marginBottom: "5%",
    backgroundColor: "#D3D3D3"
  }
});

class SidebarAbout extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.sidebar}>
        <Typography variant="h5" className={classes.heading}>
          About
        </Typography>
        <Typography gutterBottom color="textSecondary" className={classes.body}>
          Resillience is a team of IIT graduate mentors, and dedicated professionals with a single goal to provide perfect and result oriented solution for IIT/NEET preparation.
        </Typography>
      </Paper>
    );
  }
}

export default withStyles(styles)(SidebarAbout);
