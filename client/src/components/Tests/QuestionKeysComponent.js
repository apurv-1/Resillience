import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import AccessTimeIcon from '@material-ui/icons/AccessTime';
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
    },
    timer:{
        textAlign:"center",
        textSizeAdjust:"90%"
    }
}));

const QuestionKeysComponent = () => {
    const  classes = useStyles();

    return(
        <div>
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
        </div>
    );
}

export default QuestionKeysComponent;