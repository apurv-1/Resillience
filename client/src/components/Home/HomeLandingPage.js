import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import ResillienceLogo from "../../compressed/Resillience-Logo.png";
// import HomePageWeb from "../../compressed/homeLandingImageWeb.svg";
// import HomePagePhone from "../../compressed/homeLandingImagePhone.svg";
// import rectangleStroke from "../../compressed/rectangleStroke.svg";
import Counselling from "./Counselling";
import Typography from "@material-ui/core/Typography";

const styles = () => ({
  homeImageWeb: {
    height: "110vh",
    marginLeft: "41.45%",
    "@media only screen and (max-width: 1300px)": {
      height: "100vh"
    },
    "@media only screen and (max-width: 1200px)": {
      height: "90vh"
    },
    "@media only screen and (max-width: 1150px)": {
      height: "80vh"
    },
    "@media only screen and (max-width: 1000px)": {
      height: "70vh"
    },
    "@media only screen and (max-width: 770px)": {
      display: "none"
    }
  },
  homeImagePhone: {
    width: "100%",
    // display: "none",
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
    // disply: "flex",
    flexDirection: "column",
    marginTop: "12.3%",
    "@media only screen and (max-width: 770px)": {
      marginTop: "-5px",
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
    fontSize: "64px",
    margin: "-4px 0 0 0",
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
      fontSize: "35px",
      margin: "2%"
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

  // rectangleStroke: {
  //   zIndex: "-1",
  //   marginTop: "38px",
  //   marginLeft: "4px",
  //   position: "absolute",

  //   "@media only screen and (max-width: 1150px)": {
  //     width: "15%",
  //     marginLeft: "5px"
  //   },
  //   "@media only screen and (max-width: 1000px)": {
  //     display: "none"
  //   },
  //   "@media only screen and (max-width: 770px)": {
  //     display: "initial",
  //     marginTop: "19px",
  //     marginLeft: "-8px",
  //     width: "125px",
  //     height: "12px"
  //   },
  //   "@media only screen and (max-width: 373px)": {
  //     marginTop: "55px",
  //     marginLeft: "-180px",
  //     width: "125px",
  //     height: "12px"
  //   }
  // },

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
    color: "#0F7DC2",
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
      <img
        className={classes.homeImageWeb}
        src="https://res.cloudinary.com/rweb1/image/upload/v1600243282/Assets/images/homeLandingImageWeb_wru9ee.svg"
        alt="Home Page Main"
        style={{ position: "absolute", right: "0" }}
      />
      <img className={classes.homeImagePhone} src="https://res.cloudinary.com/rweb1/image/upload/v1600243281/Assets/images/homeLandingImagePhone_djom9l.svg" alt="Home Page Main" />
      <div className={classes.content}>
        <img src={ResillienceLogo} className={classes.logoImage} alt="Logo" />

        <Typography variant="h1" className={classes.personalized}>
          Personalized
        </Typography>
        <h2 className={classes.learning}>
          Learning with{" "}
          <span>
            {/* <img alt="Bg Design" src="https://res.cloudinary.com/rweb1/image/upload/v1600243273/Assets/images/rectangleStroke_lejmjd.svg" className={classes.rectangleStroke} /> */}
            IITians
          </span>
        </h2>
        <h1 className={classes.iitians}>IIT JEE&nbsp;(Mains + Advanced) &nbsp; NEET </h1>
        <h1 className={classes.iitians}> Foundation&nbsp;(8th - 10th) </h1>
        <div className={classes.firstLine}>
          <Typography variant="inherit" className={classes.spanText}>
            <span className={classes.bookAFreeText}>Book a FREE</span>
            <Counselling />
            {/* Book a FREE */}
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default withStyles(styles)(LandingPage);
