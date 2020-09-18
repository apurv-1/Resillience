import React from "react";
// import "react-quill/dist/quill.snow.css"; // ES6
import parse from "html-react-parser";
import "../textEditor.css";

class BlogContent extends React.Component {
  render() {
    const strHtml = this.props.html;
    return <div className="ql-editor">{parse(strHtml)}</div>;
  }
}

//    <h2 class="ql-align-center">Home&nbsp;<strong>Tuition for IIT- JEE / NEET in Mumbai</strong></h2><p class="ql-align-center"><br></p><p class="ql-align-center"><img border="0" data-original-height="706" data-original-width="706" height="320" src="https://1.bp.blogspot.com/-GNg9YgF7vj8/XqeJRO4W3nI/AAAAAAAAAkA/kXY6h6I7kes2pgIDWoLcZme64cLKuTiMwCLcBGAsYHQ/s320/circle-cropped-abhinav.png" width="320"></p><h4>Why Home Tuitions IIT-JEE / NEET Preparation?</h4><p><br></p><p><strong style="background-color: rgb(255, 255, 255); color: rgb(40, 40, 41);"><em>Before going to that, let's understand the problem in depth, why are people going for organized home tuitions these days. The answer is really going to help you.</em></strong></p><p><br></p><p>What happens is everything will be fine. Just give some time to it.</p>

export default BlogContent;
