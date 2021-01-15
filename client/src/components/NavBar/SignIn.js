import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import TextField from "@material-ui/core/TextField";
// import loginBg from "../../images/loginBg.svg";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";

import UserContext from "../Context/UserContext";
import { SET_STUDENT, SET_USER_TYPE } from "../Reducers/types";
import SideDrawer from "../Student/SideDrawer";
import AdminSideDrawer from "../Admin/AdminSideDrawer";

const styles = () => ({
  paper: {
    backgroundColor: "transparent"
  },
  login: {
    display: "flex",
    top: "30%",
    flexDirection: "column",
    padding: "0% 8%",
    textAlign: "center",
    position: "absolute"
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
  signIn: {
    marginBottom: "5%"
  },
  forgotHeading: {
    marginBottom: "2%",
    "@media only screen and (max-width: 430px)": {
      margin: "5%"
    }
  },
  forgotPassword: {
    padding: "5% 5%",
    position: "absolute",
    marginTop: "30%",
    justifyContent: "center",
    textAlign: "center"
  },
  forgot: {
    margin: "2%",
    "@media only screen and (max-width: 430px)": {
      margin: "-10px"
    }
  },
  textField: {
    marginTop: "2%",
    marginBottom: "4%",
    fontFamily: "muli"
  },
  customError: {
    color: "red",
    marginBottom: "10px",
    position: "fixed",
    "@media only screen and (max-width: 430px)": {
      marginTop: "30px",
      marginLeft: "10px",
      fontSize: "13px"
    }
  },
  button: {
    marginBottom: "5%"
  }
});

function SignIn(props) {
  const history = useHistory();
  const { userState, userDispatch } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(false);
  const [errors, setErrors] = useState({});
  const [forgot, setForgot] = useState(false);

  const handleSubmit = () => {
    if (email === "") {
      return setErrors({ email: "Invalid Email!" });
    }
    if (password === "") {
      return setErrors({ password: "Invalid Password" });
    } else {
      fetch("/api/student-signin", {
        method: "post",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email,
          password
        })
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            const err = data.error;
            setErrors({ err });
          } else {
            localStorage.setItem("student_jwt", data.token);
            userDispatch({ type: SET_STUDENT, payload: data.student });
            userDispatch({ type: SET_USER_TYPE, userType: "student" });
            setOpen(false);
            history.push("/student-dashboard");
            setEmail("");
            setPassword("");
          }
        })
        .catch((err) => {
          setErrors({ err });
        });
    }
  };

  const handleForgotPassword = () => {
    if (email === "") {
      return setErrors({ email: "Invalid Email!" });
    } else {
      fetch("/api/reset-student-password", {
        method: "post",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email
        })
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.error) {
            const err = data.error;
            setErrors({ err });
          } else {
            setEmail("");
            setOpen(false);
          }
        })
        .catch((err) => {
          // console.log(err);
          setErrors({ err });
        });
    }
  };

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  // console.log(student);
  const { classes } = props;
  return (
    <div style={{ fontStyle: "23px" }}>
      {userState.userType === "student" ? (
        <SideDrawer />
      ) : userState.userType === "admin" ? (
        <AdminSideDrawer />
      ) : (
        <Button variant="contained" color="secondary" onClick={handleClickOpen}>
          Sign In
        </Button>
      )}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="md"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        classes={{
          paper: classes.paper
        }}
      >
        <img loading="lazy" alt="loginBg" src="https://res.cloudinary.com/rweb1/image/upload/v1600243283/Assets/images/loginBg_olbayb.svg" className={classes.loginBg} />
        {!forgot ? (
          <div className={classes.login}>
            <Typography variant="h4" color="primary" className={classes.signIn}>
              Student Log in
            </Typography>
            <Typography variant="inherit" color="primary" className={classes.signIn}>
              (Only enrolled students can login, kindly contact the administrator)
            </Typography>
            {/* <form noValidate> */}
            <TextField
              id="email"
              name="email"
              type="email"
              label="Email"
              variant="outlined"
              color="secondary"
              helperText={!email} //error was defined in the backend
              error={errors.email ? true : false}
              className={classes.textField}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              fullWidth
            />
            {errors.email && (
              <Typography variant="body2" className={classes.customError}>
                {errors.email}
              </Typography>
            )}
            {errors.err && (
              <Typography variant="body2" className={classes.customError}>
                {errors.err}
              </Typography>
            )}
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              // className={classes.button}
              size="large"
              fullWidth
              onClick={() => handleSubmit()}
            >
              Login
            </Button>
            <br />
            <br />
            <Typography variant="inherit" color="primary" className={classes.forgot}>
              Forgot{" "}
              <span style={{ color: "#0F7DC2", cursor: "pointer" }} onClick={() => setForgot(true)}>
                Password?
              </span>
            </Typography>
          </div>
        ) : (
          <div className={classes.forgotPassword}>
            <Typography variant="h4" color="primary" className={classes.forgotHeading}>
              Forgot Password?
            </Typography>
            <TextField
              id="email"
              name="email"
              type="email"
              label="Email"
              variant="outlined"
              color="secondary"
              helperText={!email} //error was defined in the backend
              error={errors.email ? true : false}
              className={classes.textField}
              style={{ marginTop: "10%" }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="off"
              fullWidth
            />
            {errors.email && (
              <Typography variant="body2" className={classes.customError}>
                {errors.email}
              </Typography>
            )}
            {errors.err && (
              <Typography variant="body2" className={classes.customError}>
                {errors.err}
              </Typography>
            )}
            <Button type="submit" variant="contained" color="secondary" className={classes.button} size="large" fullWidth onClick={() => handleForgotPassword()}>
              Forgot Password
            </Button>
            <Typography variant="inherit" color="primary">
              Click here to go{" "}
              <span style={{ color: "#0F7DC2", cursor: "pointer" }} onClick={() => setForgot(false)}>
                back.
              </span>
            </Typography>
          </div>
        )}
      </Dialog>
    </div>
  );
}

export default withStyles(styles)(SignIn);
