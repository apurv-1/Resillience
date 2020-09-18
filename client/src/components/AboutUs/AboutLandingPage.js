import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";

//Images
import TeamLandingImageWeb from "../../compressed/teamLanding.svg";
// import TeamLandingImagePhone from "../../compressed/teamLandingPhone.svg";

import Typography from "@material-ui/core/Typography";
// import strokeAboutUs from "../../compressed/strokeAboutUs.svg";

const styles = () => ({
  teamLanding: {
    height: "100vh",
    width: "100%",
    display: "flex",
    fontSize: "22px",
    "@media only screen and (max-width: 1024px)": {
      fontSize: "20px"
    },
    "@media only screen and (max-width: 770px)": {
      position: "relative",
      flexDirection: "column",
      fontSize: "16px",
      marginBottom: "10px",
      marginTop: "10%",
      height: "auto"
    }
  },
  teamLandingImageWeb: {
    position: "absolute",
    right: "0",
    height: "104%",
    width: "39.4%",
    top: "33px",
    "@media only screen and (max-width: 770px)": {
      display: "none"
    }
  },
  teamLandingImagePhone: {
    display: "none",
    "@media only screen and (max-width: 770px)": {
      display: "inherit",
      margin: "auto"
    }
  },
  aboutUs: {
    "@media only screen and (max-width: 770px)": {
      display: "flex",
      marginTop: "5%"
    }
  },
  infoAbout: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "60%",
    padding: "0 3%",
    "@media only screen and (max-width: 1025px)": {
      width: "55%"
    },
    "@media only screen and (max-width: 770px)": {
      order: 1,
      textAlign: "center",
      width: "94%"
    }
  },
  title: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center"
  },
  text: {
    letterSpacing: "0.02px",
    lineHeight: "1.5",
    opacity: "0.8",
    marginBottom: "35px"
  },
  visionText: {
    fontSize: "27px",
    "@media only screen and (max-width: 1024px)": {
      marginTop: "85px",
      fontSize: "22px"
    },
    "@media only screen and (max-width: 770px)": {
      fontSize: "18px",
      marginTop: "25px"
    }
  }
});

function LandingPage(props) {
  const { classes } = props;
  return (
    <div className={classes.teamLanding}>
      <div className={classes.infoAbout}>
        <span className={classes.aboutUs}>
          <Typography variant="h3" style={{ textAlign: "center", marginBottom: "5%" }} color="primary">
            About Us
          </Typography>
          <img
            alt="Bg Design"
            src="https://res.cloudinary.com/rweb1/image/upload/v1600243275/Assets/images/strokeAboutUs_kc7js9.svg"
            style={{
              zIndex: "-1",
              marginLeft: "4px",
              position: "absolute",
              top: "140px",
              display: "none"
            }}
          />
        </span>

        <div className={classes.title}>
          <Typography variant="inherit" className={classes.text} color="primary" style={{ marginTop: "20px" }}>
            We are a team of IIT graduate mentors, and dedicated professionals with a single goal to provide perfect and result oriented solution for IIT/NEET preparation. We believe:
          </Typography>
          <Typography variant="inherit" color="secondary" className={classes.visionText}>
            “ Everyone can learn and excel but the ways will be different. ”
          </Typography>
          <Typography variant="inherit" color="primary" className={classes.text} style={{ margintop: "5px" }}>
            <i> ~ Team RESILLIENCE</i>
          </Typography>
          <Typography variant="inherit" color="primary" className={classes.text}>
            Focusing on each and every student, is not possible in big classrooms. To provide personal attention to each and every student we are here with our solution of "Personalized Learning with
            IITians" backed with advanced technical support.
          </Typography>
        </div>
      </div>
      <div
        style={{
          order: "0",
          "@media only screen and (maxWidth: 770px)": {
            order: 1
          }
        }}
      >
        <img src={TeamLandingImageWeb} alt="Team Landing Page" className={classes.teamLandingImageWeb} />
        <img src="https://res.cloudinary.com/rweb1/image/upload/v1600243272/Assets/images/teamLandingPhone_tp5sfj.svg" alt="Team Landing Page" className={classes.teamLandingImagePhone} />
      </div>
    </div>
  );
}

export default withStyles(styles)(LandingPage);
