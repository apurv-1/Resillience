import React from "react";
import Typography from "@material-ui/core/Typography";

//Images
// import ErrorPage from "../compressed/404Page.svg";

function Error() {
  return (
    <div>
      <br></br>
      <Typography variant="h4" color="primary" style={{ position: "absolute", marginTop: "8%", marginLeft: "16%" }}>
        Page not found
      </Typography>
      <img src="https://res.cloudinary.com/rweb1/image/upload/v1600243274/Assets/images/404Page_umaxug.svg" alt="Error 404" style={{ height: "100vh", width: "98vw" }} />
    </div>
  );
}

export default Error;
