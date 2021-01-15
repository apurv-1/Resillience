import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import Confetti from "react-confetti";

const styles = () => ({
  div: {
    paddingLeft: "8%",
    paddingRight: "8%",
    marginTop: "100px",
    "@media only screen and (max-width: 770px)": {
      marginTop: "90px"
    },
    "@media only screen and (max-width: 426px)": {
      marginTop: "80px"
    }
  },
  content: {
    fontSize: "20px",
    marginBottom: "3%"
  },
  eachVision: {
    marginTop: "1.5%",
    display: "flex",
    "@media only screen and (max-width: 770px)": {
      marginTop: "2.5%"
    }
  },
  text: {
    letterSpacing: "0.02px",
    lineHeight: "1.5",
    opacity: "0.8",
    "@media only screen and (max-width: 770px)": {
      fontSize: "90%"
    },
    "@media only screen and (max-width: 426px)": {
      fontSize: "85%"
    },
    "@media only screen and (max-width: 375px)": {
      fontSize: "80%"
    }
  },
  referralSchemeText: {
    textAlign: "center",
    marginBottom: "5%",
    color: "#e63e3e",
    "@media only screen and (max-width: 770px)": {
      fontSize: "170%",
      marginBottom: "10%"
    },
    "@media only screen and (max-width: 426px)": {
      fontSize: "150%",
      marginBottom: "15%"
    },
    "@media only screen and (max-width: 375px)": {
      fontSize: "135%",
      marginBottom: "12%"
    },
    "@media only screen and (max-width: 320px)": {
      fontSize: "120%"
    }
  },
  heding: {
    textAlign: "left",
    marginBottom: "-0.5%",
    "@media only screen and (max-width: 426px)": {
      fontSize: "1.2rem"
    },
    "@media only screen and (max-width: 375px)": {
      fontSize: "1.1rem"
    },
    "@media only screen and (max-width: 320px)": {
      fontSize: "1rem"
    }
  }
});

export class ReferralScheme extends Component {
  state = {
    height: null,
    width: null,
    opacity: 1,
    pieces: 100
  };
  componentDidMount = () => {
    this.setState({
      height: document.documentElement.offsetHeight,
      width: document.documentElement.offsetWidth
    });
    setInterval(() => {
      // this.setState({ opacity: 0 });
      this.setState({ pieces: 0 });
    }, 10000);
  };

  render() {
    const { classes } = this.props;
    console.log(this.state.height);
    console.log(this.state.width);
    return (
      <div className={classes.div}>
        <Confetti numberOfPieces={this.state.pieces} height={this.state.height} width={this.state.width} opacity={this.state.opacity} />
        <Fade top>
          <Typography variant="h3" style={{ textAlign: "center", marginBottom: "2%" }} color="primary">
            Help others <span style={{ color: "#0F7DC2" }}>Being RESILLIENT!</span>
          </Typography>
          <Typography variant="h4" className={classes.referralSchemeText}>
            (New Referral Scheme!)
          </Typography>
        </Fade>
        <Typography variant="h5" className={classes.heading} color="secondary">
          Eligibility:
        </Typography>
        <div className={classes.content}>
          <span className={classes.eachVision}>
            <Fade>
              <span style={{ display: "flex", alignItems: "center" }}>-&nbsp;</span>
              <Typography variant="inherit" className={classes.text} color="primary">
                Any enrolled student is eligible to avail the benefit.
              </Typography>
            </Fade>
          </span>
        </div>
        <Typography variant="h5" className={classes.heading} color="secondary">
          Benefits:
        </Typography>
        <div className={classes.content}>
          <span className={classes.eachVision}>
            <Fade>
              <span style={{ display: "flex", alignItems: "center" }}>-&nbsp;</span>
              <Typography variant="inherit" className={classes.text} color="primary">
                You can avail <span style={{ color: "rgb(255,46,46)", fontWeight: "bolder", fontSize: "105%" }}>Upto 6 FREE Sessions.*</span> It will be directly credited in your current ongoing
                program.
              </Typography>
            </Fade>
          </span>
        </div>
        <Typography variant="h5" className={classes.heading} color="secondary">
          Procedure:
        </Typography>
        <div className={classes.content}>
          <Fade>
            {[
              "You need to share our details with them and when they contact us they should tell us your name.",
              "Or you can also share their details with us,  and  we will contact them telling your name.",
              "After that the admission procedure will continue and you will be intimated once they enroll."
            ].map((vision, index) => (
              <span className={classes.eachVision} key={index}>
                <span style={{ display: "flex", alignItems: "center" }}>-&nbsp;</span>
                <Typography variant="inherit" className={classes.text} color="primary">
                  {vision}
                </Typography>
                <br />
              </span>
            ))}
          </Fade>
        </div>
        <Typography variant="h5" className={classes.heading} color="secondary">
          *Conditions:
        </Typography>
        <div className={classes.content}>
          <Fade>
            <span className={classes.eachVision}>
              <span style={{ display: "flex", alignItems: "center" }}>-&nbsp;</span>
              <Typography variant="inherit" className={classes.text} color="primary">
                They should take our tuition for at least 8 weeks.
              </Typography>
            </span>
            <span className={classes.eachVision}>
              <span style={{ display: "flex", alignItems: "center" }}>-&nbsp;</span>
              <Typography variant="inherit" className={classes.text} color="primary">
                Precisely, <span style={{ color: "rgb(255,46,46)", fontWeight: "800", fontSize: "105%" }}>You will get ‘25% of No. of sessions they take in 2 months’ for free.</span>
              </Typography>
            </span>
            {[
              "All the free sessions you get, will be conducted in the same mode (Online/Home), they enroll for.",
              "And that credit will be delivered to you in 2 months, equally distributed.",
              "You can avail it repeatedly for any number of referrals.",
              "No cash benefits can be availed",
              "The scheme is starting from 25 Oct’2020"
            ].map((vision, index) => (
              <span className={classes.eachVision} key={index}>
                <span style={{ display: "flex", alignItems: "center" }}>-&nbsp;</span>
                <Typography variant="inherit" className={classes.text} color="primary">
                  {vision}
                </Typography>
                <br />
              </span>
            ))}
          </Fade>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(ReferralScheme);
