import React, { Suspense, lazy, useEffect, createContext, useReducer, useContext } from "react";
import { Redirect } from "react-router";
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

import { StudentReducer, InitialState } from "./components/Reducers/Reducer";
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
const ContactUs = lazy(() => import("./components/ContactUs/ContactUs"));
const Career = lazy(() => import("./components/Career/Career"));
const PrivacyPolicy = lazy(() => import("./components/Miscellaneous/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./components/Miscellaneous/TermsOfService"));
const CreateTest = lazy(() => import("./components/Tests/CreateTest/CreateTest"));
const FetchTest = lazy(() => import("./components/Tests/FetchTest"));
const MainTest = lazy(() => import("./components/Tests/MainTest"));
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
const FetchTestComponent = withTitle({
	component: FetchTest,
	title: "Test Section | RESILLIENCE",
});
const MainTestComponent = withTitle({
	component: MainTest,
	title: "Test Section | RESILLIENCE",
});
// const SitemapComponent = withTitle({ component: Sitemap, title: "Sitemap | RESILLIENCE" });

const ErrorComponent = withTitle({
	component: Error,
	title: "Not Found | RESILLIENCE",
});

//context api
export const Context = createContext();

//routes
/* eslint-disable */
const Routing = () => {
	const history = useHistory();
	const { dispatch } = useContext(Context);

	const fetchStudent = () => {
		if (localStorage.getItem("student_jwt")) {
			const student = JSON.parse(localStorage.getItem("student"));
			if (student) {
				dispatch({ type: "STUDENT", payload: student });
			} else {
				history.push("/");
			}
		} else if (localStorage.getItem("admin_jwt")) {
			const admin = JSON.parse(localStorage.getItem("admin"));
			if (admin) {
				dispatch({ type: "ADMIN", payload: admin });
			} else {
				history.push("/");
			}
		}

		// const student = JSON.parse(localStorage.getItem("student"));
		// const admin = JSON.parse(localStorage.getItem("admin"));
		// if (student) {
		// 	dispatch({ type: "STUDENT", payload: student });
		// }
		//  else if (admin_jwt) {
		// 	dispatch({ type: "ADMIN", payload: admin });
		// }
		else {
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
			<Route path="/createtest" component={CreateTestComponent} />
			<Route path="/fetchtest" component={FetchTestComponent} />
			{/* <Prompt when={false} message={() => "Test will not be submitted! Are you sure?"}> */}
			<Route path="/maintest" component={MainTestComponent} />
			{/* </Prompt> */}
			<Route path="/faqs" component={FaqsComponent} />
			<Route path="/contact-us" component={ContactUsComponent} />
			<Route path="/career" component={CareerComponent} />
			<Route path="/admin/createblogs" component={PostBlogComponent} />
			<Route exact path="/blogs" component={ShowBlogsComponent} />
			<Route exact path="/blogs/:id" component={ParticularBlogComponent} />
			<Route path="/student-dashboard" component={StudentProfileComponent} />
			<Route path="/privacypolicy" component={PrivacyPolicyComponent} />
			<Route path="/termsofservice" component={TermsOfServiceComponent} />
			{/* <Route path="/sitemap" component={SitemapComponent} /> */}
			<Route component={ErrorComponent} />
			{/* <Route path="/room" component={RoomComponent} /> */}
		</Switch>
	);
};

/* eslint-disable */
const App = () => {
	const [state, dispatch] = useReducer(StudentReducer, InitialState);

	return (
		<Context.Provider value={{ state, dispatch }}>
			<MuiThemeProvider theme={theme}>
				<Suspense fallback={<LinearProgress color="secondary" style={{ paddingTop: "0.2%" }} />}>
					{/* <TransitionGroup component="div" className="App"> */}
					<div>
						<Navbar />
						<ScrollToTop />
						<Routing />
						<Footer />
					</div>
					{/* </TransitionGroup> */}
				</Suspense>
			</MuiThemeProvider>
		</Context.Provider>
	);
};

export default withRouter(App);
