import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import TextField from "@material-ui/core/TextField";
// import loginBg from "../../compressed/loginBg.svg";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";

import axios from "axios";

const styles = () => ({
  paper: {
    backgroundColor: "transparent"
    // maxWidth: "753px"
  },
  loginBg: {
    visibility: "initial",
    width: "580px",
    "@media only screen and (max-width: 770px)": {
      width: "410px",
      height: "500px"
    },
    "@media only screen and (max-width: 430px)": {
      width: "100%",
      height: "500px"
    }
  },
  login: {
    display: "flex",
    top: "30%",
    flexDirection: "column",
    padding: "0% 5%",
    textAlign: "center",
    position: "absolute",
    justifyContent: "center"
  },
  signIn: {
    marginBottom: "5%"
  },
  textField: {
    marginTop: "2%",
    marginBottom: "4%",
    fontFamily: "muli"
  },
  customError: {
    color: "red",
    marginBottom: "2%"
  }
});

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // name: "",
      email: "",
      password: "",
      open: false,
      errors: {},
      message: "",
      token: ""
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const userData = {
      // name: this.state.name,
      email: this.state.email,
      password: this.state.password
    };
    console.log(userData);
    axios
      .post("student/signin", userData)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        // res.data: {token: "eyJhbGciOiJI…", message: "User signed in successfully"}
        this.setState({
          email: "",
          password: "",
          open: false,
          message: res.data.message
        });
        const token = res.data.token;
        localStorage.setItem("jwt", token);
        axios.defaults.headers.common["Authorization"] = token;
        // this.props.history.push("/");
        //This just pushes the state and Url , go to it
      })
      .catch((err) => {
        console.log(err);
        this.setState({
          errors: err.response.data
        });
      });
  };

  handleClickOpen = () => {
    this.setState({
      open: true
    });
  };

  handleClose = () => {
    this.setState({
      open: false
    });
  };
  render() {
    const { classes } = this.props;
    const { errors } = this.state;
    return (
      <div style={{ fontStyle: "23px" }}>
        {this.state.message !== "" ? (
          <Button
            variant="contained"
            color="secondary"
            onClick={() => {
              localStorage.clear();
              this.setState({ message: "" });
            }}
          >
            Sign Out
          </Button>
        ) : (
          <Button variant="contained" color="secondary" onClick={this.handleClickOpen}>
            Sign In
          </Button>
        )}

        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          maxWidth="md"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          classes={{
            paper: classes.paper
          }}
        >
          {/* <img src={profile} className={classes}></img>
          <img src={white}></img> */}
          <img alt="loginBg" src="https://res.cloudinary.com/rweb1/image/upload/v1600243283/Assets/images/loginBg_olbayb.svg" className={classes.loginBg} />
          <div className={classes.login}>
            <Typography variant="h4" color="primary" className={classes.signIn}>
              User Log in
            </Typography>
            <Typography variant="inherit" color="primary" className={classes.signIn}>
              (Only enrolled students can login, kindly contact the administrator)
            </Typography>
            <form noValidate onSubmit={this.handleSubmit}>
              <TextField
                id="email"
                name="email"
                type="email"
                label="Email"
                variant="outlined"
                color="secondary"
                helperText={errors.email} //error was defined in the backend
                error={errors.email ? true : false}
                className={classes.textField}
                value={this.state.email}
                onChange={this.handleChange}
                autoComplete="off"
                fullWidth
              />
              <TextField
                id="password"
                name="password"
                type="password"
                label="Password"
                variant="outlined"
                color="secondary"
                helperText={errors.password} //error was defined in the backend
                error={errors.password ? true : false}
                className={classes.textField}
                value={this.state.password}
                onChange={this.handleChange}
                fullWidth
              />
              {errors.error && (
                <Typography variant="body2" className={classes.customError}>
                  {errors.error}
                </Typography>
              )}
              {errors.message && (
                <Typography variant="body2" className={classes.customError}>
                  {errors.message}
                </Typography>
              )}
              <Button type="submit" variant="contained" color="secondary" className={classes.button} size="large" fullWidth>
                Login
              </Button>
              <br />
              <br />
              <Typography variant="inherit" color="primary">
                Forgot <span style={{ color: "#0F7DC2" }}>Password?</span>
              </Typography>
            </form>
          </div>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(SignIn);
