import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
//components

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
