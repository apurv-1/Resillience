import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";

const styles = () => ({
  vision: {
    marginTop: "5%",
    position: "relative",
    fontStyle: "italic",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    fontSize: "22px",
    "@media only screen and (max-width: 1024px)": {
      fontSize: "20px"
    },
    "@media only screen and (max-width: 770px)": {
      fontSize: "16px"
    }
  },
  eachVision: {
    marginTop: "1.5%",
    display: "flex"
  },
  visionContent: {
    fontStyle: "italic",
    flexDirection: "column",
    margin: "auto",
    width: "70%",
    "@media only screen and (max-width: 770px)": {
      width: "90%"
    }
  },
  visionText: {
    letterSpacing: "0.02px",
    lineHeight: "1.2",
    opacity: "0.8",
    paddingLeft: "2%"
  }
});

function Story(props) {
  const { classes } = props;

  return (
    <div className={classes.vision}>
      <Typography variant="h4" color="secondary" className={classes.text} style={{ textAlign: "center", marginBottom: "8px", fontStyle: "normal" }}>
        Our Story:
      </Typography>
      <div className={classes.visionContent}>
        <div className={classes.eachVision}>
          <Typography variant="inherit" className={classes.visionText} color="primary" style={{ textAlign: "left" }}>
            Provides talent based skill development opportunities.
          </Typography>
        </div>
        <div className={classes.eachVision}>
          <Typography variant="inherit" className={classes.visionText} color="primary" style={{ textAlign: "left" }}>
            Personal guidance of field experts
          </Typography>
        </div>
        <div className={classes.eachVision}>
          <Typography variant="inherit" className={classes.visionText} color="primary" style={{ textAlign: "left" }}>
            Provide perfect solutions to growing challenges in the current education system
          </Typography>
        </div>
        <div className={classes.eachVision}>
          <Typography variant="inherit" className={classes.visionText} color="primary" style={{ textAlign: "left" }}>
            Backing the personalized learning system with appropriate and advanced technological support
          </Typography>
        </div>
        <div className={classes.eachVision}>
          <Typography variant="inherit" className={classes.visionText} color="primary" style={{ textAlign: "left" }}>
            Provide perfect solutions to growing challenges in the current education system and whosoever will be responsible, have to do the work
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default withStyles(styles)(Story);
