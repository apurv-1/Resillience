import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
// import Typography from "@material-ui/core/Typography";
import TuitionDropdown from "./TuitionDropdown";

import { NavLink } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";

//Components
import SignIn from "./SignIn";

const styles = () => ({
  hamburgerMenu: {
    "@media only screen and (min-width: 950px)": {
      display: "none"
    }
  },
  smallNavbar: {
    display: "flex",
    justifyContent: "space-between",
    marginRight: "20%",
    alignItems: "center",
    "@media only screen and (max-width: 950px)": {
      marginRight: "2%"
    }
  },
  resillience: {
    textTransform: "capitalize",
    cursor: "pointer",
    fontFamily: "rubik",
    fontSize: "26px",
    "@media only screen and (max-width: 950px)": {
      paddingLeft: "5%",
      marginTop: "8.5px",
      marginBottom: "8.5px"
    }
  },
  navbar: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#ececec",
    height: "55px",
    letterSpacing: "1.2px",
    textTransform: "uppercase",
    alignItems: "center",
    paddingLeft: "5%",
    paddingRight: "5%",
    color: "#3672c0",
    "@media only screen and (max-width: 950px)": {
      flexDirection: "column",
      paddingLeft: "0",
      textTransform: "capitalize",
      alignItems: "initial",
      height: "auto"
    }
  },
  navLinks: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    "@media only screen and (max-width: 950px)": {
      flexDirection: "column",
      justifyContent: "start",
      height: "auto",
      backgroundColor: "#ececec",
      alignItems: "start",
      padding: "10px 20px 16px",
      fontSize: "18px",
      boxShadow: "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)"
    }
  },
  vanish: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    "@media only screen and (max-width: 950px)": {
      display: "none"
    }
  },
  navIcons: {
    color: "#3672c0",
    textDecoration: "none",
    fontWeight: "bolder",
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    "&:hover": {
      color: "#232127"
    },
    "@media only screen and (max-width: 1050px)": {
      fontSize: "90%"
    },
    "@media only screen and (max-width: 950px)": {
      color: "#232127",
      fontFamily: "muli",
      fontWeight: "normal",
      padding: "11px 0px"
    }
  }
});

class Navbar extends React.Component {
  state = {
    open: false
  };
  handleChange = () => {
    this.setState({ open: !this.state.open });
  };

  handleClickAway = () => {
    this.setState({ open: false });
  };
  render() {
    const { classes } = this.props;
    return (
      <ClickAwayListener onClickAway={this.handleClickAway}>
        <AppBar className={classes.navbar}>
          <div className={classes.smallNavbar}>
            <h1 className={classes.resillience} onClick={() => (window.location.href = "/")}>
              RESILLIENCE
            </h1>
            {this.state.open === true ? <CloseIcon onClick={this.handleChange} className={classes.hamburgerMenu} /> : <MenuIcon onClick={this.handleChange} className={classes.hamburgerMenu} />}
          </div>

          <div className={this.state.open === true ? classes.navLinks : classes.vanish}>
            {[
              { route: "/", name: "Home" },
              { route: "/aboutus", name: "About Us" }
            ].map((eachNav, index) => (
              <NavLink key={index} exact className={classes.navIcons} activeClassName="active" to={eachNav.route} onClick={this.handleChange}>
                {eachNav.name}
              </NavLink>
            ))}
            {/* <Typography variant="inherit" className={classes.navIcons}>
            Tuitions
          </Typography> */}
            <TuitionDropdown />
            {/* TODO: Have to change here */}
            <NavLink exact className={classes.navIcons} activeClassName="active" to="/test" onClick={this.handleChange}>
              Test
            </NavLink>
            <NavLink exact className={classes.navIcons} activeClassName="active" to="/faqs" onClick={this.handleChange}>
              FAQ'S
            </NavLink>
            <SignIn />
          </div>
        </AppBar>
      </ClickAwayListener>
    );
  }
}

export default withStyles(styles)(Navbar);
