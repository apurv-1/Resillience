import React from "react";
import Fade from "react-reveal/Fade";
import withStyles from "@material-ui/core/styles/withStyles";
import ResillienceLogo from "../../compressed/Resillience-Logo.png";
// import HomePageWeb from "../../compressed/homeLandingImageWeb.svg";
// import HomePagePhone from "../../compressed/homeLandingImagePhone.svg";
// import rectangleStroke from "../../compressed/rectangleStroke.svg";
import Counselling from "./Counselling";
import CounsellingWithTimer from "./CounsellingWithTimer";
import Typography from "@material-ui/core/Typography";

const styles = () => ({
  fade: {
    "@media only screen and (max-width: 770px)": {
      display: "none !important"
    }
  },
  fadePhone: {
    "@media only screen and (min-width: 770px)": {
      display: "none !important"
    }
  },
  homeImageWeb: {
    height: "110vh",
    marginLeft: "41.45%",
    right: "0px",
    "@media only screen and (min-width: 1600px)": {
      height: "60vh"
    },
    "@media only screen and (max-width: 1300px)": {
      height: "100vh"
    },
    "@media only screen and (max-width: 1200px)": {
      height: "90vh"
    },
    "@media only screen and (max-width: 1150px)": {
      height: "80vh",
      right: "-12px"
    },
    "@media only screen and (max-width: 1000px)": {
      height: "70vh",
      right: "0px"
    },
    "@media only screen and (max-width: 850px)": {
      height: "65vh"
    },
    "@media only screen and (max-width: 770px)": {
      display: "none"
    }
  },
  homeImagePhone: {
    width: "100%",
    "@media only screen and (min-width: 770px)": {
      display: "none"
    }
  },
  logoImage: {
    height: "100px",
    width: "100px",
    top: "30px",
    left: "5px",
    position: "absolute",
    "@media only screen and (max-width: 1100px)": {
      height: "65px",
      width: "65px"
    },
    "@media only screen and (max-width: 770px)": {
      height: "80px",
      width: "80px"
    }
  },
  content: {
    flexDirection: "column",
    marginTop: "12.3%",
    "@media only screen and (max-width: 770px)": {
      marginTop: "-15px",
      textAlign: "center"
    }
  },
  personalized: {
    fontFamily: "Rubik,sans-serif",
    fontSize: "80px",
    color: "#0F7DC2",
    margin: "0",
    "@media only screen and (max-width: 1300px)": {
      fontSize: "75px"
    },
    "@media only screen and (max-width: 1150px)": {
      fontSize: "70px"
    },
    "@media only screen and (max-width: 1025px)": {
      fontSize: "65px"
    },
    "@media only screen and (max-width: 1000px)": {
      fontSize: "60px"
    },
    "@media only screen and (max-width: 950px)": {
      fontSize: "55px"
    },
    "@media only screen and (max-width: 900px)": {
      fontSize: "50px"
    },
    "@media only screen and (max-width: 770px)": {
      fontSize: "300%"
    }
  },

  learning: {
    fontSize: "60px",
    fontFamily: "Poppins",
    color: "#151414",
    margin: "-20px 0 -2px 0",
    "@media only screen and (max-width: 1300px)": {
      fontSize: "60px"
    },
    "@media only screen and (max-width: 1150px)": {
      fontSize: "55px"
    },
    "@media only screen and (max-width: 1050px)": {
      fontSize: "50px"
    },
    "@media only screen and (max-width: 1000px)": {
      fontSize: "45px"
    },
    "@media only screen and (max-width: 950px)": {
      fontSize: "40px"
    },
    "@media only screen and (max-width: 900px)": {
      fontSize: "35px"
    },
    "@media only screen and (max-width: 770px)": {
      margin: "1%",
      marginTop: "-5px"
    },
    "@media only screen and (max-width: 430px)": {
      fontSize: "34px"
    },
    "@media only screen and (max-width: 320px)": {
      lineHeight: 1.1
    }
  },

  iitians: {
    color: "#6b6b6b",
    lineHeight: "1.6",
    margin: "0",
    "@media only screen and (max-width: 1200px)": {
      fontSize: "30px"
    },
    "@media only screen and (max-width: 1050px)": {
      fontSize: "30px"
    },
    "@media only screen and (max-width: 950px)": {
      fontSize: "28px"
    },
    "@media only screen and (max-width: 900px)": {
      fontSize: "25px"
    },
    "@media only screen and (max-width: 770px)": {
      fontSize: "20px"
    }
  },
  firstLine: {
    fontSize: "1.55rem",
    marginTop: "12px",
    "@media only screen and (max-width: 1000px)": {
      fontSize: "1.4rem"
    },
    "@media only screen and (max-width: 850px)": {
      fontSize: "1.3rem"
    }
  },
  spanText: {
    marginBottom: "0",
    fontWeight: "bold",
    "@media only screen and (max-width: 500px)": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  },
  bookAFreeText: {
    "@media only screen and (max-width: 770px)": {
      display: "none"
    }
  }
});

function LandingPage(props) {
  const { classes } = props;
  return (
    <div style={{ position: "relative", marginTop: "40px", marginLeft: "2%" }}>
      <div className={classes.fade}>
        <Fade delay={3100}>
          <img
            loading="lazy"
            className={classes.homeImageWeb}
            src="https://res.cloudinary.com/rweb1/image/upload/v1600243282/Assets/images/homeLandingImageWeb_wru9ee.svg"
            alt="Home Page Main"
            style={{ position: "absolute" }}
          />
          <img loading="lazy" className={classes.homeImagePhone} src="https://res.cloudinary.com/rweb1/image/upload/v1600243281/Assets/images/homeLandingImagePhone_djom9l.svg" alt="Home Page Main" />
        </Fade>
      </div>
      <div className={classes.fadePhone}>
        <Fade>
          <img
            loading="lazy"
            className={classes.homeImageWeb}
            src="https://res.cloudinary.com/rweb1/image/upload/v1600243282/Assets/images/homeLandingImageWeb_wru9ee.svg"
            alt="Home Page Main"
            style={{ position: "absolute" }}
          />
          <img loading="lazy" className={classes.homeImagePhone} src="https://res.cloudinary.com/rweb1/image/upload/v1600243281/Assets/images/homeLandingImagePhone_djom9l.svg" alt="Home Page Main" />
        </Fade>
      </div>
      <div className={classes.content}>
        <div className={classes.fade}>
          <Fade delay={3100}>
            <img loading="lazy" src={ResillienceLogo} className={classes.logoImage} alt="Logo" />
          </Fade>
        </div>
        <div className={classes.fadePhone}>
          <Fade>
            <img loading="lazy" src={ResillienceLogo} className={classes.logoImage} alt="Logo" />
          </Fade>
        </div>

        <Fade bottom delay={500}>
          <Typography variant="h1" className={classes.personalized}>
            Personalized
          </Typography>
        </Fade>
        <Fade bottom delay={1200}>
          <h2 className={classes.learning}>
            Learning with IITians
            {/* <span> */}
            {/* <img loading="lazy" alt="Bg Design" src="https://res.cloudinary.com/rweb1/image/upload/v1600243273/Assets/images/rectangleStroke_lejmjd.svg" className={classes.rectangleStroke} /> */}
            {/* IITians */}
            {/* </span> */}
          </h2>
        </Fade>
        <div className={classes.fadePhone}>
          <Fade delay={1800}>
            <h1 className={classes.iitians}>IIT JEE&nbsp;(Mains + Advanced) &nbsp; NEET </h1>
            <h1 className={classes.iitians}> MHT-CET&nbsp; Foundation&nbsp;(8th - 10th) </h1>
            <div className={classes.firstLine}>
              <div className={classes.fade}>
                <Fade bottom delay={3900}>
                  <Typography variant="inherit" className={classes.spanText}>
                    <span className={classes.bookAFreeText}>Book a FREE</span>
                    <CounsellingWithTimer />
                  </Typography>
                </Fade>
              </div>
              <div className={classes.fadePhone}>
                <Fade bottom delay={2100}>
                  <Typography variant="inherit" className={classes.spanText}>
                    <span className={classes.bookAFreeText}>Book a FREE</span>
                    <Counselling />
                  </Typography>
                </Fade>
              </div>
            </div>
          </Fade>
        </div>

        <div className={classes.fade}>
          <Fade delay={2100}>
            <h1 className={classes.iitians}>IIT JEE&nbsp;(Mains + Advanced) &nbsp; NEET </h1>
            <h1 className={classes.iitians}>MHT-CET&nbsp; Foundation&nbsp;(8th - 10th) </h1>
            <div className={classes.firstLine}>
              <div className={classes.fade}>
                <Fade bottom delay={3900}>
                  <Typography variant="inherit" className={classes.spanText}>
                    <span className={classes.bookAFreeText}>Book a FREE</span>
                    <Counselling />
                  </Typography>
                </Fade>
              </div>
              <div className={classes.fadePhone}>
                <Fade bottom delay={1600}>
                  <Typography variant="inherit" className={classes.spanText}>
                    <span className={classes.bookAFreeText}>Book a FREE</span>
                    <Counselling />
                  </Typography>
                </Fade>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}

export default withStyles(styles)(LandingPage);
