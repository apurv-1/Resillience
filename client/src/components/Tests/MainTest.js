import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import withStyles from "@material-ui/core/styles/withStyles";
import Button from '@material-ui/core/Button';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import Paper from "@material-ui/core/Paper";

const styles = (theme) => ({
    paper: {
        marginLeft: "2%",
        textAlign: "center",
        color: theme.palette.text.secondary
    },
    timerComponent: {
        marginTop:"9%"
    },
    question: {
        height: "100%",
        width:"100%",
        marginTop:"10%",
        alignItems: "center"
    },   
    optionContainer :{
        width: "100%"
    },
    option :{
        width: "100%"
    }
  });

class Test extends Component {
    constructor (props) {
        super(props);
    }

    render() {
        const { classes } = this.props;
        return(
            <Fragment>
                <Paper elevation={5}>
                    <Helmet><title>Test</title></Helmet>
                    <div className={classes.timerComponent}>
                        <p>
                            <span>1 of 20 questions</span>
                            <span><AccessTimeIcon />10:15:19</span>
                        </p>
                    </div>
                    <div className={classes.question} >
                        <h4>This is Question 1</h4>
                        <div className={classes.optionContainer}>
                            <p className={classes.option} > Option A </p>
                            <p className={classes.option} > Option B </p>
                        </div> 
                        <div className={classes.optionContainer}>
                            <p className={classes.option} > Option C </p>
                            <p className={classes.option} > Option D </p>
                        </div> 
                        <div className={classes.buttonContainer}>
                        <Button
                            variant="contained"
                            color="	#FF0000"
                            className={classes.button}
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
                    </div>
                </Paper>
            </Fragment>
        );
    }
}

export default withStyles(styles)(Test);