import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
// import Button from '@material-ui/core/Button';
// import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
// import TextField from '@material-ui/core/TextField';
// import SaveIcon from '@material-ui/icons/Save';
// import CloudUploadIcon from '@material-ui/icons/CloudUpload';

import AddQuestion from './addQuestions';

const useStyles = makeStyles(() => ({
  root:{
    background:"#88888"
  },
  showquestion:{
    marginTop:"11%",
    marginLeft:"5%",
    marginRight:"5%",
    marginBottom:"-3%"
  },
  paper:{
    padding:"2%"
  }
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
    <div className={classes.root}>
      <div className={classes.addquestion}>
        <AddQuestion />  
      </div>
      <div className={classes.showquestion}>
        <Paper elevation={5} className={classes.paper}>
          <div>
            <h1>here test will be shown</h1> 
            <hr style={{height:"2px", backgroundColor:"#000000"}} />
          </div>
        </Paper>
      </div>
    </div>
  );
}
