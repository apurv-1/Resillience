import React, { Suspense, lazy, useEffect, useReducer, useContext } from "react";

import { Switch, Route, withRouter, useHistory } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import "./App.css";
import axios from "axios";

//MUI
import LinearProgress from "@material-ui/core/LinearProgress";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import themeObject from "./theme";

import { TitleComponent } from "./components/Title/TitleComponent";

//Context & Reducers
import { userReducer, initialState } from "./components/Reducers/UserReducer";
import UserContext from "./components/Context/UserContext";

// import TestContext from "./components/Context/TestContext";
import { SET_STUDENT, SET_ADMIN, SET_USER_TYPE } from "./components/Reducers/types";

//Components
const Navbar = lazy(() => import("./components/NavBar/NavBar"));
const Home = lazy(() => import("./components/Home/Home"));
const AboutUs = lazy(() => import("./components/AboutUs/AboutUs"));
const OneOnOneHome = lazy(() => import("./components/Features/OneOnOneHome"));
const OneOnOneLive = lazy(() => import("./components/Features/OneOnOneLive"));
const MasteringAChapter = lazy(() => import("./components/Features/MasteringAChapter"));
const Tests = lazy(() => import("./components/PublicTests/Test"));
const ParticularSubject = lazy(() => import("./components/PublicTests/ParticularSubject"));
const Faqs = lazy(() => import("./components/Faqs"));
const Footer = lazy(() => import("./components/Home/Footer"));
const Error = lazy(() => import("./components/Error"));
const PostBlog = lazy(() => import("./components/Blogs/Admin/PostBlogs"));
const ShowBlogs = lazy(() => import("./components/Blogs/ShowBlogs"));
const ParticularBlog = lazy(() => import("./components/Blogs/ParticularBlog/ParticularBlog"));
const ContactUs = lazy(() => import("./components/ContactUs/ContactUs"));
const Career = lazy(() => import("./components/Career/Career"));
const PrivacyPolicy = lazy(() => import("./components/Miscellaneous/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./components/Miscellaneous/TermsOfService"));
const ReferralScheme = lazy(() => import("./components/Miscellaneous/ReferralScheme"));
const StudentProfile = lazy(() => import("./components/Student/StudentProfile"));
const Notice = lazy(() => import("./components/Student/ViewNotices"));
const NewPassword = lazy(() => import("./components/Student/NewPassword"));
const ViewResult = lazy(() => import("./components/Student/ViewResult"));
const CreateTest = lazy(() => import("./components/Admin/CreateTest/CreateTest"));
const MainTest = lazy(() => import("./components/Tests/MainTest"));
const EnrollNewStudent = lazy(() => import("./components/Admin/EnrollNewStudent"));
const EnrolledStudents = lazy(() => import("./components/Admin/EnrolledStudents"));
const AdminSignIn = lazy(() => import("./components/Admin/AdminSignIn"));
const PostNotice = lazy(() => import("./components/Admin/PostNotice"));
const ActiveTests = lazy(() => import("./components/Admin/ActiveTests"));
const ViewQuestions = lazy(() => import("./components/Admin/ViewQuestions"));
const Student = lazy(() => import("./components/Admin/StudentProfileDashboard"));

const theme = createMuiTheme(themeObject);

//Proxy only works in developmemt so need to tell this
axios.defaults.baseURL = window.location.protocol + "//resillience.in";

//For development
// axios.defaults.baseURL = window.location.protocol + "//localhost:5000";

// withTitle function
const withTitle = ({ component: Component, title, description }) => {
	return class Title extends React.Component {
		render() {
			return (
				<React.Fragment>
					<TitleComponent title={title} description={description} />
					<Component {...this.props} />
				</React.Fragment>
			);
		}
	};
};

// Adding title

//Public routes
const HomeComponent = withTitle({
	component: Home,
	title: "RESILLIENCE: Personalized Learning with IITians",
	description:
		"IIT/NEET/MHT-CET/Foundation - 8th 9th & 10th (Personalized Home/Online Tuitions) Preparation under Personal attention of IITians",
});
const AboutUsComponent = withTitle({
	component: AboutUs,
	title: "About Us | RESILLIENCE",
	description:
		"We are a team of IIT graduate mentors, and dedicated professionals with a single goal to provide perfect and result oriented solution for IIT/NEET preparation",
});
const OneOnOneHomeComponent = withTitle({
	component: OneOnOneHome,
	title: "One On One Home Tuition | RESILLIENCE",
	description:
		"1-on-1 Home Tuition in Mumbai. IIT JEE (Main + Advanced), NEET, Foundation (8th - 10th)",
});
const OneOnOneLiveComponent = withTitle({
	component: OneOnOneLive,
	title: "One On One Live Tuition | RESILLIENCE",
	description:
		"1-on-1 Live Online Tuition. IIT JEE (Main + Advanced), NEET, Foundation (8th - 10th)",
});
const MasteringAChapterComponent = withTitle({
	component: MasteringAChapter,
	title: "Mastering a week topic | RESILLIENCE",
	description: "Mastering a weak topic. Both Home & Online Mode. IIT JEE (Main + Advanced), NEET",
});

const TestComponent = withTitle({
	component: Tests,
	title: "Test | RESILLIENCE",
	description: "Online chapter wise test of all the subjects",
});
const ParticularSubjectComponent = withTitle({
	component: ParticularSubject,
	title: "Test | RESILLIENCE",
	description: "Online chapter wise test of all the subjects",
});

const FaqsComponent = withTitle({ component: Faqs, title: "FAQ's | RESILLIENCE" });
const ContactUsComponent = withTitle({ component: ContactUs, title: "Contact Us | RESILLIENCE" });
const CareerComponent = withTitle({
	component: Career,
	title: "Career | RESILLIENCE",
	description:
		"Come and work together for in the vision of empowering every corner of India by providing Affordable and Quality personalized attention in education at home",
});

//Blogs
const ShowBlogsComponent = withTitle({ title: "Blogs | RESILLIENCE", component: ShowBlogs });
const ParticularBlogComponent = withTitle({
	component: ParticularBlog,
	title: "Blogs | RESILLIENCE",
});
const PostBlogComponent = withTitle({ component: PostBlog, title: "Post Blog | RESILLIENCE" });

//Notice
const NoticeComponent = withTitle({ component: Notice, title: "Notices | RESILLIENCE" });
const PostNoticeComponent = withTitle({
	component: PostNotice,
	title: "Post Notice | RESILLIENCE",
});

//Student
const StudentProfileComponent = withTitle({
	component: StudentProfile,
	title: "Dashboard | RESILLIENCE",
});
const ViewResultComponent = withTitle({
	component: ViewResult,
	title: "Test Report | RESILLIENCE",
});

//Test
const CreateTestComponent = withTitle({
	component: CreateTest,
	title: "Create Test | RESILLIENCE",
});
const MainTestComponent = withTitle({ component: MainTest, title: "Test Section | RESILLIENCE" });

//Admin
const EnrollNewStudentComponent = withTitle({
	component: EnrollNewStudent,
	title: "Enroll Student | RESILLIENCE",
});
const EnrolledStudentsComponent = withTitle({
	component: EnrolledStudents,
	title: "Students | RESILLIENCE",
});
const ActiveTestsComponent = withTitle({ component: ActiveTests, title: "Admin | RESILLIENCE" });
const ViewQuestionsComponent = withTitle({ component: ViewQuestions, title: "Questions | ADMIN" });
const NewPasswordComponent = withTitle({
	component: NewPassword,
	title: "Change Password >> RESILLIENCE",
});

//Miscellaneous
const ReferralSchemeComponent = withTitle({
	component: ReferralScheme,
	title: "Referral Scheme | RESILLIENCE",
	description: "Help others being RESILLIENT!",
});
const ErrorComponent = withTitle({ component: Error, title: "Not Found | RESILLIENCE" });
const PrivacyPolicyComponent = withTitle({
	component: PrivacyPolicy,
	title: "Privacy Policy | RESILLIENCE",
});
const TermsOfServiceComponent = withTitle({
	component: TermsOfService,
	title: "Terms of service | RESILLIENCE",
});

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
		} else if (
			!history.location.pathname.startsWith("/reset-password") &&
			!history.location.pathname.startsWith("/tuitions")
		) {
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

			<Route exact path="/test" component={TestComponent} />
			<Route exact path="/test/:subject" component={ParticularSubjectComponent} />

			<Route path="/faqs" component={FaqsComponent} />
			<Route path="/contact-us" component={ContactUsComponent} />
			<Route path="/career" component={CareerComponent} />
			<Route path="/referralscheme" component={ReferralSchemeComponent} />
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
			<Route component={ErrorComponent} />
		</Switch>
	);
};

const App = () => {
	const [userState, userDispatch] = useReducer(userReducer, initialState);

	return (
		<UserContext.Provider value={{ userState, userDispatch }}>
			<MuiThemeProvider theme={theme}>
				<Suspense fallback={<LinearProgress color="secondary" style={{ paddingTop: "0.2%" }} />}>
					<Navbar />
					<ScrollToTop />
					<Routing />
					<Footer />
				</Suspense>
			</MuiThemeProvider>
		</UserContext.Provider>
	);
};

export default withRouter(App);
