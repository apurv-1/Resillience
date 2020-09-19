import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";

//Images
// import calculator from "../../compressed/calculator.svg";
// import magnet from "../../compressed/magnet.svg";
// import lab from "../../compressed/lab.svg";
// import blackboard from "../../compressed/blackboard.svg";

//MUI
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";

const styles = () => ({
  root: {
    flexGrow: 1,
    width: "90%",
    margin: "auto"
  },
  headingCard: {
    height: "68px",
    display: "flex",
    padding: "24px",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  heading: {
    display: "flex",
    flexDirection: "column"
  },
  subjects: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px"
  },
  subjectImages: {
    objectFit: "contain",
    width: "100px",
    height: "100px",
    paddingBottom: "20px"
  },
  subjectName: {
    textAlign: "center"
  }
});

function Tests(props) {
  const { classes } = props;
  return (
    <div style={{ marginTop: "4%" }}>
      <Paper elevation={0} className="MuiPaper-rounded">
        <Card className="outerCard" variant="outlined">
          <CardContent className={classes.headingCard}>
            <Typography variant="h4" color="primary">
              Select a subject
            </Typography>
          </CardContent>

          <Divider light />

          <CardContent>
            <Grid container className={classes.root} spacing={2}>
              <Grid className="subjectGrid" item xs={6} sm={3}>
                <Paper className={classes.subjects} elevation={2}>
                  <img src="https://res.cloudinary.com/rweb1/image/upload/v1600243278/Assets/images/calculator_bx1b29.svg" className={classes.subjectImages} alt="Mathematics" />
                  <Typography variant="body2" className={classes.subjectName}>
                    Mathematics
                  </Typography>
                </Paper>
              </Grid>

              <Grid className="subjectGrid" item xs={6} sm={3}>
                <Paper className={classes.subjects} elevation={2}>
                  <img src="https://res.cloudinary.com/rweb1/image/upload/v1600243284/Assets/images/magnet_sn2lhb.svg" className={classes.subjectImages} alt="Physics" />
                  <Typography variant="body2" className={classes.subjectName}>
                    Physics
                  </Typography>
                </Paper>
              </Grid>

              <Grid className="subjectGrid" item xs={6} sm={3}>
                <Paper className={classes.subjects} elevation={2}>
                  <img src="https://res.cloudinary.com/rweb1/image/upload/v1600243282/Assets/images/lab_mbzxcr.svg" className={classes.subjectImages} alt="Chemsitry" />
                  <Typography variant="body2" className={classes.subjectName}>
                    Chemistry
                  </Typography>
                </Paper>
              </Grid>

              <Grid className="subjectGrid" item xs={6} sm={3}>
                <Paper className={classes.subjects} elevation={2}>
                  <img src="https://res.cloudinary.com/rweb1/image/upload/v1600243276/Assets/images/blackboard_radrjv.svg" className={classes.subjectImages} alt="Foundation Classes" />
                  <Typography variant="body2" className={classes.subjectName}>
                    Foundation Classes
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        <Typography variant="h5" color="secondary" style={{ textAlign: "center", marginTop: "40px" }}>
          This page is under development{" "}
          <span role="img" aria-label="Tool">
            🔨
          </span>
        </Typography>
        <Typography variant="h5" color="secondary" style={{ textAlign: "center", marginTop: "10px" }}>
          Check it back soon
        </Typography>
      </Paper>
    </div>
  );
}

export default withStyles(styles)(Tests);
