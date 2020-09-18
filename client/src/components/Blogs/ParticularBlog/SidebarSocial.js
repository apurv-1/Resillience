import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";

//MUI Icons
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const styles = () => ({
  sidebar: {
    padding: "2%",
    height: "auto"
  },
  heading: {
    marginBottom: "3%"
  },
  socialLinks: {
    display: "flex",
    flexDirection: "column"
  },
  eachSocialLink: {
    display: "flex",
    margin: "1%"
  },
  clickableIcon: {
    marginRight: "5%",
    // "&:hover": {
    //   color: "white"
    // },
    cursor: "pointer"
  }
});

class SidebarSocial extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.sidebar}>
        <Typography variant="h5" className={classes.heading}>
          Social
        </Typography>
        <div className={classes.socialLinks}>
          <span className={classes.eachSocialLink}>
            <FacebookIcon className={classes.clickableIcon} color="secondary" onClick={() => window.open("https://www.facebook.com/resillience.in", "_blank")} />
            <Typography gutterBottom color="secondary" className={classes.body}>
              Facebook
            </Typography>
          </span>
          <span className={classes.eachSocialLink}>
            <TwitterIcon className={classes.clickableIcon} color="secondary" onClick={() => window.open("https://twitter.com/resillience_in", "_blank")} />
            <Typography gutterBottom color="secondary" className={classes.body}>
              Twitter
            </Typography>
          </span>
          <span className={classes.eachSocialLink}>
            <InstagramIcon className={classes.clickableIcon} color="secondary" onClick={() => window.open("https://www.instagram.com/resillience.in/", "_blank")} />
            <Typography gutterBottom color="secondary" className={classes.body}>
              Instagram
            </Typography>
          </span>
          <span className={classes.eachSocialLink}>
            <YouTubeIcon className={classes.clickableIcon} color="secondary" onClick={() => window.open("https://www.youtube.com/channel/UCLAs5bDSPA6e3EyWZ8bZsyg", "_blank")} />
            <Typography gutterBottom color="secondary" className={classes.body}>
              Youtube
            </Typography>
          </span>
          <span className={classes.eachSocialLink}>
            <LinkedInIcon className={classes.clickableIcon} color="secondary" onClick={() => window.open("https://www.linkedin.com/company/resillience/", "_blank")} />
            <Typography gutterBottom color="secondary" className={classes.body}>
              LinkedIn
            </Typography>
          </span>
        </div>
      </Paper>
    );
  }
}

export default withStyles(styles)(SidebarSocial);
