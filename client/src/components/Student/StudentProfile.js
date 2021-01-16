import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Avatar, Fab, Button } from "@material-ui/core";
import PhotoCamera from "@material-ui/icons/PhotoCamera";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Loading from "../Tests/Loading";
import UserContext from "../Context/UserContext";
import AttemptedTest from "./AttemptedTest";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		margin: "3rem",
		marginTop: "5rem",
		flexDirection: "row",
		"@media only screen and (max-width: 770px)": {
			flexDirection: "column",
			margin: "1rem",
			marginTop: "3.5rem",
		},
	},
	card: {
		width: "20rem",
		"@media only screen and (max-width: 1125px)": {
			width: "16rem",
		},
		"@media only screen and (max-width: 770px)": {
			width: "100%",
			margin: "0%",
		},
	},
	infoContainer: {
		"@media only screen and (max-width: 770px)": {
			display: "none",
		},
	},
	profileContainer: {
		"@media only screen and (max-width: 770px)": {
			flexDirection: "column",
		},
	},
	profile: {
		"@media only screen and (max-width: 770px)": {
			justifyContent: "center",
			paddingTop: "1rem",
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
		"@media only screen and (max-width: 770px)": {
			width: "18rem",
		},
	},
	imageContainer: {
		display: "flex",
		margin: "2rem",
		justifyContent: "center",
		"@media only screen and (max-width: 770px)": {
			margin: "1rem",
			width: "18rem",
			float: "right",
		},
	},
	uploadImage: {
		position: "absolute",
		marginTop: "6rem",
		marginLeft: "5rem",
	},
	button: {
		float: "right",
		margin: "1rem",
		"@media only screen and (min-width: 1440px)": {
			marginRight: "3rem",
		},
	},
}));

export default function StudentProfile() {
	const classes = useStyles();
	toast.configure();
	const { userState } = useContext(UserContext);
	const history = useHistory();
	const [image, setImage] = useState("");

	useEffect(() => {
		if (image) {
			const data = new FormData();
			console.log(data);
			data.append("file", image);
			data.append("upload_preset", "profile_pic");
			data.append("cloud_name", "rweb1");
			fetch("https://api.cloudinary.com/v1_1/rweb1/image/upload", {
				method: "post",
				body: data,
			})
				.then((res) => res.json())
				.then((data) => {
					fetch("/api/updateprofile-picture", {
						method: "put",
						headers: {
							"Content-Type": "application/json",
							Authorization: "Bearer " + localStorage.getItem("student_jwt"),
						},
						body: JSON.stringify({
							picture: data.secure_url,
						}),
					})
						.then((res) => res.json())
						.then(() => {
							toast.success("Image updated!", {
								position: "bottom-right",
								autoClose: 3000,
								hideProgressBar: false,
								closeOnClick: true,
								pauseOnHover: true,
								draggable: false,
							});
							setImage("");
							window.location.reload();
						});
				})
				.catch((err) => {
					console.log(err);
					toast.error(err, {
						position: "bottom-right",
						autoClose: 3000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: false,
					});
				});
		}
	}, [image]);

	const handleUpdateProfilePicture = (e) => {
		e.preventDefault();
		const file = e.target.files[0];
		setImage(file);
	};

	return (
		<Paper elevation={5} className={classes.root}>
			<div>
				{userState.payload ? (
					<div className={classes.card}>
						<div className={classes.profileContainer}>
							<div className={classes.imageContainer}>
								<Avatar
									className={classes.pic}
									alt="Student"
									src={userState.payload ? userState.payload.picture : ""}
								/>
								<span className={classes.uploadImage} onChange={handleUpdateProfilePicture}>
									<input accept="image/*" style={{ display: "none" }} id="icon-button-file" type="file" />
									<label htmlFor="icon-button-file">
										<Fab size="small" color="secondary" aria-label="upload picture" component="span">
											<PhotoCamera />
										</Fab>
									</label>
								</span>
							</div>
							<div className={classes.profile}>
								<Paper elevation={3} className={classes.paper}>
									Name: {userState.payload ? userState.payload.name : ""}
								</Paper>
								<Paper elevation={3} className={classes.paper}>
									Email : {userState.payload ? userState.payload.email : ""}
								</Paper>
							</div>
						</div>

						<span className={classes.infoContainer}>
							<Paper elevation={3} className={classes.paper}>
								Batch : {userState.payload ? userState.payload.batch : ""}
							</Paper>
							<Paper elevation={3} className={classes.paper}>
								Phone Number : {userState.payload ? userState.payload.contact : ""}
							</Paper>

							<Paper elevation={3} className={classes.paper}>
								Fathers Name : {userState.payload ? userState.payload.fname : ""}
							</Paper>

							<Paper elevation={3} className={classes.paper}>
								Parents Contact : {userState.payload ? userState.payload.parentContact : ""}
							</Paper>

							<Paper elevation={3} className={classes.paper}>
								Address : {userState.payload ? userState.payload.address : ""}
							</Paper>
						</span>
					</div>
				) : (
					<div className={classes.loading}>
						<Loading />
					</div>
				)}
			</div>
			<div>
				<Button
					variant="outlined"
					color="secondary"
					className={classes.button}
					onClick={() => history.push("/maintest")}>
					Take Test
				</Button>
				<AttemptedTest />
			</div>
		</Paper>
	);
}
