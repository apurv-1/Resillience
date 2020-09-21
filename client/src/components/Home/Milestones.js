import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
// import milestoneImageDesign from "../../compressed/milestoneImageDesign.svg";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";

const styles = () => ({
  milestoneSection: {
    textAlign: "center",
    "@media only screen and (max-width: 1000px)": {
      fontSize: "90%"
    },
    "@media only screen and (max-width: 770px)": {
      marginBottom: "40px",
      fontSize: "100%"
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
  const [focus, setFocus] = React.useState(false);
  const { classes } = props;
  return (
    <div className={classes.milestoneSection}>
      <img src="https://res.cloudinary.com/rweb1/image/upload/v1600243284/Assets/images/milestoneImageDesign_m8mcru.svg" className={classes.milestoneImage} alt="Milestone Design" />
      <Typography variant="h3" color="primary" style={{ marginBottom: "5%", textAlign: "center", letterSpacing: "-1.5px" }}>
        Milestones
      </Typography>
      <div className={classes.milestones}>
        <div className={classes.eachMilestone}>
          <h1>
            <CountUp start={focus ? 0 : null} end={150} duration={4} redraw={true}>
              {({ countUpRef }) => (
                <VisibilitySensor
                  onChange={(isVisible) => {
                    if (isVisible) {
                      setFocus(true);
                    }
                  }}
                >
                  <span ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>
            +
          </h1>
          <h1>Total registered students</h1>
        </div>
        <div className={classes.eachMilestone}>
          <h1>
            <CountUp start={focus ? 0 : null} end={3700} duration={4} redraw={true}>
              {({ countUpRef }) => (
                <VisibilitySensor
                  onChange={(isVisible) => {
                    if (isVisible) {
                      setFocus(true);
                    }
                  }}
                >
                  <span ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>
            +
          </h1>
          <h1>Hours taught online</h1>
        </div>
        <div className={classes.eachMilestone}>
          <h1>
            <CountUp start={focus ? 0 : null} end={3500} duration={4} redraw={true}>
              {({ countUpRef }) => (
                <VisibilitySensor
                  onChange={(isVisible) => {
                    if (isVisible) {
                      setFocus(true);
                    }
                  }}
                >
                  <span ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>
            +
          </h1>
          <h1>Hours at home</h1>
        </div>
        <div className={classes.eachMilestone}>
          <h1>
            <CountUp start={focus ? 0 : null} end={150} duration={4} redraw={true}>
              {({ countUpRef }) => (
                <VisibilitySensor
                  onChange={(isVisible) => {
                    if (isVisible) {
                      setFocus(true);
                    }
                  }}
                >
                  <span ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>
            +
          </h1>
          <h1>Mentoring Sessions</h1>
        </div>
      </div>
    </div>
  );
}

export default withStyles(styles)(Milestones);
