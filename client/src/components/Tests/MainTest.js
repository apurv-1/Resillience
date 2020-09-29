import React from "react";
//  import { Helmet } from "react-helmet";
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import Paper from "@material-ui/core/Paper";
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

    }
}));

const MainTest = () => {

    
        const  classes = useStyles();
        return(
            // <Fragment>
            //     <Helmet><title>Test</title></Helmet>
                <div className={classes.root}>
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
            // </Fragment>
        );
    
}

export default MainTest;