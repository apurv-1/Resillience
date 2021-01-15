import React from "react";
import Fade from "react-reveal/Fade";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";

const styles = () => ({
  vision: {
    fontSize: "22px",
    padding: "5%",
    textAlign: "center",
    "@media only screen and (max-width: 1024px)": {
      fontSize: "20px"
    },
    "@media only screen and (max-width: 770px)": {
      fontSize: "16px",
      paddingBottom: "4%"
    }
  },
  textHeading: {
    marginBottom: "2%"
  },
  visionText: {
    fontStyle: "italic",
    letterSpacing: "0.02px",
    lineHeight: "1.2",
    opacity: "0.8"
  }
});

function Vision(props) {
  const { classes } = props;

  return (
    <div className={classes.vision}>
      <Fade top>
        <Typography variant="h4" color="secondary" className={classes.textHeading}>
          Our Vision:{" "}
          <span role="img" aria-label="rocket">
            🚀
          </span>
        </Typography>
      </Fade>
      <Fade>
        <Typography variant="inherit" className={classes.visionText} color="primary" style={{ textAlign: "left" }}>
          Our vision is to Empower each and every corner of India by providing "Affordable and Quality" personalized education at your door step
        </Typography>
      </Fade>
    </div>
  );
}

export default withStyles(styles)(Vision);
