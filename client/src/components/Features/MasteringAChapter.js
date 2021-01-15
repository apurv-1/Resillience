import React from "react";
import { Helmet } from "react-helmet";
import Fade from "react-reveal/Fade";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import CheckRoundedIcon from "@material-ui/icons/CheckRounded";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import CounsellingWeb from "./CounsellingMasteringWeb";
import CounsellingTablet from "./CounsellingMasteringTablet";
import { Link } from "react-router-dom";

//Images
// import masteringChapter from "../../compressed/masteringChapters.svg";
// import liveDoubts from "../../compressed/Questions.svg";
// import strokeFeatures from "../../compressed/strokeAboutUs.svg";

const styles = () => ({
  featureSection: {
    paddingTop: "5%",
    height: "70%",
    display: "flex",
    paddingLeft: "11.5%",
    paddingRight: "11.5%",
    fontSize: "22px",
    "@media only screen and (max-width: 770px)": {
      fontSize: "16px",
      flexDirection: "column",
      paddingLeft: "3%",
      paddingRight: "3%",
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
  nextPageL: {
    position: "fixed",
    top: "48%",
    left: "0",
    height: "70px",
    width: "45px",
    borderRadius: "0 150px 150px 0",
    textAlign: "center",
    backgroundColor: "white",
    boxShadow: "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
    "@media only screen and (max-width: 450px)": {
      top: "45%",
      height: "50px",
      width: "30px"
    }
  },
  nextPageLIcon: {
    marginTop: "17px",
    marginRight: "10px",
    "@media only screen and (max-width: 450px)": {
      marginTop: "10px",
      marginLeft: "-5px"
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
  stroke: {
    zIndex: "-1",
    marginTop: "38px",
    marginLeft: "42%",
    position: "absolute",
    "@media only screen and (min-width: 1600px)": {
      display: "none"
    },
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
    },
    "@media only screen and (max-width: 390px)": {
      marginLeft: "-35px"
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
    fontSize: "20px",
    marginLeft: "8%",
    "@media only screen and (max-width: 770px)": {
      marginLeft: "0%"
    }
  },
  contentVideo: {
    padding: "5%",
    fontSize: "20px"
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
  }
});
function MasteringAChapter(props) {
  const { classes } = props;
  return (
    <div className="page" style={{ marginTop: "80px" }}>
      <Helmet>
        <link rel="icon" href="https://res.cloudinary.com/rweb1/image/upload/v1600243274/Assets/images/Resillience-Logo-Small_tslub5.png" />
      </Helmet>
      <Link to="/tuitions/one-on-one-online-tuitions">
        <div className={classes.nextPageL}>
          <NavigateBeforeIcon color="primary" fontSize="large" className={classes.nextPageLIcon} />
        </div>
      </Link>
      <Fade top>
        <span>
          <img loading="lazy" alt="Bg Design" src="https://res.cloudinary.com/rweb1/image/upload/v1600243275/Assets/images/strokeAboutUs_kc7js9.svg" className={classes.stroke} />
          <Typography variant="h3" color="primary" className={classes.featuresText}>
            Tuitions
          </Typography>
        </span>
      </Fade>

      <div className={classes.featureSection}>
        <div className={classes.fImageSection}>
          <img loading="lazy" className={classes.fImage} alt="Mastering Chapter" src="https://res.cloudinary.com/rweb1/image/upload/v1600243284/Assets/images/masteringChapters_xbfyjq.svg" />
          <CounsellingTablet />
        </div>

        <div className={classes.fDescription}>
          <Fade top>
            <Typography variant="h4" color="secondary" className={classes.descHeading}>
              Mastering a weak topic
            </Typography>
          </Fade>
          <Typography variant="h5" color="primary" className={classes.subHeading}>
            IIT JEE (Main + Advanced), &nbsp;NEET, &nbsp;MHT-CET
          </Typography>
          <Typography variant="h5" color="primary" className={classes.subHeading} style={{ opacity: "0.6" }}>
            Both Home & Online Mode
          </Typography>
          <div className={classes.content}>
            {["Unable to solve problems of specific topic?", "Unable to solve problems of specific topic?", "Concerned about the backlogs?", "Problem in solving mixed concept questions?"].map(
              (vision, index) => (
                <span className={classes.eachVision} key={index}>
                  <CheckRoundedIcon color="secondary" style={{ marginRight: "5px" }} />
                  <Typography variant="inherit" className={classes.text} color="primary">
                    {vision}
                  </Typography>
                  <br />
                </span>
              )
            )}
          </div>
          <CounsellingWeb />
        </div>
      </div>

      <div className={classes.featureSection}>
        <div className={classes.fDescription}>
          <Fade top>
            <Typography variant="h4" color="secondary" className={classes.descHeading}>
              Benefits of Mastering a Weak Topic
            </Typography>
          </Fade>
          <Typography variant="inherit" color="primary" className={classes.text} style={{ textAlign: "center", marginTop: "5%", color: "black" }}>
            Note: There will be certain prerequisite for some topics. We will suggest you to learn them.
          </Typography>
          <div className={classes.content}>
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
        <div className={classes.fImageSection}>
          <iframe
            title="Youtube"
            aria-hidden="true"
            className={classes.iframe}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
            src="https://www.youtube.com/embed/fJ9aSuagVfM?autoplay=1&mute=1"
            // srcDoc={`<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/jMVoreUzBhc/?autoplay=1&muted=1><img loading="lazy" src=https://img.youtube.com/vi/jMVoreUzBhc/hqdefault.jpg alt='Video The Dark Knight Rises: What Went Wrong? – Wisecrack Edition'><span>▶</span></a>`}
          />
        </div>
      </div>

      <div style={{ textAlign: "center", marginTop: "80px", marginBottom: "40px" }}>
        <div className={classes.iframeSection}></div>
      </div>

      <div className={classes.featureSection}>
        <Fade>
          <div className={classes.fImageSectionVideo}>
            <img loading="lazy" className={classes.fImage} alt="Live doubts" src="https://res.cloudinary.com/rweb1/image/upload/v1600243271/Assets/images/Questions_e1ejpe.svg" />
          </div>
          <div className={classes.fDescription}>
            <Fade top>
              <Typography variant="h4" color="secondary" className={classes.descHeading}>
                Get solution to your every doubt via Call & Chat
              </Typography>
            </Fade>
            <div className={classes.contentVideo}>
              <Typography variant="inherit" className={classes.text} color="primary">
                {[
                  "None of your doubts will go unanswered.",
                  "Clearing each and every doubt related to preperation is key to good result.",
                  "Instant doubt support",
                  "We will instantly reply and resolve all your doubts.",
                  "Don’t worry, we are ready to help until you’ve completely understood them."
                ].map((vision, index) => (
                  <span className={classes.eachVision} key={index}>
                    <CheckRoundedIcon color="secondary" style={{ marginRight: "5px" }} />
                    <Typography variant="inherit" className={classes.text} color="primary">
                      {vision}
                    </Typography>
                    <br />
                  </span>
                ))}
              </Typography>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}
export default withStyles(styles)(MasteringAChapter);
