import React, { Fragment, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import Paper from "@material-ui/core/Paper";
import Fab from '@material-ui/core/Fab';

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
    top:{
        marginTop:"-5%"
    },
    box: {
        padding:"10px",
    },
    question: {
        height: "100%",
        width:"100%",
        marginTop:"2%",
        alignItems: "center"
    },   
    optionContainer :{
        width: "100%"
    },
    option :{
        marginLeft: "22%",
        marginTop: "10px",
        marginBottom: "10px"
    },
    buttonContainer:{
        padding:"20px"
    },
    button:{
        marginLeft: "80px"
    },
    fab: {
        margin: "10px",
    },
    fabBox: {
        padding: "20px",
    },
    timer:{
        textAlign:"center",
        textSizeAdjust:"90%"
    }
}));

const MainTest = () => {

        // const [test,setTest] = useState([]);
        // const [testId,setTestId] = useState('');
        // useEffect(()=>{
        //     fetch('/showtest',{
        //         method:"get",
        //         headers:{
        //             "Content-Type":"application/json"
        //         },
        //         body:JSON.stringify({
        //             testId
        //         })
        //     })
        //      .then((res)=>res.json())
        //      .then((result)=>{
        //          setTest(result.tests)
        //      })
        // })
    
        const  classes = useStyles();
        return(
            // <Fragment>
            //     <Helmet><title>Test</title></Helmet>
                <div className={classes.root}>
                <Paper elevation={5} className={classes.paper3}>
                        <div className={classes.timer}>
                            <b><AccessTimeIcon /> : 1:05:11 seconds</b>
                        </div>
                    <div className={classes.fabBox}>
                        <hr style={{height:"2px", backgroundColor:"gray solid"}} />
                        {/* <b>Questions Overview: </b> */}
                        <div>
                            <Fab size="medium" color="secondary" className={classes.fab}>1</Fab>
                            <Fab size="medium" color="secondary" className={classes.fab}>2</Fab>
                            <Fab size="medium" color="secondary" className={classes.fab}>3</Fab>
                            <Fab size="medium" color="secondary" className={classes.fab}>4</Fab>
                            
                        </div>
                        <div>
                            <Fab size="medium" color="secondary" className={classes.fab}>5</Fab>
                            <Fab size="medium" color="secondary" className={classes.fab}>6</Fab>
                            <Fab size="medium" color="secondary" className={classes.fab}>7</Fab>
                            <Fab size="medium" color="secondary" className={classes.fab}>8</Fab>
                            
                        </div>
                        <div>
                            <Fab size="medium" color="secondary" className={classes.fab}>9</Fab>
                            <Fab size="medium" color="secondary" className={classes.fab}>10</Fab>
                            <Fab size="medium" color="secondary" className={classes.fab}>11</Fab>
                            <Fab size="medium" color="secondary" className={classes.fab}>12</Fab>
                            
                        </div>
                        <div>
                            <Fab size="medium" color="secondary" className={classes.fab}>13</Fab>
                            <Fab size="medium" color="secondary" className={classes.fab}>14</Fab>
                            <Fab size="medium" color="secondary" className={classes.fab}>15</Fab>
                        </div>
                        <hr style={{height:"2px", backgroundColor:"gray solid"}} />
                    </div>
                </Paper>
                <Paper elevation={5} className={classes.paper1}>
                    <div className={classes.box}>
                        <p className={classes.top}>
                            <span><h2>Sample Test 3</h2></span>
                            <span>1 of 20 questions</span>
                        </p>
                        <hr style={{height:"2px", backgroundColor:"gray solid"}} />
                        <div className={classes.question} >
                            <img alt="question" src="https://res.cloudinary.com/rweb1/image/upload/v1601136030/iukekz1lf7truo7huhtw.png" />
                            <hr style={{height:"2px", backgroundColor:"gray solid"}} />
                        </div>
                        <div>
                            <div style={{marginLeft:"-30%"}}>
                                <Fab
                                variant="extended"
                                size="medium"
                                color="primary"
                                className={classes.option}
                                >
                                Option A
                                </Fab>
                                <Fab
                                variant="extended"
                                size="medium"
                                color="primary"
                                className={classes.option}
                                >
                                Option B
                                </Fab>
                            </div>
                            <div style={{marginLeft:"-30%"}}>
                                <Fab
                                variant="extended"
                                size="medium"
                                color="primary"
                                className={classes.option}
                                >
                                Option C
                                </Fab>
                                <Fab
                                variant="extended"
                                size="medium"
                                color="primary"
                                className={classes.option}
                                >
                                Option D
                                </Fab>
                            </div>
                            <hr style={{height:"1px", backgroundColor:"gray solid"}} />
                        </div>
                    </div>
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
            // </Fragment>
        );
    
}

export default MainTest;