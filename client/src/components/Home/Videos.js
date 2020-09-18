import React from "react";
import Typography from "@material-ui/core/Typography";
// import CircularProgress from "@material-ui/core/CircularProgress";

const VideoSub = React.lazy(() => import("./VideoSub"));

class Videos extends React.Component {
  render() {
    return (
      <div style={{ padding: "40px", position: "relative" }}>
        <Typography variant="h3" color="primary" style={{ margin: "5%", textAlign: "center", letterSpacing: "-1.5px" }}>
          Watch our teachers in action
        </Typography>
        <VideoSub />
      </div>
    );
  }
}

export default Videos;
