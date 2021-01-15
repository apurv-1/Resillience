import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#0C659D",
    fontSize: 20,
    color: theme.palette.common.white,
    fontWeight: "bold"
  },
  body: {
    fontSize: 20,
    fontWeight: "bold"
  }
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover
    }
  }
}))(TableRow);

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "5rem",
    margin: "1rem",
    display: "flex"
  },
  questionImage: {
    width: "30rem"
  },
  loading: {
    display: "flex",
    justifyContent: "center"
  }
}));

export default function ViewQuestions() {
  const classes = useStyles();
  const history = useHistory();
  const { testid } = useParams();
  const [questions, setQuestions] = useState([]);

  /* eslint-disable */
  useEffect(() => {
    if (localStorage.getItem("admin_jwt")) {
      fetch(`/api/alltests/${testid}`, {
        method: "get",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("admin_jwt")
        }
      })
        .then((res) => res.json())
        .then((test) => {
          // console.log(test.test.questions);
          setQuestions(test.test.questions);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      history.push("/");
    }
  }, []);

  return (
    <div className={classes.root}>
      <TableContainer component={Paper} elevation={4}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Question Number</StyledTableCell>
              <StyledTableCell>Question Image</StyledTableCell>
              <StyledTableCell align="right">Difficuilty</StyledTableCell>
              <StyledTableCell align="right">Subject</StyledTableCell>
              <StyledTableCell align="right">Correct Option</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {questions.length > 0 &&
              questions.map(({ questionNumber, questionImage, difficuilty, subject, correctOption }, index) => (
                <StyledTableRow key={index}>
                  <StyledTableCell component="th" scope="row">
                    {questionNumber}
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    <img src={questionImage} className={classes.questionImage} alt={questionNumber} />
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row" align="right">
                    {difficuilty}
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row" align="right">
                    {subject}
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row" align="right">
                    {correctOption}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
