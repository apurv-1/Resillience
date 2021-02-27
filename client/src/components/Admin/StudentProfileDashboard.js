import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Avatar, Button } from "@material-ui/core";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";

import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ShowAttemptedTest from "./ShowAttemptedTest";

const useStyles = makeStyles(() => ({
 root: {
  display: "flex",
  margin: "1rem",
  marginTop: "5rem",
  flexDirection: "row",
  "@media only screen and (max-width: 770px)": {
   flexDirection: "column",
  },
 },
 card: {
  width: "20rem",
  "@media only screen and (max-width: 770px)": {
   width: "100%",
  },
 },
 pic: {
  height: "8rem",
  width: "8rem",
  boxShadow: "0 1px 3px 1px rgba(35, 34, 39)",
 },
 paper: {
  display: "flex",
  margin: "1rem",
  padding: "1rem",
  fontWeight: "bolder",
 },
 uploadImage: {
  position: "absolute",
  marginTop: "6rem",
  marginLeft: "5rem",
 },
 textbox: {
  marginLeft: "26%",
  marginTop: "5%",
 },
 loading: {
  display: "flex",
  justifyContent: "center",
 },
 editButton: {
  display: "flex",
  justifyContent: "center",
 },
}));

export default function StudentProfileDashboard() {
 const classes = useStyles();
 toast.configure();
 const { studentid } = useParams();
 const history = useHistory();
 const [open, setOpen] = useState(false);
 const [student, setStudent] = useState([]);
 const [attemptedTests, setAttemptedTests] = useState([]);

 const [name, setName] = useState("");
 const [email, setEmail] = useState("");
 const [batch, setBatch] = useState("");
 const [contact, setContact] = useState("");
 const [parentContact, setParentContact] = useState("");
 const [fname, setFname] = useState("");
 const [address, setAddress] = useState("");

 /* eslint-disable */
 useEffect(() => {
  if (!student) {
   history.push("/");
  }
  fetch(`/api/student/${studentid}`, {
   method: "get",
   headers: {
    Authorization: "Bearer " + localStorage.getItem("admin_jwt"),
   },
  })
   .then((res) => res.json())
   .then((studentDetails) => {
    setStudent(studentDetails.student);
   })
   .catch((err) => {
    console.log(err);
   });

  fetch(`/api/attempted-tests/${studentid}`, {
   method: "get",
   headers: {
    Authorization: "Bearer " + localStorage.getItem("admin_jwt"),
   },
  })
   .then((res) => res.json())
   .then((tests) => {
    setAttemptedTests(tests.test);
   })
   .catch((err) => {
    console.log(err);
   });
 }, []);

 const handleUpdateStudentDetails = () => {
  if (!name || !email || !contact || !parentContact || !address) {
   toast.error("Please fill all the fields..", {
    position: "bottom-right",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
   });
  } else {
   //API call to update student details
   fetch(`/api/update-student-details/${studentid}`, {
    method: "PATCH",
    headers: {
     "Content-Type": "application/json",
     Authorization: "Bearer " + localStorage.getItem("admin_jwt"),
    },
    body: JSON.stringify({
     name,
     email,
     batch,
     contact,
     parentContact,
     fname,
     address,
    }),
   })
    .then((res) => res.json())
    .then((details) => {
     if (details.error) {
      toast.error(details.error, {
       position: "bottom-right",
       autoClose: 4000,
       hideProgressBar: false,
       closeOnClick: true,
       pauseOnHover: true,
       draggable: false,
      });
      console.log(test.error);
     } else {
      toast.success(details.message, {
       position: "bottom-right",
       autoClose: 20000,
       hideProgressBar: true,
       closeOnClick: true,
       pauseOnHover: true,
       draggable: false,
      });
      setOpen(false);
      window.location.reload();
     }
    })
    .catch((err) => {
     console.log(err);
     toast.error(err, {
      position: "bottom-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
     });
    });
  }
 };

 return (
  <Paper elevation={5} className={classes.root}>
   <div className={classes.card}>
    <div className={classes.paper} style={{ justifyContent: "center" }}>
     <Avatar className={classes.pic} alt="Student" src={student ? student.picture : ""} />
    </div>
    <span>
     <div className={classes.editButton}>
      <Button
       variant="outlined"
       color="secondary"
       startIcon={<EditOutlinedIcon />}
       onClick={() => setOpen(true)}>
       Edit Details
      </Button>
     </div>
     <Dialog open={open} onClose={() => setOpen(false)} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Edit Student Info</DialogTitle>
      <DialogContent>
       <TextField
        margin="dense"
        id="name"
        label="Full Name"
        type="name"
        defaultValue={student.name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
       />
       <TextField
        margin="dense"
        id="email"
        label="Email Address"
        type="email"
        defaultValue={student.email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
       />
       <TextField
        margin="dense"
        id="batch"
        label="Batch"
        type="text"
        defaultValue={student.batch}
        onChange={(e) => setBatch(e.target.value)}
        fullWidth
       />
       <TextField
        margin="dense"
        id="contact"
        label="Phone Number"
        type="text"
        defaultValue={student.contact}
        onChange={(e) => setContact(e.target.value)}
        fullWidth
       />
       <TextField
        margin="dense"
        id="fname"
        label="Fathers Name"
        type="text"
        defaultValue={student.fname}
        onChange={(e) => setFname(e.target.value)}
        fullWidth
       />
       <TextField
        margin="dense"
        id="pcontact"
        label="Parents Contact"
        type="text"
        defaultValue={student.parentContact}
        onChange={(e) => setParentContact(e.target.value)}
        fullWidth
       />
       <TextField
        margin="dense"
        id="address"
        label="Address"
        type="text"
        defaultValue={student.address}
        onChange={(e) => setAddress(e.target.value)}
        fullWidth
       />
      </DialogContent>
      <DialogActions>
       <Button onClick={() => setOpen(false)} color="primary">
        Cancel
       </Button>
       <Button color="primary" onClick={() => handleUpdateStudentDetails()}>
        Save Changes
       </Button>
      </DialogActions>
     </Dialog>
    </span>
    <span className={classes.infoContainer}>
     <Paper elevation={3} className={classes.paper}>
      Name: {student ? student.name : ""}
     </Paper>
     <Paper elevation={3} className={classes.paper}>
      Email : {student ? student.email : ""}
     </Paper>

     <Paper elevation={3} className={classes.paper}>
      Batch : {student ? student.batch : ""}
     </Paper>
     <Paper elevation={3} className={classes.paper}>
      Phone Number : {student ? student.contact : ""}
     </Paper>

     <Paper elevation={3} className={classes.paper}>
      Fathers Name : {student ? student.fname : ""}
     </Paper>

     <Paper elevation={3} className={classes.paper}>
      Parents Contact : {student ? student.parentContact : ""}
     </Paper>

     <Paper elevation={3} className={classes.paper}>
      Address : {student ? student.address : ""}
     </Paper>
    </span>
   </div>
   <div>
    <ShowAttemptedTest attemptedTests={attemptedTests} />
   </div>
  </Paper>
 );
}
