import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Button from "@material-ui/core/Button";
import Alert from "@material-ui/lab/Alert";

const styles = () => ({
  email: {
    marginTop: "5%",
    marginBottom: "5%",
    "@media only screen and (max-width: 770px)": {
      marginTop: "10%",
      marginBottom: "10%"
    }
  },
  formButtons: {
    display: "flex",
    justifyContent: "space-between",
    width: "60%",
    marginTop: "3%",
    "@media only screen and (max-width: 1024px)": {
      width: "100%"
    }
  },
  autoSize: {
    marginTop: "2%",
    marginBottom: "1%",
    width: "98%",
    fontSize: "20px",
    fontFamily: "muli",
    paddingTop: "2%",
    padding: "1%"
  },
  alert: {
    width: "100%",
    height: "10%",
    "& > * + *": {
      margin: "5%"
    }
  }
});

function Email(props) {
  const { classes } = props;
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [text, setText] = useState("");

  const SendMessage = () => {
    if (name === "") {
      return (
        <div className={classes.alert}>
          <Alert variant="outlined" severity="error">
            Please add a name
          </Alert>
        </div>
      );
    }
    if (email === "") {
      return (
        <div className={classes.alert}>
          <Alert variant="outlined" severity="error">
            Please add a email
          </Alert>
        </div>
      );
    }
    if (phone === "") {
      return (
        <div className={classes.alert}>
          <Alert variant="outlined" severity="error">
            Please add a phone number
          </Alert>
        </div>
      );
    }
    if (text === "") {
      return (
        <div className={classes.alert}>
          <Alert variant="outlined" severity="error">
            Message cannot be empty!
          </Alert>
        </div>
      );
    }

    fetch("/send-message", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        text
      })
    })
      .then((res) => res.json())
      .then((message) => {
        console.log(message);
        if (message.error) {
          console.log(message.error);
        } else {
          console.log(message.message);
          history.push("/");
        }
      });
  };
  return (
    <div className={classes.text}>
      <Typography variant="h4" style={{ marginBottom: "1%" }} color="secondary">
        Send Us Message
      </Typography>
      <Typography variant="inherit" className={classes.text} color="primary" style={{ marginTop: "10px" }}>
        We are here to help and answer any question you might have. We look forward hearing from you.
      </Typography>
      <form className={classes.form} noValidate>
        <div className={classes.formButtons}>
          <TextField id="outlined-basic" placeholder="Your Name" variant="outlined" color="secondary" value={name} onChange={(e) => setName(e.target.value)} />
          <TextField id="outlined-basic" placeholder="Your Email" variant="outlined" autoComplete="none" color="secondary" value={email} onChange={(e) => setEmail(e.target.value)} />
          <TextField id="outlined-basic" placeholder="Phone" variant="outlined" autoComplete="none" color="secondary" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>
        <TextareaAutosize aria-label="minimum height" rows={10} placeholder="Write your Message ..." className={classes.autoSize} value={text} onChange={(e) => setText(e.target.value)} />
        <Button variant="outlined" color="secondary" size="large" onClick={() => SendMessage()}>
          Submit
        </Button>
      </form>
    </div>
  );
}

export default withStyles(styles)(Email);
