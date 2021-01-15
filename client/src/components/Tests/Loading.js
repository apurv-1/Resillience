import React from "react";
import { CircularProgress, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  loadingScreen: {
    margin: "4%",
    display: "flex",
    width: "100%",
    height: "40%",
    justifyContent: "center",
    alignItems: "center"
  }
}));

function Loading() {
  const classes = useStyles();
  return (
    <div className={classes.loadingScreen}>
      <CircularProgress color="secondary" />
    </div>
  );
}

export default Loading;
