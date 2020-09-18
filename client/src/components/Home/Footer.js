import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
// import DesignFooterrr from "../../compressed/design-footerrr1.svg";
import PhoneIcon from "@material-ui/icons/Phone";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";

//MUI Icons
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const styles = () => ({
  footerSection: {
    backgroundColor: "#0C659D",
    marginTop: "10%",
    height: "80%",
    boxSizing: "border-box",
    position: "relative",
    color: "white"
  },
  designImage: {
    width: "100%",
    position: "absolute"
    // zIndex: "-1",
  },
  socialIcons: {
    color: "white",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: "50%"
  },
  clickableIcon: {
    color: "#cccccc",
    "&:hover": {
      color: "white"
    },
    cursor: "pointer"
  },
  clickableIconCall: {
    color: "white",
    backgroundColor: "#0F7DC2",
    paddingBottom: "2%",
    borderRadius: "15px 1px 1px 15px",
    paddingLeft: "20px",
    paddingRight: "20%"
  },
  buttonPhone: {
    top: "70px",
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    paddingLeft: "5px",
    right: "11px",
    "@media only screen and (min-width: 770px)": {
      display: "none"
    }
  },
  companyInfo: {
    display: "flex",
    justifyContent: "space-between",
    padding: "12% 2.9% 1.5% 2.9%"
  },
  articles: {
    display: "flex",
    flexDirection: "column"
  },
  copyright: {
    color: "#cccccc",
    textAlign: "center",
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "0px",
    marginTop: "0px",
    padding: "0.5% 3.5% 0.5% 3.5%",
    "@media only screen and (max-width: 770px)": {
      paddingTop: "4.5%",
      paddingBottom: "4.5%",
      flexDirection: "column"
    }
  },
  footerInfo: {
    display: "flex",
    "@media only screen and (max-width: 770px)": {
      margin: "auto",
      lineHeight: 0
    }
  }
});
function Footer(props) {
  const { classes } = props;
  return (
    <div className={classes.footerSection}>
      <img src="https://res.cloudinary.com/rweb1/image/upload/v1600243280/Assets/images/design-footerrr1_wlvv2d.svg" className={classes.designImage} alt="Design Footer" />
      <div>
        <div className={classes.buttonPhone}>
          <WhatsAppIcon
            className={classes.clickableIconCall}
            fontSize="large"
            onClick={() => window.open("https://wa.me/919321725155?text=Hi,%20I'm%20interested%20to%20know%20more%20about%20RESILLIENCE%20and%20book%20a%20Mentoring%20Session", "_blank")}
          />
          <a href="tel:+919304228132">
            <PhoneIcon color="secondary" fontSize="large" className={classes.clickableIconCall} style={{ marginTop: "10%" }} />
          </a>
        </div>
        <Grid container spacing={3} className={classes.companyInfo} style={{ width: "100%", margin: "0" }}>
          <Grid item md={3} sm={6} xs={12} className={classes.articles}>
            <Typography variant="h5" onClick={() => (window.location.href = "/")} style={{ cursor: "pointer" }}>
              RESILLIENCE
            </Typography>
            <br></br>
          </Grid>
          <Grid item md={3} sm={6} xs={12} className={classes.articles}>
            <Typography variant="h5">Quick Links</Typography>
            {[
              {
                to: "/blogs",
                text: "Blogs"
              },
              {
                to: "/contact-us",
                text: "Contact Us"
              },
              {
                to: "/career",
                text: "Career"
              },
              {
                to: "/aboutus/#ourstory",
                text: "Our Story"
              },
              {
                to: "/downloadsection",
                text: "Download Section"
              }
            ].map((eachElement, index) => (
              <Link style={{ marginTop: "16px", color: "#cccccc", textDecoration: "none" }} key={index} to={eachElement.to} className={classes.clickableIcon}>
                {eachElement.text}
              </Link>
            ))}
          </Grid>
          <Grid item md={3} sm={6} xs={12} className={classes.address}>
            <Typography variant="h5">Correspondence Address</Typography>
            <p style={{ color: "#cccccc" }}>Twins Hallmark, Sector 19A, Kopar Khairane, Navi Mumbai, Maharashtra 400709</p>
            <Typography variant="h5">Registered Address</Typography>
            <p style={{ color: "#cccccc" }}>Plot no B81, Anand Nagar MIDC, Additional Ambernath. , Ambernath, Dist : Thane – 421506</p>
          </Grid>
          <Grid item md={3} sm={6} xs={12}>
            <Typography variant="h5">#Being RESILLIENT</Typography>
            <br></br>
            <Typography variant="h5" style={{ marginTop: "8px", marginBottom: "8px" }}>
              Follow Us
            </Typography>
            {/* <br></br> */}
            <div className={classes.socialIcons}>
              <FacebookIcon className={classes.clickableIcon} onClick={() => window.open("https://www.facebook.com/resillience.in", "_blank")} />
              <TwitterIcon className={classes.clickableIcon} onClick={() => window.open("https://twitter.com/resillience_in", "_blank")} />
              <InstagramIcon className={classes.clickableIcon} onClick={() => window.open("https://www.instagram.com/resillience.in/", "_blank")} />
              <YouTubeIcon className={classes.clickableIcon} onClick={() => window.open("https://www.youtube.com/channel/UCLAs5bDSPA6e3EyWZ8bZsyg", "_blank")} />
              <LinkedInIcon className={classes.clickableIcon} onClick={() => window.open("https://www.linkedin.com/company/resillience/", "_blank")} />
            </div>
            {/* <br></br> */}
            <Typography variant="h5" style={{ marginTop: "24px" }}>
              Support Mail
            </Typography>
            <p style={{ marginBottom: "0px", marginTop: "8px", color: "#cccccc" }}>resillience.in@gmail.com</p>
            <p style={{ marginBottom: "0px", color: "#cccccc" }}>+91 93042 28132</p>
          </Grid>
        </Grid>
        <Divider variant="middle" />
        <div className={classes.copyright}>
          <span className={classes.footerInfo}>
            <p className={classes.clickableIcon} onClick={() => (window.location.href = "/sitemap")}>
              Sitemap |
            </p>
            <p className={classes.clickableIcon} onClick={() => (window.location.href = "/privacypolicy")}>
              &nbsp; Privacy Policy |
            </p>
            <p className={classes.clickableIcon} onClick={() => (window.location.href = "/termsofservice")}>
              {" "}
              &nbsp; Terms of service
            </p>
          </span>
          <p>Resillience &copy; Copyright 2020.All rights reserved</p>
        </div>
      </div>
    </div>
  );
}

export default withStyles(styles)(Footer);
