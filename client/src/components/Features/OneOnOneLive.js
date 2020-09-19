import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import CheckRoundedIcon from "@material-ui/icons/CheckRounded";
import Counselling from "./Counselling";

//Images
// import onlineOneToOne from "../../compressed/onlineOneToOne.svg";
// import liveDoubts from "../../compressed/Questions.svg";
// import strokeFeatures from "../../compressed/strokeAboutUs.svg";

const styles = () => ({
  featureSection: {
    paddingTop: "5%",
    height: "70%",
    display: "flex",
    // marginBottom: "5%", //As it was not getting alligned properly on referred link
    paddingLeft: "11.5%",
    paddingRight: "11.5%",
    fontSize: "22px",
    "@media only screen and (max-width: 770px)": {
      fontSize: "16px",
      flexDirection: "column",
      paddingLeft: "3%",
      paddingRight: "3%",
      // marginBottom: "0%",
      alignItems: "center"
    }
  },
  featuresText: {
    margin: "5%",
    textAlign: "center",
    letterSpacing: "-1px",
    marginBottom: "0",
    "@media only screen and (max-width: 770px)": {
      marginBottom: "5%"
    }
  },
  iframeSection: {
    position: "absolute",
    left: "42%",
    marginTop: "14.5%"
  },
  iframe: {
    width: "473px",
    height: "266px",
    "@media only screen and (max-width: 1200px)": {
      width: "426px",
      height: "240px"
    },
    "@media only screen and (max-width: 1074px)": {
      width: "387px",
      height: "218px"
    },
    "@media only screen and (max-width: 950px)": {
      width: "340px",
      height: "192px"
    },
    "@media only screen and (max-width: 850px)": {
      width: "304px",
      height: "171px"
    },
    "@media only screen and (max-width: 770px)": {
      width: "426px",
      height: "240px"
    },
    "@media only screen and (max-width: 650px)": {
      width: "387px",
      height: "218px"
    },
    "@media only screen and (max-width: 550px)": {
      width: "340px",
      height: "192px"
    },
    "@media only screen and (max-width: 450px)": {
      width: "266px",
      height: "150px"
    }
  },
  video: {
    margin: "auto",
    marginTop: "55px",
    textAlign: "center"
  },
  stroke: {
    zIndex: "-1",
    marginTop: "38px",
    marginLeft: "42%",
    position: "absolute",
    "@media only screen and (max-width: 1100px)": {
      display: "none"
    }
  },
  fImageSection: {
    width: "40%",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "2%",
    "@media only screen and (max-width: 770px)": {
      fontSize: "16px",
      order: "0",
      width: "60%"
      // visibility: "hidden"
    }
  },
  fImageSectionVideo: {
    width: "40%",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "2%",
    "@media only screen and (max-width: 770px)": {
      fontSize: "16px",
      order: "0",
      width: "70%"
      // visibility: "hidden"
    }
  },
  fImage: {
    width: "100%"
  },
  fDescription: {
    display: "flex",
    width: "60%",
    flexDirection: "column",
    padding: "2%",
    "@media only screen and (max-width: 770px)": {
      order: "1",
      width: "100%"
    }
  },
  descHeading: {
    textAlign: "center",
    marginTop: "3%",
    letterSpacing: "-0.5px",
    "@media only screen and (max-width: 770px)": {
      marginTop: "10%"
    }
  },
  subHeading: {
    textAlign: "center",
    marginTop: "3%",
    letterSpacing: "-0.5px"
  },
  content: {
    padding: "5%",
    fontSize: "20px"
  },
  contentVideo: {
    padding: "5%",
    fontSize: "20px",
    marginLeft: "8%"
  },
  text: {
    letterSpacing: "0.02px",
    lineHeight: "1.5",
    opacity: "0.8"
  },
  divider: {
    display: "none",
    "@media only screen and (max-width: 770px)": {
      display: "inherit",
      margin: "auto",
      marginBottom: "15%",
      width: "70%"
    }
  },
  eachVision: {
    marginTop: "1.5%",
    display: "flex",
    "@media only screen and (max-width: 770px)": {
      marginTop: "2.5%"
    }
  },
  session: {
    marginTop: "5%"
  },
  videoFeatures: {
    width: "70%"
  }
});
function OneOnOneLive(props) {
  const { classes } = props;
  return (
    <div className="page" style={{ marginTop: "80px" }}>
      <span>
        <img alt="Bg Design" src="https://res.cloudinary.com/rweb1/image/upload/v1600243275/Assets/images/strokeAboutUs_kc7js9.svg" className={classes.stroke} />
        <Typography variant="h3" color="primary" className={classes.featuresText}>
          Tuitions
        </Typography>
      </span>
      <div className={classes.featureSection} id="oneToOneOnlineClasses">
        <div className={classes.fImageSection}>
          <img className={classes.fImage} alt="Online One to One Classes" src="https://res.cloudinary.com/rweb1/image/upload/v1600243270/Assets/images/onlineOneToOne_jomuvz.svg" />
          <Counselling />
        </div>
        <div className={classes.fDescription}>
          <Typography variant="h4" color="secondary" className={classes.descHeading}>
            1-on-1 <span style={{ color: "#0d669e" }}>Live</span> Online Tuition
          </Typography>
          <Typography variant="h5" color="primary" className={classes.subHeading}>
            IIT JEE (Main + Advanced), NEET
            <br /> Foundation (8th - 10th)
          </Typography>
          <div className={classes.content}>
            {[
              "If the student has potential but unable to get desired results?",
              "If the student is curious but introvert and unable to keep pace with large classrooms?",
              "If daily doubts remain unsolved?",
              "Already have many backlogs, unable to cope up?",
              "Self study is going well but unable to get expected marks?",
              "Unable to manage time and pressure in exams and making silly mistakes every time?"
            ].map((vision, index) => (
              <span className={classes.eachVision} key={index}>
                <CheckRoundedIcon color="secondary" style={{ marginRight: "5px" }} />
                <Typography variant="inherit" className={classes.text} color="primary">
                  {vision}
                </Typography>
                <br />
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className={classes.featureSection} id="oneToOneHomeClasses">
        <div className={classes.fDescription}>
          <Typography variant="h4" color="secondary" className={classes.descHeading}>
            Benefits of 1-on-1 Live Online Tuition
          </Typography>
          <div className={classes.contentVideo}>
            {["Save your travelling time", "Intensive practice sessions", "Instant doubt support", "Regular personalized test", "Training on exam strategy"].map((vision, index) => (
              <span className={classes.eachVision} key={index}>
                <CheckRoundedIcon color="secondary" style={{ marginRight: "5px" }} />
                <Typography variant="inherit" className={classes.text} color="primary">
                  {vision}
                </Typography>
                <br />
              </span>
            ))}
          </div>
        </div>
        <div className={classes.fImageSectionVideo}>
          <iframe
            title="Youtube"
            aria-hidden="true"
            className={classes.iframe}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
            src="https://www.youtube.com/embed/ElLUlnEALAE?autoplay=1&mute=1&loop=1"
            // srcDoc={`<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/jMVoreUzBhc/?autoplay=1&muted=1><img src=https://img.youtube.com/vi/jMVoreUzBhc/hqdefault.jpg alt='Video The Dark Knight Rises: What Went Wrong? – Wisecrack Edition'><span>▶</span></a>`}
          />
        </div>
      </div>

      <Divider variant="middle" className={classes.divider} />
      <div className={classes.featureSection}>
        <div className={classes.fImageSection}>
          <img className={classes.fImage} alt="Live doubts" src="https://res.cloudinary.com/rweb1/image/upload/v1600243271/Assets/images/Questions_e1ejpe.svg" />
        </div>
        <div className={classes.fDescription}>
          <Typography variant="h4" color="secondary" className={classes.descHeading}>
            Get solution to your every doubt via Call & Chat
          </Typography>
          <div className={classes.content}>
            <Typography variant="inherit" className={classes.text} color="primary">
              None of your doubts will go unanswered.
              <br />
              Clearing each and every doubt related to preperation is key to good result.
              <br />
              We will instantly reply and resolve all your doubts.
              <br />
              Don’t worry, we are ready to help until you’ve completely understood them.
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}
export default withStyles(styles)(OneOnOneLive);
