import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import CounsellingImageNew from "../../compressed/counsellingNew.svg";
import CounsellingImageNewPhone from "../../compressed/counsellingNewPhone.svg";
import PhoneInTalkIcon from "@material-ui/icons/PhoneInTalk";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import MessageIcon from "@material-ui/icons/Message";
// import CircularProgress from "@material-ui/core/CircularProgress";
// import Tick from "../../compressed/tick.svg";
// import mentoringStroke from "../../compressed/mentoringStroke.svg";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  counselling: {
    display: "inline",
    "@media only screen and (max-width: 770px)": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "1rem !important",
      marginLeft: "-2%"
    }
  },
  designedText: {
    position: "absolute",
    marginTop: "-25px",
    "@media only screen and (max-width: 900px)": {
      marginTop: "-16px"
    },
    "@media only screen and (max-width: 770px)": {
      position: "initial",
      marginTop: "0px"
    }
  },
  blueImage: {
    width: "340px",
    position: "absolute",
    zIndex: "-1",
    "@media only screen and (max-width: 1100px)": {
      width: "300px"
    },
    "@media only screen and (max-width: 950px)": {
      width: "250px"
    },
    "@media only screen and (max-width: 880px)": {
      width: "225px"
    },
    "@media only screen and (max-width: 770px)": {
      width: "350px",
      position: "initial",
      marginTop: "-10px"
    },
    "@media only screen and (max-width: 320px)": {
      width: "320px"
    }
  },
  paper: {
    backgroundColor: "transparent",
    maxWidth: "753px"
  },
  heading: {
    letterSpacing: "0.5px",
    fontSize: "1.7rem",
    color: "black",
    width: "260px",
    marginLeft: "42px",
    marginTop: "27px",
    cursor: "pointer",
    "@media only screen and (max-width: 1125px)": {
      fontSize: "1.35rem"
    },
    "@media only screen and (max-width: 950px)": {
      fontSize: "1.25rem",
      marginTop: "18px",
      marginLeft: "35px"
    },
    "@media only screen and (max-width: 880px)": {
      fontSize: "1.05rem",
      marginLeft: "28px"
    },
    "@media only screen and (max-width: 770px)": {
      width: "auto",
      marginTop: "-20.5%",
      marginLeft: "0px"
    }
  },
  getFree: {
    marginTop: "0px",
    marginBottom: "0px",
    "@media only screen and (max-width: 670px)": {
      fontSize: "160%",
      marginTop: "0px",
      marginBottom: "initial"
    },
    "@media only screen and (max-width: 470px)": {
      fontSize: "150%"
    },
    "@media only screen and (max-width: 330px)": {
      fontSize: "80%"
    }
  },
  mentroingSession: {
    marginBottom: "20px",
    marginTop: "12px",
    "@media only screen and (max-width: 670px)": {
      fontSize: "160%",
      marginTop: "6px"
    },
    "@media only screen and (max-width: 470px)": {
      marginBottom: "5px",
      fontSize: "150%"
    },
    "@media only screen and (max-width: 330px)": {
      fontSize: "80%"
    }
  },
  section: {
    position: "absolute",
    top: "14%",
    left: "12%",
    right: "40%",
    bottom: "10%",
    textAlign: "center",
    "@media only screen and (max-width: 770px)": {
      top: "20%"
    },
    "@media only screen and (max-width: 670px)": {
      top: "10%",
      fontSize: "8px !important",
      left: "10%"
    },
    "@media only screen and (max-width: 330px)": {
      top: "15%"
    }
  },
  imageWeb: {
    visibility: "initial",
    "@media only screen and (max-width: 670px)": {
      display: "none",
      height: "300px"
    }
  },
  image: {
    visibility: "initial",
    display: "none",
    "@media only screen and (max-width: 670px)": {
      height: "300px",
      display: "initial"
    }
  },

  subSection: {
    position: "relative",
    height: "30px",
    width: "280px",
    marginLeft: "auto",
    marginRight: "auto",
    display: "flex",
    alignItems: "center",
    border: "1px solid",
    borderRadius: "8px",
    "@media only screen and (max-width: 770px)": {
      width: "auto",
      height: "auto"
    }
  },
  icons: {
    marginLeft: "5%"
  },
  inputPhone: {
    paddingLeft: "65px",
    borderTopStyle: "hidden",
    borderRightStyle: "hidden",
    borderLeftStyle: "hidden",
    borderBottomStyle: "hidden",
    "@media only screen and (max-width: 670px)": {
      fontSize: "10px",
      width: "110px",
      paddingLeft: "6%"
    }
  },
  messages: {
    marginLeft: "30px",
    marginTop: "25px",
    "@media only screen and (max-width: 670px)": {
      marginLeft: "0px",
      marginTop: "0px",
      fontSize: "10px",
      paddingTop: "9%",
      width: "160%"
    }
  },
  message: {
    display: "flex",
    alignItems: "center",
    marginBottom: "10px",
    "@media only screen and (max-width: 330px)": {
      fontSize: "80%"
    }
  },
  tickImage: {
    "@media only screen and (max-width: 770px)": {
      width: "13px"
    }
  },
  button: {
    marginTop: "15px",
    "@media only screen and (max-width: 770px)": {
      marginTop: "0px"
    }
  },
  bookAFree: {
    display: "none",
    "@media only screen and (max-width: 770px)": {
      display: "initial"
    }
  },
  circularProgress: {
    marginTop: "40px",
    height: "6rem",
    width: "6rem",
    "@media only screen and (max-width: 770px)": {
      marginTop: "50px",
      height: "4rem",
      width: "4rem"
    }
  }
});

function Counselling() {
  const classes = useStyles();
  const tuition = "Overall Tuitions";
  const [open, setOpen] = useState(false);
  const [parentname, setParent] = useState("");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [status, setStatus] = useState("");
  // const [loading, setLoading] = useState(false);
  // const [valid, setValid] = useState("");

  // const SendOtp = () => {
  //   if (parentname !== "" && phone.length === 10 && /^\d+$/.test(phone) === true) {
  //     setLoading(true);
  //     fetch(`/sendotp?phonenumber=+91${phone}&channel=sms`, {
  //       method: "get"
  //     })
  //       .then((res) => res.json())
  //       .then((message) => {
  //         console.log(message);
  //         setStatus(message.status);
  //         if (message.status === "pending") {
  //           setLoading(false);
  //         }
  //         if (message.error) {
  //           console.log(message.error);
  //         } else {
  //           console.log(message.message);
  //         }
  //       });
  //   }
  // };

  // const VerifyOtp = () => {
  //   fetch(`/verify?phonenumber=+91${phone}&code=${otp}`, {
  //     method: "get"
  //   })
  //     .then((res) => res.json())
  //     .then((message) => {
  //       setValid(message.valid);
  //       // console.log(message.valid);
  //       setStatus(message.status);
  //       if (message.valid === true) {
  //         SendDetails();
  //       }
  //       if (message.error) {
  //         console.log(message.error);
  //       } else {
  //         console.log(message.message);
  //       }
  //     });
  // };

  const SendDetails = () => {
    if (parentname !== "" && phone.length === 10 && /^\d+$/.test(phone) === true) {
      fetch("/api/send-mail", {
        method: "post",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          parentname,
          phone,
          tuition
        })
      })
        .then((res) => res.json())
        .then((message) => {
          // console.log(message);
          setStatus("approved");
          if (message.error) {
            console.log(message.error);
          } else {
            console.log(message.message);
          }
        });
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setOpen(true);
  //   }, 30000);
  //   return () => clearTimeout(timer);
  // }, []);

  //Its important to clean the function
  //Empty brackets so that it is called once only when it mounts

  return (
    <div className={classes.counselling}>
      <span onClick={handleClickOpen} className={classes.designedText}>
        <img loading="lazy" src="https://res.cloudinary.com/rweb1/image/upload/v1600243284/Assets/images/mentoringStroke_doj1ve.svg" alt="Stroke" className={classes.blueImage} />
        <h1 className={classes.heading}>
          <span className={classes.bookAFree}>Book a FREE </span>Mentoring Session
        </h1>
      </span>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="md"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
        classes={{
          paper: classes.paper
        }}
      >
        {/* <img loading="lazy" alt="Counselling" src="https://res.cloudinary.com/rweb1/image/upload/v1600243280/Assets/images/counsellingNew_vrn64m.svg" className={classes.image} /> */}
        <img loading="lazy" alt="Counselling" src={CounsellingImageNew} className={classes.imageWeb} />
        <img loading="lazy" alt="Counselling" src={CounsellingImageNewPhone} className={classes.image} />
        <div className={classes.section}>
          <h2 className={classes.getFree}>Get a Free Demo</h2>
          <h2 className={classes.mentroingSession}>Cum Mentoring Session</h2>
          {/* {loading === true && <CircularProgress color="secondary" className={classes.circularProgress} thickness={2.4} />} */}
          {status === "" /*&& loading === false*/ && (
            <div>
              <div className={classes.subSection}>
                <PersonOutlineIcon color="secondary" className={classes.icons} />
                <input
                  type="text"
                  name="parentname"
                  id="parentname"
                  className={`form-control ${classes.inputPhone}`}
                  placeholder="Parent's Name"
                  autoComplete="off"
                  maxLength="15"
                  required={true}
                  value={parentname}
                  onChange={(e) => setParent(e.target.value)}
                />
              </div>
              <div className={classes.subSection} style={{ marginTop: "10px" }}>
                <PhoneInTalkIcon color="secondary" className={classes.icons} />
                <input
                  type="tel"
                  name="number"
                  id="mobileNumber"
                  className={`form-control ${classes.inputPhone}`}
                  placeholder="Enter Mobile number"
                  autoComplete="off"
                  maxLength="10"
                  required={true}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className={classes.messages}>
                {["Identify strengths & weaknesses", "Recommends a study plan", "One to One home/online tuition", "Mastering a weak topic"].map((message, index) => (
                  <div className={classes.message} key={index}>
                    <img loading="lazy" src="https://res.cloudinary.com/rweb1/image/upload/v1600243272/Assets/images/tick_nz85rm.svg" alt="tick" className={classes.tickImage} />
                    <h4 style={{ margin: "auto", marginLeft: "10px" }}>{message}</h4>
                  </div>
                ))}
              </div>
              <Button variant="contained" color="secondary" disableElevation className={classes.button} size="small" onClick={() => SendDetails()}>
                Proceed
              </Button>
            </div>
          )}

          {status === "pending" && (
            <div>
              <div className={classes.messages} style={{ width: "95%", marginLeft: "0px" }}>
                <div className={classes.message}>
                  <h2 style={{ margin: "auto", marginTop: "20px", color: "#0F7DC2" }}>Login with OTP</h2>
                </div>
                <div className={classes.message}>
                  <h3 style={{ margin: "auto", marginLeft: "10px", color: "gray" }}>We have sent an SMS with OTP to +91-{phone}</h3>
                </div>
              </div>
              <div className={classes.subSection} style={{ marginTop: "15px", marginBottom: "10px" }}>
                <MessageIcon color="secondary" className={classes.icons} />
                <input
                  type="tel"
                  name="otp"
                  id="verifyotp"
                  className={`form-control ${classes.inputPhone}`}
                  placeholder="Enter OTP"
                  autoComplete="off"
                  maxLength="6"
                  required="required"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
              </div>
              {/*valid === false  &&*/ <h4 style={{ margin: "auto", marginLeft: "10px", color: "red", marginBottom: "10px" }}>The OTP entered is incorrect, Try again</h4>}
              <div style={{ display: "flex", margin: "auto", justifyContent: "center" }}>
                <Button
                  type="submit"
                  variant="contained"
                  color="secondary"
                  disableElevation
                  className={classes.button}
                  style={{ marginRight: "10px", height: "10%" }}
                  size="small"
                  // onClick={() => VerifyOtp()}
                >
                  Verify
                </Button>
                {/* {valid === false && (
                  <Button type="submit" variant="contained" color="secondary" disableElevation className={classes.button} style={{ height: "10%" }} size="small" onClick={() => SendOtp()}>
                    Resend OTP
                  </Button>
                )} */}
              </div>
            </div>
          )}

          {status === "approved" && (
            <div style={{ marginTop: "60px" }}>
              <h2 style={{ color: "#0F7DC2" }}>Your request has been successfully submitted.</h2>
              <h3 style={{ color: "gray" }}>Team Resillience will contact you soon!</h3>
            </div>
          )}
        </div>
      </Dialog>
    </div>
  );
}

export default Counselling;
