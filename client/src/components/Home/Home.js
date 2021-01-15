import React from "react";
import LandingPage from "./HomeLandingPage";
import HomeFeatures from "./Home-Features";
import BetterLearning from "./BetterLearning";
import Milestones from "./Milestones";
import Videos from "./Videos";
import Testimonials from "./Testimonials";

export default class Home extends React.Component {
  render() {
    return (
      <div
        className="page"
        style={{
          display: "flex",
          flexDirection: "column"
        }}
      >
        <LandingPage />
        <HomeFeatures />
        <BetterLearning />
        <Milestones />
        <Videos />
        <Testimonials />
      </div>
    );
  }
}
