import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  //BrowserRouter passes the the current URL path down to its children
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);

// const rootElement = document.getElementById("root");

// if (rootElement.hasChildNodes()) {
//   ReactDOM.hydrate(
//     <Router>
//       <App />
//     </Router>,
//     rootElement
//   );
// } else {
//   ReactDOM.render(
//     <Router>
//       <App />
//     </Router>,
//     rootElement
//   );
// }
