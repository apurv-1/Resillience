import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Paper, Button, TablePagination } from "@material-ui/core";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import dayjs from "dayjs";

import LaunchIcon from "@material-ui/icons/Launch";

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
    fontSize: 16,
    fontWeight: "bold",
    textDecoration: "none"
  },
  "@media only screen and (max-width: 1125px)": {
    head: {
      backgroundColor: "#0C659D",
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

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "5rem",
    margin: "1rem",
    display: "flex"
  },
  table: {
    fontWeight: "bold"
  },
  loading: {
    display: "flex",
    justifyContent: "center"
  },
  span: {
    cursor: "pointer",
    padding: "10px 40px",
    borderRadius: "5px",
    fontWeight: "bold",
    alignContent: "center",
    backgroundColor: "#0F7DC2",
    border: "2px solid #ececec",
    color: "#F8F8F8"
  }
}));

export default function Notices() {
  const classes = useStyles();
  toast.configure();

  const history = useHistory();
  const [notices, setNotices] = useState([]);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  /* eslint-disable */
  useEffect(() => {
    if (localStorage.getItem("student_jwt")) {
      fetch("/api/all-notices", {
        method: "get",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("student_jwt")
        }
      })
        .then((res) => res.json())
        .then((allnotices) => {
          setNotices(allnotices.notice);
        })
        .catch((err) => {
          // console.log(err);
          toast.error(err, {
            position: "bottom-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false
          });
        });
    } else {
      toast.error("You're Not Signed in as Admin", {
        position: "bottom-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false
      });
      history.push("/");
    }
  }, []);

  return (
    <div className={classes.root}>
      <TableContainer component={Paper} elevation={4}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>S. No.</StyledTableCell>
              <StyledTableCell>Title</StyledTableCell>
              <StyledTableCell align="right">Description</StyledTableCell>
              <StyledTableCell align="right">Date</StyledTableCell>
              <StyledTableCell align="right"> &nbsp; </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {notices.length > 0 &&
              notices.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(({ _id, title, description, createdAt, link }, index) => (
                <StyledTableRow key={index}>
                  <StyledTableCell component="th" scope="row">
                    {index + 1}
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    {title}
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row" align="right">
                    {description}
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row" align="right">
                    {dayjs(createdAt).format("hh:mma MMM YY")}
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row" align="right">
                    <Button
                      variant="contained"
                      color="secondary"
                      size="medium"
                      endIcon={<LaunchIcon />}
                      href={link}
                      target="_blank"
                      // onClick={() => history.push("/notices/" + _id)}
                    >
                      Open
                    </Button>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[10]}
          component="div"
          count={notices.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </TableContainer>
    </div>
  );
}
