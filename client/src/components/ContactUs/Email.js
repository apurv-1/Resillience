import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Button from "@material-ui/core/Button";

const styles = () => ({
  text: {
    marginTop: "5%",
    marginBottom: "5%"
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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [text, setText] = useState("");

  const SendMessage = () => {
    if (name === "") {
      alert("Please add Name to your Message");
    }
    if (email === "") {
      alert("Please add an Email Address in your Message");
    }
    if (phone === "") {
      alert("Please add a Phone Number in your Message");
    }
    if (text === "") {
      alert("Please add Message");
    }

    fetch("/api/send-message", {
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
        if (message.message === "Team Resillience will contact you soon!") {
          // console.log(message.message);
          alert("Thanks for contacting us, We will reach out to you soon!");
          setName("");
          setEmail("");
          setPhone("");
          setText("");
        }
      });
  };
  return (
    <div className={classes.text}>
      <Fade top>
        <Typography variant="h4" style={{ marginBottom: "1%" }} color="secondary">
          Send Us Message
        </Typography>
      </Fade>
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
