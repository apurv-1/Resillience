import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
    flexWrap: "wrap",
    margin: "5%",
    marginTop: "5%",
    marginBottom: "-10%",
    // marginLeft:"15%",
    "& > *": {
      margin: "2%",
      width: "100%",
      height: "80%"
    }
  },
  pic: {
    display: "flex",
    marginLeft: "18%",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(14),
      height: theme.spacing(15)
    }
  },
  paper: {
    marginLeft: "2%",
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  textbox: {
    marginLeft: "26%",
    marginTop: "5%"
  },
  upload: {
    margin:"1%",
    '& > *': {
      margin: "1%",
    },
  },
  input: {
    display: 'none',
  },
  button: {
    display: 'block',
    
  },
  formControl: {
    minWidth: "15%",
    marginTop: "-1%"
  },
}));


export default function CreateTest() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [subject, setSubject] = useState('');

  const handleChange = (event) => {
    setSubject(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div className={classes.card}>
      <Paper elevation={5}>
            <div className={classes.upload}>
                <FormControl className={classes.formControl}>
                    <InputLabel>Subject</InputLabel>
                    <Select
                        labelId="controlled-open-select-label"
                        open={open}
                        onClose={handleClose}
                        onOpen={handleOpen}
                        value={subject}
                        onChange={handleChange}
                    >
                        <MenuItem value={"Physics"}>Physics</MenuItem>
                        <MenuItem value={"Chemistry"}>Chemistry</MenuItem>
                        <MenuItem value={"Maths"}>Maths</MenuItem>
                        <MenuItem value={"Biology"}>Bio</MenuItem>
                    </Select>
                </FormControl>
                <input
                    accept="image/*"
                    className={classes.input}
                    id="contained-button-file"
                    multiple
                    type="file"
                />
                <label htmlFor="contained-button-file">
                    <Button variant="contained" color="primary" component="span">
                        Upload Question no. 1
                    </Button>
                </label>
            </div>
      </Paper>
    </div>
  );
}
