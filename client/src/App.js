import React, { Suspense, lazy, useEffect, useReducer, useContext } from "react";
// import { Prompt } from "react-router";
import { Switch, Route, withRouter, useHistory } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import "./App.css";

import axios from "axios";

//MUI
import LinearProgress from "@material-ui/core/LinearProgress";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import themeObject from "./theme";

// import { TransitionGroup } from "react-transition-group";
import { TitleComponent } from "./components/Title/TitleComponent";

//Context & Reducers
import { userReducer, initialState } from "./components/Reducers/UserReducer";
import UserContext from "./components/Context/UserContext";
// import TestContext from "./components/Context/TestContext";
import { SET_STUDENT, SET_ADMIN, SET_USER_TYPE } from "./components/Reducers/types";
import "./ReactTransitions.css";
//Components
const Navbar = lazy(() => import("./components/NavBar/NavBar"));
const Home = lazy(() => import("./components/Home/Home"));
const AboutUs = lazy(() => import("./components/AboutUs/AboutUs"));
const OneOnOneHome = lazy(() => import("./components/Features/OneOnOneHome"));
const OneOnOneLive = lazy(() => import("./components/Features/OneOnOneLive"));
const MasteringAChapter = lazy(() => import("./components/Features/MasteringAChapter"));
const Tests = lazy(() => import("./components/Tests/Test"));
const Faqs = lazy(() => import("./components/Faqs"));
const Footer = lazy(() => import("./components/Home/Footer"));
const Error = lazy(() => import("./components/Error"));
const PostBlog = lazy(() => import("./components/Blogs/Admin/PostBlogs"));
const ShowBlogs = lazy(() => import("./components/Blogs/ShowBlogs"));
const ParticularBlog = lazy(() => import("./components/Blogs/ParticularBlog/ParticularBlog"));
const StudentProfile = lazy(() => import("./components/Student/StudentProfile"));
const Notice = lazy(() => import("./components/Student/ViewNotices"));
const NewPassword = lazy(() => import("./components/Student/NewPassword"));
const ViewResult = lazy(() => import("./components/Student/ViewResult"));
const ContactUs = lazy(() => import("./components/ContactUs/ContactUs"));
const Career = lazy(() => import("./components/Career/Career"));
const PrivacyPolicy = lazy(() => import("./components/Miscellaneous/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./components/Miscellaneous/TermsOfService"));
const CreateTest = lazy(() => import("./components/Admin/CreateTest/CreateTest"));
const MainTest = lazy(() => import("./components/Tests/MainTest"));
const EnrollNewStudent = lazy(() => import("./components/Admin/EnrollNewStudent"));
const EnrolledStudents = lazy(() => import("./components/Admin/EnrolledStudents"));
const AdminSignIn = lazy(() => import("./components/Admin/AdminSignIn"));
const PostNotice = lazy(() => import("./components/Admin/PostNotice"));
const ActiveTests = lazy(() => import("./components/Admin/ActiveTests"));
const ViewQuestions = lazy(() => import("./components/Admin/ViewQuestions"));
const Student = lazy(() => import("./components/Admin/StudentProfileDashboard"));
// const Sitemap = lazy(() => import("./components/Miscellaneous/Sitemap"));

// const Room = lazy(() => import("./components/Room"));

const theme = createMuiTheme(themeObject);

//Proxy only works in developmemt so need to tell this
axios.defaults.baseURL = "https://resillience-test.herokuapp.com/";

// withTitle function
const withTitle = ({ component: Component, title }) => {
	return class Title extends React.Component {
		render() {
			return (
				<React.Fragment>
					<TitleComponent title={title} />
					<Component {...this.props} />
				</React.Fragment>
			);
		}
	};
};

// Adding title
const HomeComponent = withTitle({
	component: Home,
	title: "RESILLIENCE: Personalized Learning with IITians",
});
const AboutUsComponent = withTitle({
	component: AboutUs,
	title: "About Us | RESILLIENCE",
});
const OneOnOneHomeComponent = withTitle({
	component: OneOnOneHome,
	title: "One On One Home Tuition | RESILLIENCE",
});
const OneOnOneLiveComponent = withTitle({
	component: OneOnOneLive,
	title: "One On One Live Tuition | RESILLIENCE",
});
const MasteringAChapterComponent = withTitle({
	component: MasteringAChapter,
	title: "Mastering a week chapter | RESILLIENCE",
});
const TestComponent = withTitle({
	component: Tests,
	title: "Test | RESILLIENCE",
});
const FaqsComponent = withTitle({
	component: Faqs,
	title: "FAQ's | RESILLIENCE",
});
const ContactUsComponent = withTitle({
	component: ContactUs,
	title: "Contact Us | RESILLIENCE",
});
const CareerComponent = withTitle({
	component: Career,
	title: "Career | RESILLIENCE",
});
const PostBlogComponent = withTitle({
	component: PostBlog,
	title: "Post Blog | RESILLIENCE",
});
const PostNoticeComponent = withTitle({
	component: PostNotice,
	title: "Post Notice | RESILLIENCE",
});
const ShowBlogsComponent = withTitle({
	component: ShowBlogs,
	title: "Blogs | RESILLIENCE",
});
const ParticularBlogComponent = withTitle({
	component: ParticularBlog,
	title: "Blogs | RESILLIENCE",
});
const StudentProfileComponent = withTitle({
	component: StudentProfile,
	title: "Dashboard | RESILLIENCE",
});
const ViewResultComponent = withTitle({
	component: ViewResult,
	title: "Test Report | RESILLIENCE",
});
const PrivacyPolicyComponent = withTitle({
	component: PrivacyPolicy,
	title: "Privacy Policy | RESILLIENCE",
});
const TermsOfServiceComponent = withTitle({
	component: TermsOfService,
	title: "Terms of service | RESILLIENCE",
});
const CreateTestComponent = withTitle({
	component: CreateTest,
	title: "Create Test | RESILLIENCE",
});
const MainTestComponent = withTitle({
	component: MainTest,
	title: "Test Section | RESILLIENCE",
});
const EnrollNewStudentComponent = withTitle({
	component: EnrollNewStudent,
	title: "Enroll Student | RESILLIENCE",
});
const EnrolledStudentsComponent = withTitle({
	component: EnrolledStudents,
	title: "Students | RESILLIENCE",
});
const NoticeComponent = withTitle({
	component: Notice,
	title: "Notices | RESILLIENCE",
});
const ActiveTestsComponent = withTitle({
	component: ActiveTests,
	title: "Admin | RESILLIENCE",
});
const ViewQuestionsComponent = withTitle({
	component: ViewQuestions,
	title: "Questions | ADMIN",
});
const NewPasswordComponent = withTitle({
	component: NewPassword,
	title: "Change Password >> RESILLIENCE",
});
// const SitemapComponent = withTitle({ component: Sitemap, title: "Sitemap | RESILLIENCE" });

const ErrorComponent = withTitle({
	component: Error,
	title: "Not Found | RESILLIENCE",
});

//routes
/* eslint-disable */
const Routing = () => {
	const history = useHistory();
	const { userDispatch } = useContext(UserContext);

	//async api call to fetch the user
	const fetchStudent = () => {
		if (localStorage.getItem("student_jwt")) {
			fetch("/api/student-profile", {
				method: "get",
				headers: {
					Authorization: "Bearer " + localStorage.getItem("student_jwt"),
				},
			})
				.then((res) => res.json())
				.then((student) => {
					userDispatch({ type: SET_STUDENT, payload: student.details });
					userDispatch({ type: SET_USER_TYPE, userType: "student" });
					history.push("/student-dashboard");
				})
				.catch((err) => {
					console.log(err);
				});
		} else if (localStorage.getItem("admin_jwt")) {
			fetch("/api/admin-profile", {
				method: "get",
				headers: {
					Authorization: "Bearer " + localStorage.getItem("admin_jwt"),
				},
			})
				.then((res) => res.json())
				.then((admin) => {
					userDispatch({ type: SET_ADMIN, payload: admin.details });
					userDispatch({ type: SET_USER_TYPE, userType: "admin" });
					// history.push("/admin-dashboard");
				})
				.catch((err) => {
					console.log(err);
				});
		} else if (!history.location.pathname.startsWith("/reset-password")) {
			history.push("/");
		}
	};

	useEffect(fetchStudent, []);

	return (
		<Switch>
			<Route exact path="/" component={HomeComponent} />
			<Route path="/aboutus" component={AboutUsComponent} />
			<Route path="/tuitions/one-on-one-home-tuitions" component={OneOnOneHomeComponent} />
			<Route path="/tuitions/one-on-one-online-tuitions" component={OneOnOneLiveComponent} />
			<Route path="/tuitions/mastering-a-week-topic" component={MasteringAChapterComponent} />
			<Route path="/test" component={TestComponent} />
			<Route path="/faqs" component={FaqsComponent} />
			<Route path="/contact-us" component={ContactUsComponent} />
			<Route path="/career" component={CareerComponent} />

			<Route exact path="/blogs" component={ShowBlogsComponent} />
			<Route exact path="/blogs/:id" component={ParticularBlogComponent} />

			<Route path="/privacypolicy" component={PrivacyPolicyComponent} />
			<Route path="/termsofservice" component={TermsOfServiceComponent} />

			{/* student routes */}
			<Route exact path="/student-dashboard" component={StudentProfileComponent} />
			<Route exact path="/student-dashboard/:resultid" component={ViewResultComponent} />
			<Route path="/notices" component={NoticeComponent} />
			<Route path="/maintest" component={MainTestComponent} />
			<Route path="/reset-password/:token" component={NewPasswordComponent} />

			{/* admin routes */}
			<Route exact path="/createtest" component={CreateTestComponent} />
			<Route path="/admin0p-signin" component={AdminSignIn} />
			<Route exact path="/admin-dashboard" component={ActiveTestsComponent} />
			<Route exact path="/admin-dashboard/:testid" component={ViewQuestionsComponent} />
			<Route exact path="/admin/createblogs" component={PostBlogComponent} />
			<Route exact path="/admin/postnotice" component={PostNoticeComponent} />
			<Route path="/enroll-student" component={EnrollNewStudentComponent} />
			<Route exact path="/students" component={EnrolledStudentsComponent} />
			<Route exact path="/students/:studentid" component={Student} />
			<Route exact path="/students/:studentid/:resultid" component={ViewResultComponent} />
			{/* <Route path="/sitemap" component={SitemapComponent} /> */}
			<Route component={ErrorComponent} />
			{/* <Route path="/room" component={RoomComponent} /> */}
		</Switch>
	);
};

/* eslint-disable */
const App = () => {
	const [userState, userDispatch] = useReducer(userReducer, initialState);

	return (
		<UserContext.Provider value={{ userState, userDispatch }}>
			<MuiThemeProvider theme={theme}>
				<Suspense fallback={<LinearProgress color="secondary" style={{ paddingTop: "0.2%" }} />}>
					{/* <TransitionGroup component="div" className="App"> */}
					<div>
						<Navbar />
						<ScrollToTop />
						<Routing />
						{/* <Prompt
							when={state.isStarted === true}
							message={(location) => {
								return location.pathname.startsWith("/maintest")
									? "Test will not be submitted! Are you sure?"
									: false;
							}}
						/> */}
						<Footer />
					</div>
					{/* </TransitionGroup> */}
				</Suspense>
			</MuiThemeProvider>
		</UserContext.Provider>
	);
};

export default withRouter(App);
