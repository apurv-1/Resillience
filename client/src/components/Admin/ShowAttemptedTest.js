import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import {
 makeStyles,
 withStyles,
 Paper,
 Button,
 Table,
 TableBody,
 TableContainer,
 TableHead,
 TableCell,
 TableRow,
 TablePagination,
} from "@material-ui/core";
import dayjs from "dayjs";
import AssessmentIcon from "@material-ui/icons/Assessment";

const useStyles = makeStyles({
 root: {
  margin: "2.5rem",
  marginTop: "3rem",
  "@media only screen and (max-width: 770px)": {
   margin: "1rem",
  },
 },
 table: {
  padding: "10px",
  borderCollapse: "collapse",
  borderSpacing: "0 12px",
  width: "60rem",
  "@media only screen and (max-width: 1125px)": {
   width: "35rem",
   padding: "5px",
  },
  "@media only screen and (max-width: 770px)": {
   // width: "15rem",
   padding: "2px",
  },
 },
 span: {
  cursor: "pointer",
  padding: "10px 40px",
  borderRadius: "5px",
  fontWeight: "bold",
  alignContent: "center",
  backgroundColor: "#0F7DC2",
  border: "2px solid #ececec",
  color: "#F8F8F8",
 },
});
const StyledTableCell = withStyles((theme) => ({
 head: {
  backgroundColor: "#2196F8",
  fontSize: 18,
  color: theme.palette.common.white,
  fontWeight: "bold",
 },
 body: {
  fontSize: 16,
  fontWeight: "bold",
  textDecoration: "none",
 },
 "@media only screen and (max-width: 1125px)": {
  head: {
   backgroundColor: "#2196F8",
   fontSize: 16,
   color: theme.palette.common.white,
   fontWeight: "bold",
  },
  body: {
   fontSize: 14,
   fontWeight: "bold",
   textDecoration: "none",
  },
 },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
 root: {
  "&:nth-of-type(odd)": {
   backgroundColor: theme.palette.action.hover,
  },
 },
}))(TableRow);

const ShowAttemptedTest = ({ attemptedTests }) => {
 const classes = useStyles();
 const { studentid } = useParams();
 const history = useHistory();
 const [page, setPage] = useState(0);
 const [rowsPerPage, setRowsPerPage] = useState(8);

 const handleChangePage = (event, newPage) => {
  setPage(newPage);
 };

 const handleChangeRowsPerPage = (event) => {
  setRowsPerPage(+event.target.value);
  setPage(0);
 };

 return (
  <div className={classes.root}>
   <TableContainer component={Paper} elevation={4}>
    <Table className={classes.table} aria-label="customized table">
     <TableHead>
      <TableRow>
       <StyledTableCell>Test Id </StyledTableCell>
       <StyledTableCell>Test Name </StyledTableCell>
       <StyledTableCell align="right">Attempted at</StyledTableCell>
       <StyledTableCell align="right">Date</StyledTableCell>
       <StyledTableCell align="center">Report</StyledTableCell>
      </TableRow>
     </TableHead>
     <TableBody>
      {attemptedTests.length > 0 ? (
       attemptedTests
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map(({ _id, testDetails, createdAt }, index) => (
         <StyledTableRow key={index}>
          <StyledTableCell component="th" scope="row">
           {testDetails.testId}
          </StyledTableCell>
          <StyledTableCell component="th" scope="row">
           {testDetails.testName}
          </StyledTableCell>
          <StyledTableCell component="th" scope="row" align="right">
           {dayjs(createdAt).format("hh:mm a")}
          </StyledTableCell>
          <StyledTableCell component="th" scope="row" align="right">
           {dayjs(createdAt).format("DD MMM YY")}
          </StyledTableCell>
          <StyledTableCell component="th" scope="row" align="right">
           <Button
            variant="contained"
            color="secondary"
            size="small"
            startIcon={<AssessmentIcon />}
            onClick={() => history.push("/students/" + studentid + "/" + _id)}>
            Analysis
           </Button>
          </StyledTableCell>
         </StyledTableRow>
        ))
      ) : (
       <StyledTableRow style={{ marginLeft: "2rem" }}>
        <StyledTableCell component="th" scope="row">
         Student has not attempted any test!
        </StyledTableCell>
       </StyledTableRow>
      )}
     </TableBody>
    </Table>
    <TablePagination
     rowsPerPageOptions={[8]}
     component="div"
     count={attemptedTests.length}
     rowsPerPage={rowsPerPage}
     page={page}
     onChangePage={handleChangePage}
     onChangeRowsPerPage={handleChangeRowsPerPage}
    />
   </TableContainer>
  </div>
 );
};

export default ShowAttemptedTest;
