import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Paper, Button, TablePagination } from "@material-ui/core";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import dayjs from "dayjs";

import PersonIcon from "@material-ui/icons/Person";

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
  fontWeight: "bold",
 },
 body: {
  fontSize: 16,
  fontWeight: "bold",
  textDecoration: "none",
 },
 "@media only screen and (max-width: 1125px)": {
  head: {
   backgroundColor: "#0C659D",
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

const useStyles = makeStyles((theme) => ({
 root: {
  marginTop: "5rem",
  margin: "1rem",
  display: "flex",
 },
 table: {
  fontWeight: "bold",
 },
 loading: {
  display: "flex",
  justifyContent: "center",
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
}));

export default function EnrolledStudents() {
 const classes = useStyles();
 toast.configure();

 const history = useHistory();
 const [students, setStudents] = useState([]);
 //
 // 	const [openDeleteDialogue, setOpenDeleteDialogue] = useState(false);
 // 	// const [openEditTest, setOpenEditTest] = useState(false);
 //
 // 	const [currentTest_id, setCurrentTest_id] = useState("");
 // const [currentTestId, setCurrentTestId] = useState("");
 // const [currentNoOfQuestions, setCurrentNoOfQuestions] = useState("");

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
  if (localStorage.getItem("admin_jwt")) {
   fetch("/api/enrolled-students", {
    method: "get",
    headers: {
     Authorization: "Bearer " + localStorage.getItem("admin_jwt"),
    },
   })
    .then((res) => res.json())
    .then((allstudents) => {
     setStudents(allstudents.students);
    })
    .catch((err) => {
     // console.log(err);
     toast.error(err, {
      position: "bottom-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
     });
    });
  } else {
   toast.error("You're Not Signed in as Admin", {
    position: "bottom-right",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
   });
   history.push("/");
  }
 }, []);

 // const deleteTest = () => {
 // 	if (localStorage.getItem("admin_jwt")) {
 // 		fetch(`/delete-test/${currentTest_id}`, {
 // 			method: "delete",
 // 			headers: {
 // 				Authorization: "Bearer " + localStorage.getItem("admin_jwt"),
 // 			},
 // 		})
 // 			.then((res) => res.json())
 // 			.then((message) => {
 // 				setCurrentTest_id("");
 // 				setOpenDeleteDialogue(false);
 // 				toast.info(message.message, {
 // 					position: "bottom-right",
 // 					autoClose: 4000,
 // 					hideProgressBar: false,
 // 					closeOnClick: true,
 // 					pauseOnHover: true,
 // 					draggable: false,
 // 				});
 // 			})
 // 			.catch((err) => {
 // 				// console.log(err);
 // 				toast.error(err, {
 // 					position: "bottom-right",
 // 					autoClose: 4000,
 // 					hideProgressBar: false,
 // 					closeOnClick: true,
 // 					pauseOnHover: true,
 // 					draggable: false,
 // 				});
 // 			});
 // 	} else {
 // 		history.push("/");
 // 	}
 // };
 //
 // 	const handleEditTest = (testId, noOfQuestions) => {
 // 		setOpenEditTest(true);
 // 		setCurrentTestId(testId);
 // 		setCurrentNoOfQuestions(noOfQuestions);
 // 	};

 return (
  <div className={classes.root}>
   <TableContainer component={Paper} elevation={4}>
    <Table className={classes.table} aria-label="customized table">
     <TableHead>
      <TableRow>
       <StyledTableCell>S. No.</StyledTableCell>
       <StyledTableCell>Full Name</StyledTableCell>
       <StyledTableCell align="right">Email</StyledTableCell>
       <StyledTableCell align="right">Batch</StyledTableCell>
       <StyledTableCell align="right">No. of given Tests</StyledTableCell>
       <StyledTableCell align="right">Contact</StyledTableCell>
       <StyledTableCell align="right">Enrolled On</StyledTableCell>
       <StyledTableCell align="right"> &nbsp; </StyledTableCell>
       {/* <StyledTableCell align="right">&nbsp;</StyledTableCell> */}
      </TableRow>
     </TableHead>
     <TableBody>
      {students.length > 0 &&
       students
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map(({ _id, name, email, batch, attemptedTests, contact, createdAt }, index) => (
         <StyledTableRow key={index}>
          <StyledTableCell component="th" scope="row">
           {index + 1}
          </StyledTableCell>
          <StyledTableCell component="th" scope="row">
           {name}
          </StyledTableCell>
          <StyledTableCell component="th" scope="row" align="right">
           {email}
          </StyledTableCell>
          <StyledTableCell component="th" scope="row" align="right">
           {batch}
          </StyledTableCell>
          <StyledTableCell component="th" scope="row" align="right">
           {attemptedTests.length}
          </StyledTableCell>
          <StyledTableCell component="th" scope="row" align="right">
           {contact}
          </StyledTableCell>
          <StyledTableCell component="th" scope="row" align="right">
           {dayjs(createdAt).format("hh:mma D MMM'YY")}
          </StyledTableCell>
          <StyledTableCell component="th" scope="row" align="right">
           <Button
            variant="contained"
            color="secondary"
            size="small"
            startIcon={<PersonIcon />}
            onClick={() => history.push("/students/" + _id)}>
            Profile
           </Button>
          </StyledTableCell>
          {/* <StyledTableCell
										component="th"
										scope="row"
										align="right"
										onClick={() => setCurrentTest_id(_id)}>
										<span
													onClick={() => handleEditTest(testId, noOfQuestions)}
													style={{ cursor: "pointer" }}>
													<EditIcon />
												</span>
										<span onClick={() => setOpenDeleteDialogue(true)} style={{ cursor: "pointer" }}>
											<DeleteForeverIcon />
										</span>
									</StyledTableCell> */}
         </StyledTableRow>
        ))}
     </TableBody>
    </Table>
    <TablePagination
     rowsPerPageOptions={[10]}
     component="div"
     count={students.length}
     rowsPerPage={rowsPerPage}
     page={page}
     onChangePage={handleChangePage}
     onChangeRowsPerPage={handleChangeRowsPerPage}
    />
   </TableContainer>

   {/* <Dialog
				open={openDeleteDialogue}
				onClose={() => setOpenDeleteDialogue(false)}
				aria-labelledby="dialog-title">
				<DialogTitle id="dialog-title">Confirm Delete, are you sure?</DialogTitle>

				<DialogActions>
					<Button onClick={() => setOpenDeleteDialogue(false)} color="primary">
						Cancel
					</Button>
					<Button onClick={deleteTest} color="secondary">
						Delete
					</Button>
				</DialogActions>
			</Dialog> */}
  </div>
 );
}
