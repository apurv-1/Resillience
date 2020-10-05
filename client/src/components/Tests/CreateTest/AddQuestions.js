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
import ReactCrop from 'react-image-crop';
import CropIcon from '@material-ui/icons/Crop';
import 'react-image-crop/dist/ReactCrop.css';

const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
    flexWrap: "wrap",
    margin: "5%",
    marginTop: "2%",
    marginBottom: "-10%",
    "& > *": {
      margin: "2%",
      width: "100%",
      height: "80%"
    }
  },
  textField:{
    height: "10px" ,
    maxWidth: "50px",
    marginTop:"-20%",
    textAlign: "left",
  },
  questionNum:{
    height: "10px" ,
    maxWidth: "150px",
    marginTop:"-20%",
    textAlign: "left",
  },
  paper: {
    marginLeft: "2%",
    textAlign: "center",
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
    width: "20%"
  },
  formControl: {
    minWidth: "15%",
    height: "50%",
    width: "15%"
  },
  cropContainer12:{
    height: "100%"
  },
  cropContainer: {
    width:"100%",
    // height: "100%",
    display:"flex",
    justifyContent:"space-around",
    margin:"2px"
    // border:"2px solid",
    // background: "transparent",
  },
  showImage: {
    maxWidth: "100%",
    maxHeight: "100%"

  },
  croppedQuestion: {
    minWidth: "500px",
    minHeight: "500px",
  }
}));


const AddQuestions = ({testID}) => {
  const classes = useStyles();
  const [openSubject, setOpenSubject] = useState(false);
  const [openCorrect, setOpenCorrect] = useState(false);
  const [subject, setSubject] = useState('');
  const [correct, setCorrect] = useState('');

  const [questionNumber, setQuestionNumber] = useState('');
  const [questionImg, setQuestionImg] = useState('');
  const [questionSrc, setQuestionSrc] = useState('');
  const [questionUrl, setQuestionUrl] = useState('');
  const [finalQuestion, setFinalQuestion] = useState('');
  const [crop, setCrop] = useState({});

  useEffect(()=>{
    if(questionUrl){
      fetch("/add-question",{
        method:"put",
        headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify({
          testId:testID,
          questionNumber: questionNumber,
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
          setCorrect("");
          setSubject("");
          setQuestionImg("");
          setQuestionUrl("");
          setQuestionSrc("");
          setFinalQuestion("");
         }
       })
       .catch((err)=>{
         console.log(err)
       }) 
    }
  },[questionUrl])

  const addQuestion = ()=>{
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

  const handleImageChange = (e) => {
    setQuestionSrc(URL.createObjectURL(e.target.files[0]))
  }

  function getCroppedImg() {
    const canvas = document.createElement('canvas');
    const scaleX = questionImg.naturalWidth / questionImg.width;
    const scaleY = questionImg.naturalHeight / questionImg.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext('2d');
   
    ctx.drawImage(
      questionImg,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height,
    );
    
    const base64Image = canvas.toDataURL('image/jpeg');
    setFinalQuestion(base64Image);
    setQuestionImg(base64Image);
  }
  
  return (
    <div className={classes.card}>
      <Paper elevation={5}>
            <div className={classes.upload}>
 
                <TextField 
                  id="question-number" 
                  label="Question Number"
                  // variant="outlined" 
                  className={classes.questionNum}
                  value={questionNumber}
                  onChange={(e)=>setQuestionNumber(e.target.value)}
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
                    onChange={handleImageChange} 
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
                  onClick={()=>addQuestion()}
                >
                  Save Question
                </Button>
            </div>
      </Paper>
        <div className={classes.cropContainer}>
          <div className={classes.showImage}>
            { questionSrc && (
              <div >
                <ReactCrop src={questionSrc} onImageLoaded={setQuestionImg} crop={crop} onChange={setCrop} />
                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.button}
                  startIcon={<CropIcon />}
                  onClick={getCroppedImg}
                >
                  Crop 
                </Button>
              </div>
            )}
          </div>
          <div className={classes.croppedQuestion}>
          { finalQuestion && (
            <div>
            <img src={finalQuestion} alt="cropped question" />
            </div>
          )}
          </div>  
        </div>
    </div>
  );
}

export default AddQuestions;
