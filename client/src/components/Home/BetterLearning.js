import React from "react";
import Fade from "react-reveal/Fade";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";

import BetterLearningChanges from "../../compressed/BetterLearningImage.svg";
// import BetterLearningImagePhone from "../../compressed/BetterLearningImagePhone.svg";

const styles = () => ({
  BetterLearningSection: {
    position: "relative",
    height: "1200px",
    width: "1036px",
    margin: "0 auto",
    marginBottom: "50%",
    "@media only screen and (max-width: 1050px)": {
      marginBottom: "60%"
    },
    "@media only screen and (max-width: 1000px)": {
      width: "90%"
    },
    "@media only screen and (max-width: 770px)": {
      width: "320px",
      marginTop: "25%",
      marginBottom: "550px"
    }
  },
  BetterLearningImageWeb: {
    textAlign: "right",
    position: "absolute",
    marginLeft: "365px",
    height: "1565px",
    "@media only screen and (max-width: 1000px)": {
      width: "68%",
      height: "1582px",
      marginLeft: "285px"
    },
    "@media only screen and (max-width: 950px)": {
      width: "65%",
      height: "1582px",
      marginLeft: "280px"
    },
    "@media only screen and (max-width: 850px)": {
      width: "60%",
      height: "1582px",
      marginLeft: "270px"
    },
    "@media only screen and (max-width: 770px)": {
      display: "none"
    }
  },
  BetterLearningImagePhone: {
    textAlign: "right",
    position: "absolute",
    marginLeft: "20px",
    marginTop: "0",
    height: "auto",
    width: "290px",
    "@media only screen and (min-width: 770px)": {
      display: "none"
    }
  },
  whyResillience: {
    margin: "5%",
    textAlign: "center",
    letterSpacing: "-1px",
    "@media only screen and (max-width: 770px)": {
      margin: "4%",
      marginBottom: "10%"
    }
  },
  LearningBody: {
    position: "relative",
    display: "flex",
    height: "163px",
    "@media only screen and (max-width: 770px)": {
      height: "165px"
    }
  },
  DescriptionItem: {
    width: "360px",
    textAlign: "right",
    "@media only screen and (max-width: 1000px)": {
      width: "290px"
    },
    "@media only screen and (max-width: 900px)": {
      width: "240px"
    },
    "@media only screen and (max-width: 770px)": {
      width: "204px",
      textAlign: "left"
    }
  },
  DescriptionItemR: {
    width: "360px",
    textAlign: "left",
    marginLeft: "auto",
    "@media only screen and (max-width: 1000px)": {
      width: "290px"
    },
    "@media only screen and (max-width: 900px)": {
      width: "240px"
    },
    "@media only screen and (max-width: 770px)": {
      width: "204px"
    }
  },

  Title: {
    fontWeight: "700",
    fontSize: "24px",
    color: "#000",
    letterSpacing: "-.5px",
    lineHeight: "36px",
    "@media only screen and (max-width: 770px)": {
      fontSize: "14px",
      lineHeight: "21px"
    }
  },
  Content: {
    opacity: ".5",
    fontSize: "14px",
    color: "#000",
    lineHeight: "24px",
    marginTop: "5px",
    "@media only screen and (max-width: 770px)": {
      fontSize: "12px",
      lineHeight: "18px"
    }
  }
});

function BetterLearning(props) {
  const { classes } = props;
  return (
    <section className={classes.BetterLearningSection}>
      <Fade top>
        <Typography variant="h3" color="primary" className={classes.whyResillience}>
          Why RESILLIENCE ?
        </Typography>
      </Fade>
      <img loading="lazy" src={BetterLearningChanges} className={classes.BetterLearningImageWeb} alt="Better Learning Path" />
      <img
        loading="lazy"
        src="https://res.cloudinary.com/rweb1/image/upload/v1600243276/Assets/images/BetterLearningImagePhone_yibgac.svg"
        className={classes.BetterLearningImagePhone}
        alt="Better Learning Path"
      />
      <div className={classes.LearningBody}>
        <div className={classes.DescriptionItem}>
          <Fade>
            <div className={classes.Title}>Personalized learning with IIT graduate faculty</div>
          </Fade>
          <div className={classes.Content}>Students prepare under individual attention of very passionate and empathetic IITians. The Pace of learning depends on the student.</div>
        </div>
      </div>
      <div className={classes.LearningBody}>
        <div className={classes.DescriptionItemR}>
          <Fade>
            <div className={classes.Title}>Flexible class timings</div>
          </Fade>
          <div className={classes.Content}>Students can choose the session timing as per their convenience.</div>
        </div>
      </div>
      <div className={classes.LearningBody}>
        <div className={classes.DescriptionItem}>
          <Fade>
            <div className={classes.Title}>Intensive practice on each concept</div>{" "}
          </Fade>
          <div className={classes.Content}>More number of quality questions are practiced, saving time from irrelevant stuff.</div>
        </div>
      </div>
      <div className={classes.LearningBody}>
        <div className={classes.DescriptionItemR}>
          <Fade>
            <div className={classes.Title}>Doubt solving on chat and call by the same teacher</div>
          </Fade>
          <div className={classes.Content}>Students are always connected to their teachers, they can ask whenever they are stuck.</div>
        </div>
      </div>
      <div className={classes.LearningBody}>
        <div className={classes.DescriptionItem}>
          <Fade>
            <div className={classes.Title}>Regular personalized tests and analysis</div>
          </Fade>
          <div className={classes.Content}>Regular Personalized tests are taken and the analysis is done with the student in class only.</div>
        </div>
      </div>
      <div className={classes.LearningBody}>
        <div className={classes.DescriptionItemR}>
          <Fade>
            <div className={classes.Title}>Training on exam strategy and smart tips</div>
          </Fade>
          <div className={classes.Content}>Under personal guidance, students learn how to attempt any paper with smart approach to maximize the score under any condition.</div>
        </div>
      </div>
      <div className={classes.LearningBody}>
        <div className={classes.DescriptionItem}>
          <Fade>
            <div className={classes.Title}>Personalized plan for regular improvement</div>
          </Fade>
          <div className={classes.Content}>Our expert faculty periodically checks and plan habits to adopt for every student. It helps them improving daily at practice level.</div>
        </div>
      </div>
      <div className={classes.LearningBody}>
        <div className={classes.DescriptionItemR}>
          <Fade>
            <div className={classes.Title}>Regular insights to parents</div>
          </Fade>
          <div className={classes.Content}>Parents are regularly updated on daily progress of the student. They can reach the teacher any time.</div>
        </div>
      </div>
      <div className={classes.LearningBody}>
        <div className={classes.DescriptionItem}>
          <Fade>
            <div className={classes.Title}>Students experience all round academic growth</div>
          </Fade>
          <div className={classes.Content}>Our teachers work seamlessly to boost every student’s all-round academic growth, helping them learn better.</div>
        </div>
      </div>
    </section>
  );
}

export default withStyles(styles)(BetterLearning);
