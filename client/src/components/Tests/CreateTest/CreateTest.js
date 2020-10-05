import React,{ useEffect, useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';

import AddQuestions from "./AddQuestions";

const useStyles = makeStyles(() => ({
    root:{
        margin: "20px"
    },
    questionsDiv:{
        margin: "2px"
    },
    testDiv: {
        margin: "20%"
    },
    paper: {
        marginLeft: "2%",
        textAlign: "center",
        // color: theme.palette.text.secondary
      },
}))

const CreateTest = () => {
    const classes = useStyles();

    const [testId, setTestId] = useState('');
    const [testName, setTestName] = useState('');
    const [testDuration, setTestDuration] = useState('');
    const [noOfQuestions, setNoOfQuestions] = useState('');
    const [check, setCheck] = useState(false);

    const SaveTest = () => {
        fetch('/addtest',{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                testId,
                testName,
                testDuration,
                noOfQuestions
            })
        })
        .then((res)=>res.json())
        .then(test =>{
            if(test.error){
                console.log(test.error)
              }
            else{
               console.log("Test Created!")
               setCheck(true)
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    return(
        <div className={classes.root}>
            {
                check ?
                    <div className={classes.questionsDiv}>
                        <AddQuestions testID={testId} />
                    </div>
                :
                    <div className={classes.testDiv}>
                        <Paper elevation={5}>
                            <TextField 
                                id="test-id" 
                                label="Test Id"
                                // variant="outlined" 
                                className={classes.textField}
                                value={testId}
                                onChange={(e)=>setTestId(e.target.value)}
                            />
                            <TextField 
                                id="test-name" 
                                label="Test Name"
                                // variant="outlined" 
                                className={classes.testField}
                                value={testName}
                                onChange={(e)=>setTestName(e.target.value)}
                            />
                            <TextField 
                                id="number-of-ques" 
                                label="How many Questions"
                                // variant="outlined" 
                                className={classes.testField}
                                value={noOfQuestions}
                                onChange={(e)=>setNoOfQuestions(e.target.value)}
                            />
                            <TextField 
                                id="test-duration" 
                                label="Test Duration (mins)"
                                // variant="outlined" 
                                className={classes.testField}
                                value={(testDuration * 60000)}
                                onChange={(e)=>setTestDuration(e.target.value)}
                            />
                            <Button
                                variant="contained"
                                color="primary"
                                className={classes.button}
                                startIcon={<SaveIcon />}
                                onClick={()=>SaveTest()}
                                >
                                Save Test
                            </Button>
                        </Paper>
                    </div>
            }
        </div>
    );
}

export default CreateTest ; 