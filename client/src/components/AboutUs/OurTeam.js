import React from "react";
import Fade from "react-reveal/Fade";
import withStyles from "@material-ui/styles/withStyles";
import Typography from "@material-ui/core/Typography";
// import TeacherImage from "../../compressed/teachersNew.svg";

const styles = () => ({
  teacherImage: {
    paddingBottom: "5%",
    width: "90%",
    "@media only screen and (max-width: 770px)": {
      height: "200px"
    }
  }
});

function OurTeam(props) {
  const { classes } = props;
  return (
    <div style={{ margin: "auto", textAlign: "center" }}>
      <Fade top>
        <Typography variant="h4" color="primary" style={{ textAlign: "center", color: "#0F7DC2" }}>
          Founders
        </Typography>
      </Fade>
      <img loading="eager" alt="Teacher" src="https://res.cloudinary.com/rweb1/image/upload/v1600566177/Assets/images/teachersCompress_l1e5lt.svg" className={classes.teacherImage} />
      {/* <img loading="lazy" alt="Teacher" src={TeacherImage} className={classes.teacherImage}></img> */}
    </div>
  );
}

export default withStyles(styles)(OurTeam);
