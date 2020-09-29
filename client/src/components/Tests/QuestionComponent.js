import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
// import Button from '@material-ui/core/Button';
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
    }
}));

const QuestionComponent = () => {
    const  classes = useStyles();

    return(
        <div>
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
        </div>
    );
}

export default QuestionComponent;