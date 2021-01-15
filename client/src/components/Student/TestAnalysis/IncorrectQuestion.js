import React from "react";

import { makeStyles, withStyles, Paper, Table, TableBody, TableContainer, TableHead, TableCell, TableRow } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    margin: "5px"
  },
  card: {
    padding: "5px"
  },
  table: {
    padding: "10px",
    borderCollapse: "collapse",
    borderSpacing: "0 12px"
  }
});

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#181818",
    fontSize: 18,
    color: theme.palette.common.white,
    fontWeight: "bold"
  },
  body: {
    fontSize: 16,
    fontWeight: "bold",
    textDecoration: "none"
  },
  "@media only screen and (max-width: 1125px)": {
    head: {
      backgroundColor: "#181818",
      fontSize: 16,
      color: theme.palette.common.white,
      fontWeight: "bold"
    },
    body: {
      fontSize: 14,
      fontWeight: "bold",
      textDecoration: "none"
    }
  }
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover
    }
  }
}))(TableRow);

const IncorrectQuestion = ({ cSubject, selectedAnswers, timeElapsed, test, questions }) => {
  const classes = useStyles();

  var timePerQuestion = parseInt(test.testDuration / (questions.length * 1000));
  return (
    <div className={classes.root}>
      {questions.map(({ questionNumber, questionImage, correctOption, _id, difficuilty, subject }, index) =>
        cSubject !== ""
          ? subject === cSubject &&
            selectedAnswers[index] &&
            selectedAnswers[index] !== correctOption && (
              <div className={classes.card} key={_id}>
                <TableContainer component={Paper} elevation={4}>
                  <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                      <TableRow>
                        <StyledTableCell>Question Number: {questionNumber}</StyledTableCell>
                        <StyledTableCell>Subject </StyledTableCell>
                        <StyledTableCell align="right">Difficuilty level</StyledTableCell>
                        <StyledTableCell align="right">Correct Option</StyledTableCell>
                        <StyledTableCell align="right">Selected Option</StyledTableCell>
                        <StyledTableCell align="right">Time Taken</StyledTableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <StyledTableRow>
                        <StyledTableCell component="th" scope="row">
                          <img src={questionImage} alt="question" width="100%" />
                        </StyledTableCell>
                        <StyledTableCell component="th" scope="row">
                          {subject}
                        </StyledTableCell>
                        <StyledTableCell component="th" scope="row" align="right">
                          {difficuilty}
                        </StyledTableCell>
                        <StyledTableCell component="th" scope="row" align="right">
                          {correctOption}
                        </StyledTableCell>
                        <StyledTableCell component="th" scope="row" align="right">
                          {selectedAnswers[index]}
                        </StyledTableCell>
                        <StyledTableCell component="th" scope="row" align="right">
                          {timeElapsed[index] ? timeElapsed[index] : 0}s / {timePerQuestion}s&nbsp;
                        </StyledTableCell>
                      </StyledTableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            )
          : selectedAnswers[index] &&
            selectedAnswers[index] !== correctOption && (
              <div className={classes.card} key={_id}>
                <TableContainer component={Paper} elevation={4}>
                  <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                      <TableRow>
                        <StyledTableCell>Question Number: {questionNumber}</StyledTableCell>
                        <StyledTableCell>Subject </StyledTableCell>
                        <StyledTableCell align="right">Difficuilty level</StyledTableCell>
                        <StyledTableCell align="right">Correct Option</StyledTableCell>
                        <StyledTableCell align="right">Selected Option</StyledTableCell>
                        <StyledTableCell align="right">Time Taken</StyledTableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <StyledTableRow>
                        <StyledTableCell component="th" scope="row">
                          <img src={questionImage} alt="question" width="100%" />
                        </StyledTableCell>
                        <StyledTableCell component="th" scope="row">
                          {subject}
                        </StyledTableCell>
                        <StyledTableCell component="th" scope="row" align="right">
                          {difficuilty}
                        </StyledTableCell>
                        <StyledTableCell component="th" scope="row" align="right">
                          {correctOption}
                        </StyledTableCell>
                        <StyledTableCell component="th" scope="row" align="right">
                          {selectedAnswers[index]}
                        </StyledTableCell>
                        <StyledTableCell component="th" scope="row" align="right">
                          {timeElapsed[index] ? timeElapsed[index] : 0}s / {timePerQuestion}s&nbsp;
                        </StyledTableCell>
                      </StyledTableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            )
      )}
    </div>
  );
};

export default IncorrectQuestion;
