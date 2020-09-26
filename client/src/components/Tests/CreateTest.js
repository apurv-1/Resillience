import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import SaveIcon from '@material-ui/icons/Save';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

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
  textField:{
    height: "10px" ,
    marginTop:"-20%",
    textAlign: "left",
  },
  paper: {
    marginLeft: "2%",
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
      height:"10px"
    },
  },
  input: {
    display: 'none',
  },
  button: {
    marginTop: "2%",
    margin:"auto",
    height: "50%",
    width: "16%"
  },
  formControl: {
    minWidth: "15%",
    height: "50%",
    width: "15%"
  },
}));


export default function CreateTest() {
  const classes = useStyles();
  const [openSubject, setOpenSubject] = useState(false);
  const [openCorrect, setOpenCorrect] = useState(false);
  const [subject, setSubject] = useState('');
  const [correct, setCorrect] = useState('');
  const [testId, setTestID] = useState('');
  const [questionImg, setQuestionImg] = useState('');
  const [questionUrl, setQuestionUrl] = useState('');
  // const [noofques, setNoOfQues] = useState('10');

  useEffect(()=>{
    if(questionUrl){
      fetch("/add-question",{
        method:"put",
        headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify({
          testId:testId,
          questionImage:questionUrl,
          correctOption:correct,
          questionType:subject
        })
      })
       .then((res) => res.json())
       .then((data) =>{
         if(data.error){
           console.log(data.error)
         }
         else{
          console.log("question saved")
          setCorrect("")
          setSubject("")
          setQuestionImg("")
          setQuestionUrl("")
         }
       })
       .catch((err)=>{
         console.log(err)
       })
    }
  },[questionUrl])

  const addQusetion = ()=>{
    console.log(questionImg)
       const data = new FormData()
       data.append("file",questionImg)
       data.append("upload_preset","question")
       data.append("cloud_name","rweb1")
       fetch("https://api.cloudinary.com/v1_1/rweb1/image/upload",{
           method:"post",
           body:data
       })
       .then(res=>res.json())
       .then((data)=>{
           setQuestionUrl(data.secure_url)
       })
       .catch(err=>{
           console.log(err)
       })
  }

  return (
    <div className={classes.card}>
      <Paper elevation={5}>
            <div className={classes.upload}>
              {/* while ({noofques >= 0}) { */}
                <TextField 
                  id="test-id" 
                  label="Test Id"
                  // variant="outlined" 
                  className={classes.textField}
                  value={testId}
                  onChange={(e)=>setTestID(e.target.value)}
                />
                <FormControl className={classes.formControl}>
                    <InputLabel>Subject</InputLabel>
                    <Select
                        labelId="controlled-open-select-label"
                        open={openSubject}
                        onClose={()=>setOpenSubject(false)}
                        onOpen={()=>setOpenSubject(true)}
                        value={subject}
                        onChange={(e)=>setSubject(e.target.value)}
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
                    onChange={(e)=>setQuestionImg(e.target.files[0])} 
                />
                <label htmlFor="contained-button-file">
                    <Button 
                      variant="contained" 
                      color="primary" 
                      component="span" 
                      className={classes.button}
                      startIcon={<CloudUploadIcon />}
                    >
                      Upload Question
                    </Button>
                </label>
                <FormControl className={classes.formControl}>
                    <InputLabel>Correct Option</InputLabel>
                    <Select
                        labelId="controlled-open-select-label"
                        open={openCorrect}
                        onClose={()=>setOpenCorrect(false)}
                        onOpen={()=>setOpenCorrect(true)}
                        value={correct}
                        onChange={(e)=>setCorrect(e.target.value)}
                    >
                        <MenuItem value={"1"}>1</MenuItem>
                        <MenuItem value={"2"}>2</MenuItem>
                        <MenuItem value={"3"}>3</MenuItem>
                        <MenuItem value={"4"}>4</MenuItem>
                    </Select>
                </FormControl>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  startIcon={<SaveIcon />}
                  onClick={()=>addQusetion()}
                >
                  Save Question
                </Button>
                {/* {--noofques}
              } */}
            </div>
      </Paper>
    </div>
  );
}
