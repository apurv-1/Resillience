import React from "react";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/styles/withStyles";

//Components
import LandingPage from "./AboutLandingPage";
import Vision from "./Vision";
import Story from "./Story";
import OurTeam from "./OurTeam";

const styles = () => ({
  developers: {
    textAlign: "center",
    marginTop: "8%",
    fontStyle: "normal",
    marginBottom: "-5%",
    "@media only screen and (max-width: 770px)": {
      marginTop: "12%",
      marginBottom: "0"
    }
  },
  break: {
    display: "none",
    "@media only screen and (max-width: 770px)": {
      display: "initial"
    }
  },
  hoverName: {
    cursor: "pointer"
  }
});

function AboutUs(props) {
  const { classes } = props;
  return (
    <div
      className="page"
      style={{
        marginTop: "10%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
      }}
    >
      <LandingPage />
      <Vision />
      <OurTeam />
      <Story />
      <Typography variant="h5" color="primary" className={classes.developers}>
        Website developed by:&nbsp;&nbsp; <br className={classes.break} />
        <span className={classes.hoverName} onClick={() => window.open("https://www.linkedin.com/in/arijit-kundu/", "_blank")}>
          Arijit Kundu
        </span>{" "}
        &nbsp;&&nbsp;&nbsp;{" "}
        <span className={classes.hoverName} onClick={() => window.open("https://www.linkedin.com/in/apurv-gupta/", "_blank")}>
          Apurv Gupta
        </span>
      </Typography>
    </div>
  );
}
export default withStyles(styles)(AboutUs);
