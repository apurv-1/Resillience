import React from "react";
// import milestoneImageDesign from "../../compressed/milestoneImageDesign.svg";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";

const styles = () => ({
  milestoneSection: {
    textAlign: "center",
    "@media only screen and (max-width: 770px)": {
      marginBottom: "40px"
    }
  },
  milestoneImage: {
    width: "30%",
    zIndex: "1"
    // marginBottom: "-35px"
  },
  milestones: {
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    textAlign: "center",
    background: "#0f7dc2",
    position: "relative",
    height: "30vh",
    zIndex: "-1",
    "@media only screen and (max-width: 770px)": {
      fontSize: "11px",
      padding: "10%",
      flexDirection: "column",
      height: "0%"
    }
  },
  eachMilestone: {
    // width: "25%",
    "@media only screen and (max-width: 770px)": {
      paddingBottom: "2%"
    }
  }
});

function Milestones(props) {
  const { classes } = props;
  return (
    <div className={classes.milestoneSection}>
      <img src="https://res.cloudinary.com/rweb1/image/upload/v1600243284/Assets/images/milestoneImageDesign_m8mcru.svg" className={classes.milestoneImage} alt="Milestone Design" />
      <Typography variant="h3" color="primary" style={{ marginBottom: "5%", textAlign: "center", letterSpacing: "-1.5px" }}>
        Milestones
      </Typography>
      <div className={classes.milestones}>
        <div className={classes.eachMilestone}>
          <h1>150+</h1>
          <h1>Total registered students</h1>
        </div>
        <div className={classes.eachMilestone}>
          <h1>3700+</h1>
          <h1>Hours taught online</h1>
        </div>
        <div className={classes.eachMilestone}>
          <h1>3500+</h1>
          <h1>Hours at home</h1>
        </div>
        <div className={classes.eachMilestone}>
          <h1>300+</h1>
          <h1>Mentoring Sessions</h1>
        </div>
      </div>
    </div>
  );
}

export default withStyles(styles)(Milestones);
