import React from "react";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import withStyles from "@material-ui/core/styles/withStyles";

// import Online1to1 from "../../compressed/online1to1.svg";
// // import OnlineGroup from "../../compressed/teacher.svg";
// import masteringChapter from "../../compressed/masteringChapters.svg";
// import HomeTuition from "../../compressed/hometuition.svg";

//MUI
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

const styles = () => ({
  sectionBg: {
    height: "100%",
    textAlign: "center",
    paddingTop: "14%",
    marginBottom: "10%",
    "@media only screen and (max-width: 770px)": {
      marginBottom: "20px",
      paddingTop: "80px"
    }
  },
  tuitionText: {
    margin: "5%",
    marginBottom: "2%",
    letterSpacing: "-1px",
    "@media only screen and (max-width: 770px)": {
      marginTop: "25px",
      marginBottom: "30px"
    }
  },
  grid: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginLeft: "0",
    marginRight: "0"
  },
  card: {
    "@media only screen and (max-width: 1190px)": {
      minWidth: "30%"
    },
    "@media only screen and (max-width: 770px)": {
      padding: "20px 45px !important"
    }
  },
  homeTuition: {
    width: "70%",
    height: "240px",
    objectFit: "contain",
    padding: "3.5%",
    "@media only screen and (max-width: 770px)": {
      maxWidth: "80%"
    }
  },
  oneToOne: {
    objectFit: "contain",
    height: "240px",
    width: "70%",
    padding: "3.5%",
    "@media only screen and (max-width: 770px)": {
      maxWidth: "80%"
    }
  },
  onlineGroup: {
    padding: "3.5%",
    width: "90%",
    height: "240px",
    objectFit: "contain",
    "@media only screen and (max-width: 770px)": {
      maxWidth: "80%"
    }
  },
  fHeading: {
    padding: "0 7% 7% 7%"
  },
  readMore: {
    paddingBottom: "5%",
    "&:hover": {
      color: "#6b6b6b",
      letterSpacing: "1.2px"
    }
  }
});

function HomeFeatures(props) {
  const { classes } = props;
  return (
    <div>
      <section className={classes.sectionBg}>
        <Fade top>
          <Typography variant="h3" color="primary" className={classes.tuitionText}>
            Tuitions
          </Typography>
        </Fade>

        <Grid container className={classes.grid} spacing={5}>
          <Grid item md={3} sm={5} xs={12} className={classes.card}>
            <Fade>
              <Paper elevation={4}>
                <img loading="lazy" src="https://res.cloudinary.com/rweb1/image/upload/v1600243282/Assets/images/hometuition_xxjfdl.svg" className={classes.homeTuition} alt="Home Tuition" />
                <Typography variant="h6" color="primary" className={classes.fHeading}>
                  1-on-1 Home Tuition across Mumbai
                </Typography>
                <Link to="/tuitions/one-on-one-home-tuitions" style={{ textDecoration: "none" }}>
                  <Typography variant="body1" color="primary" className={classes.readMore}>
                    READ MORE -
                  </Typography>
                </Link>
              </Paper>
            </Fade>
          </Grid>

          <Grid item md={3} sm={5} xs={12} className={classes.card}>
            <Fade>
              <Paper elevation={4}>
                <img loading="lazy" className={classes.oneToOne} src="https://res.cloudinary.com/rweb1/image/upload/v1600243286/Assets/images/online1to1_mlyjk1.svg" alt="Online one to one Tuition" />
                <Typography variant="h6" color="primary" className={classes.fHeading}>
                  1-on-1 Live Online Tuition anywhere
                </Typography>
                <Link to="/tuitions/one-on-one-online-tuitions" style={{ textDecoration: "none" }}>
                  <Typography variant="body1" color="primary" className={classes.readMore}>
                    READ MORE -
                  </Typography>
                </Link>
              </Paper>
            </Fade>
          </Grid>

          <Grid item md={3} sm={5} xs={12} className={classes.card}>
            <Fade>
              <Paper elevation={4}>
                <img
                  loading="lazy"
                  src="https://res.cloudinary.com/rweb1/image/upload/v1600243284/Assets/images/masteringChapters_xbfyjq.svg"
                  className={classes.onlineGroup}
                  alt="Mastering a week topic"
                />
                <Typography variant="h6" color="primary" className={classes.fHeading}>
                  Mastering a Weak Topic as per need
                  {/* Group live online tuitions anywhere */}
                </Typography>
                <Link to="/tuitions/mastering-a-week-topic" style={{ textDecoration: "none" }}>
                  <Typography variant="body1" color="primary" className={classes.readMore}>
                    READ MORE -
                  </Typography>
                </Link>
              </Paper>
            </Fade>
          </Grid>
        </Grid>
      </section>
    </div>
  );
}

export default withStyles(styles)(HomeFeatures);
