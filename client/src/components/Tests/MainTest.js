import React, { useEffect, useState } from "react";
//  import { Helmet } from "react-helmet";
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import Paper from "@material-ui/core/Paper";
import TextField from '@material-ui/core/TextField';
//Components
import QuestionComponent from './QuestionComponent';
import QuestionKeysComponent from './QuestionKeysComponent';

const useStyles = makeStyles(() => ({
    root:{
        // margin: "4%",
        marginTop: "5%",
        // maxWidth:"70%",
        // maxHeight:"100%",
        paddingLeft:"60px",
        paddingRight:"60px",
    },
    paper1: {
        margin: "1%",
        marginTop: "4%",
        paddingTop:"40px",
        maxWidth:"70%",
        maxHeight:"100%",
        textAlign: "center",
        // color: "#f8f8f8"
    },
    paper2: {
        margin: "1%",
        marginTop: "2%",
        paddingTop:"0px",
        maxWidth:"70%",
        maxHeight:"100%",
        textAlign: "center",
        marginBottom:"-10%"
    },
    paper3: {
        float:"right",
        // margin: "1%",
        // marginTop: "4%",
        paddingTop:"20px",
        maxWidth:"30%",
        maxHeight:"100%",
        // textAlign: "center",

    },
    startbox:{
        padding: '1%',
        display: 'flex',
        alignItems: 'center',
        justifyContent:"space-around"
    },
    paper4: {
        padding:"5%",

        textAlign: "center",
        // color: "#f8f8f8"
    },
}));

const MainTest = () => {
    
    const [check, setCheck] = useState(false);
    const [testId, setTestId] = useState('');
    const FetchTest = () => {
        fetch(`/showtest?testid=${testId}`,{
            method:"get",
            headers:{
                "Content-Type":"application/json"
            },
        })
        .then((res)=>res.json())
        .then((test)=>{
                console.log(test)
                localStorage.setItem("test", JSON.stringify(test))
                // localStorage.setItem("questions",test.questions)
                setCheck(true)
        })
        .catch((err) => {
            console.log(err);
        });
    }

        const  classes = useStyles();
        return(
            // <Fragment>
            //     <Helmet><title>Test</title></Helmet>
                <div className={classes.root}>
                        
                { check ? 
                    <div>
                        <Paper elevation={5} className={classes.paper3}>
                            <QuestionKeysComponent />
                        </Paper>
                        <Paper elevation={5} className={classes.paper1}>
                        <QuestionComponent /> 
                        </Paper>
                        <Paper elevation={5} className={classes.paper2}>
                            <div className={classes.buttonContainer}>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    className={classes.button}
                                    style={{marginLeft:"-10px"}}
                                >
                                    End Test
                                </Button>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    className={classes.button}
                                >
                                    Previous Question
                                </Button>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    className={classes.button}
                                >
                                    Mark for Review
                                </Button>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    className={classes.button}
                                >
                                    Next Question
                                </Button>
                            </div>
                        </Paper>
                    </div> 
                : 
                    <div className={classes.startbox}>
                    <Paper elevation={5} className={classes.paper4}>
                       
                            <div>
                                <TextField 
                                    id="outlined-basic" 
                                    label="Enter Test ID" 
                                    variant="outlined"
                                    value={testId}
                                    onChange={(e)=>setTestId(e.target.value)} 
                                    />
                            </div>
                            <Button
                                variant="contained"
                                color="primary"
                                className={classes.button}
                                style={{width:"100%"}}
                                onClick={()=>FetchTest()}
                            >
                                Begin Test
                            </Button>
                        
                    </Paper>
                    </div>
                }
                </div>
            // </Fragment>
        );
    
}

export default MainTest;