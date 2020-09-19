import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";

//Components
import Email from "./Email";

//MUI Icons
// import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import PhoneIcon from "@material-ui/icons/Phone";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

//Images
// import ContactUsPhone from "../../compressed/phoneContactUs.svg";

const styles = () => ({
  contactSection: {
    padding: "5%",
    fontSize: "22px",
    justifyContent: "space-between",
    "@media only screen and (max-width: 1024px)": {
      fontSize: "20px"
    },
    "@media only screen and (max-width: 770px)": {
      fontSize: "18px",
      marginTop: "15%"
    }
  },
  subSections: {
    display: "flex",
    padding: "2%",
    "@media only screen and (max-width: 770px)": {
      flexDirection: "column !important",
      textAlign: "center"
    }
  },
  landingImage: {
    marginRight: "2%",
    margin: "auto",
    "@media only screen and (max-width: 770px)": {
      marginRight: "auto"
    }
  },
  innerImage: {
    width: "120%",
    "@media only screen and (max-width: 770px)": {
      width: "90%"
    }
  },
  subSectionContent: {
    display: "flex",
    flexDirection: "column",
    textAlign: "left",
    paddingLeft: "8%",
    paddingRight: "3%",
    "@media only screen and (max-width: 770px)": {
      marginTop: "40px",
      marginBottom: "40px",
      paddingLeft: "0%",
      paddingRight: "0%"
    }
  },
  withIconSection: {
    display: "flex",
    marginBottom: "4%"
  },
  withIconContent: {
    marginLeft: "4%",
    display: "flex",
    flexDirection: "column"
  },
  textBold: {
    letterSpacing: "0.02px",
    lineHeight: "1.5",
    fontWeight: "bold"
  },
  text: {
    lineHeight: "1.2",
    opacity: "0.8"
  },

  clickableIcon: {
    fontSize: "62px",
    color: "#0F7DC2",
    opacity: "0.8",
    "&:hover": {
      color: "#D3D3D3"
    },
    cursor: "pointer",
    "@media only screen and (max-width: 770px)": {
      fontSize: "40px"
    }
  },
  email: {
    textAlign: "left"
  },
  areaMap: {
    width: "90vw",
    height: "400px",
    "@media only screen and (max-width: 770px)": {
      marginTop: "40px"
    }
  }
});

function ContactUs(props) {
  const { classes } = props;
  return (
    <div className={classes.contactSection}>
      <div className={classes.subSections}>
        {/* <img src={ContactUsLandingImage} className={classes.landingImage}></img> */}
        <div className={classes.landingImage}>
          <img alt="ContactUs" src="https://res.cloudinary.com/rweb1/image/upload/v1600243270/Assets/images/phoneContactUs_h56bal.svg" className={classes.innerImage}></img>
        </div>
        <div className={classes.subSectionContent}>
          <Typography variant="h3" style={{ textAlign: "center", marginBottom: "5%" }} color="primary">
            Contact Us
          </Typography>

          <div className={classes.withIconSection}>
            <LocationOnIcon className={classes.clickableIcon} onClick={() => window.open("https://www.google.com/maps/dir//19.1078249,73.0000123/@19.107825,73.000012,16z?hl=en", "_blank")} />
            <div className={classes.withIconContent}>
              <Typography variant="inherit" className={classes.textBold}>
                Registered Address
              </Typography>
              <Typography variant="inherit" className={classes.text} style={{ marginBottom: "2%" }}>
                Plot no B81, Anand Nagar MIDC, Additional Ambernath. , Ambernath, Dist : Thane – 421506
              </Typography>
              <Typography variant="inherit" className={classes.textBold}>
                Correspondence Address
              </Typography>
              <Typography variant="inherit" className={classes.text}>
                Twins Hallmark, Sector 19A, Kopar Khairane, Navi Mumbai, Maharashtra 400709
              </Typography>
            </div>
          </div>

          <div className={classes.withIconSection}>
            <a href="tel:9304228132">
              <PhoneIcon className={classes.clickableIcon} />
            </a>
            <div className={classes.withIconContent}>
              <Typography variant="inherit" className={classes.textBold}>
                Business Phone
              </Typography>
              <Typography variant="inherit" className={classes.text}>
                +91 93042 28132
              </Typography>
            </div>
          </div>

          <div className={classes.withIconSection}>
            <MailOutlineIcon className={classes.clickableIcon} />
            <div className={classes.withIconContent}>
              <Typography variant="inherit" className={classes.textBold}>
                Business Email
              </Typography>
              <Typography variant="inherit" className={classes.text}>
                resillience.in@gmail.com
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <Email />

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.996033161349!2d72.99782361437727!3d19.107829955937806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c1bb77d10f5b%3A0x44110fc0df9a690f!2sRESILLIENCE%20%7CIIT%20JEE%20-%20NEET%20-%20Foundation(8th%2C%209th%20%2610th)%20%7C%20Online%2FHome%20Tuition%20by%20IITians!5e0!3m2!1sen!2sin!4v1598373962132!5m2!1sen!2sin"
        className={classes.areaMap}
        frameBorder="0"
        title="Registration Form for teachers"
        // style="border:0;"
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
      />
    </div>
  );
}

export default withStyles(styles)(ContactUs);
