import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
// import Paper from "@material-ui/core/Paper";
// import Button from '@material-ui/core/Button';
// import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
// import TextField from '@material-ui/core/TextField';
// import SaveIcon from '@material-ui/icons/Save';
// import CloudUploadIcon from '@material-ui/icons/CloudUpload';

import CreateTest from './CreateTest';

const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
    flexWrap: "wrap",
    margin: "5%",
    marginTop: "5%",
    marginBottom: "-10%",
    "& > *": {
      margin: "2%",
      width: "100%",
      height: "80%"
    }
  },
//   textField:{
//     height: "10px" ,
//     marginTop:"-20%",
//     textAlign: "left",
//   },
  paper: {
    marginLeft: "2%",
    textAlign: "center",
    color: theme.palette.text.secondary
  },
//   textbox: {
//     marginLeft: "26%",
//     marginTop: "5%"
//   },
//   upload: {
//     margin:"1%",
//     '& > *': {
//       margin: "1%",
//       height:"10px"
//     },
//   },
//   input: {
//     display: 'none',
//   },
//   button: {
//     marginTop: "2%",
//     margin:"auto",
//     height: "50%",
//     width: "15%"
//   },
//   formControl: {
//     minWidth: "15%",
//     height: "50%",
//     width: "15%"
//   },
}));


export default function ShowTest() {
  const classes = useStyles();
//   const [openSubject, setOpenSubject] = useState(false);
//   const [openCorrect, setOpenCorrect] = useState(false);
//   const [subject, setSubject] = useState('');
//   const [correct, setCorrect] = useState('');
//   const [testId, setTestID] = useState('');
//   const [questionImg, setQuestionImg] = useState('');
//   const [questionUrl, setQuestionUrl] = useState('');
  // const [noofques, setNoOfQues] = useState('10');

  return (
    <div className={classes.card}>
      {/* <Paper elevation={5}>
            
      </Paper> */}
      <CreateTest />
    </div>
  );
}
