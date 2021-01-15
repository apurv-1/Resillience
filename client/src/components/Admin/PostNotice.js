import React, { useState } from "react";
import { makeStyles, TextField, Button, Typography } from "@material-ui/core";

import SaveIcon from "@material-ui/icons/Save";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const useStyles = makeStyles(() => ({
  root: {
    padding: "5%",
    paddingBottom: "0%"
  },
  heading: {
    textAlign: "center"
  },
  textField: {
    margin: "1%"
  },
  button: {
    margin: "1%"
  }
}));

const PostNotice = () => {
  const classes = useStyles();
  toast.configure();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");

  const handlePostNotice = () => {
    if (!title || !description || !link) {
      toast.error("Please fill all the fields..", {
        position: "bottom-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false
      });
    } else {
      fetch("/api/post-notice", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("admin_jwt")
        },
        body: JSON.stringify({
          title,
          description,
          link
        })
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            toast.error(data.error, {
              position: "bottom-right",
              autoClose: 4000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: false
            });
          } else {
            toast.success(data.message, {
              position: "bottom-right",
              autoClose: 20000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: false
            });

            setTitle("");
            setDescription("");
            setLink("");
          }
        })
        .catch((err) => {
          console.log(err);
          toast.error(err, {
            position: "bottom-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false
          });
        });
    }
  };

  return (
    <div className={classes.root}>
      <Typography variant="h2" color="primary" className={classes.heading}>
        Post a Notice
        <span role="img" aria-label="star">
          👨🏽‍🏫
        </span>
      </Typography>
      <TextField
        id="outlined-basic"
        name="heading"
        label="Notice Title"
        variant="outlined"
        color="secondary"
        className={classes.textField}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        autoComplete="off"
        fullWidth
      />
      <TextField
        id="outlined-basic"
        name="description"
        label="Short 10-15 words description"
        variant="outlined"
        color="secondary"
        className={classes.textField}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        autoComplete="off"
        fullWidth
      />
      <TextField
        id="outlined-basic"
        name="link"
        label="Paste link here"
        variant="outlined"
        color="secondary"
        className={classes.textField}
        value={link}
        onChange={(e) => setLink(e.target.value)}
        autoComplete="off"
        fullWidth
      />
      <Button type="submit" variant="contained" color="secondary" className={classes.button} onClick={handlePostNotice} startIcon={<SaveIcon />} size="large" fullWidth>
        Submit Notice
      </Button>
    </div>
  );
};

export default PostNotice;
