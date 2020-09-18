import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ReactQuill from "react-quill"; // ES6
import "react-quill/dist/quill.snow.css"; // ES6
import "../textEditor.css";
import axios from "axios";

const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ color: [] }, { background: [] }],
    [{ align: [] }],
    [({ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" })],
    ["link", "image", "video"],
    ["clean"]
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false
  }
};

const formats = ["header", "size", "color", "bold", "italic", "underline", "strike", "blockquote", "color", "background", "align", "list", "bullet", "indent", "link", "image", "video"];

const styles = () => ({
  section: {
    padding: "5%"
  },
  blogHeading: {
    textAlign: "center"
  },
  form: {},
  textField: {
    marginTop: "3%"
  },
  editor: {
    marginTop: "2%"
  },
  button: {
    marginTop: "2%"
  }
});

class Blog extends Component {
  state = {
    heading: "",
    description: "",
    editorHtml: "",
    date: "",
    errors: {}
  };

  handleChangeMeta = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleChange = (html) => {
    this.setState({ editorHtml: html });
    // console.log(this.state.editorHtml);
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const blogData = {
      heading: this.state.heading,
      description: this.state.description,
      content: this.state.editorHtml,
      date: this.state.date
    };

    console.log(blogData);
    axios
      .post("/createblogs", blogData)
      .then((res) => {
        console.log(res);
        // console.log(res.data);
        this.setState({
          heading: "",
          description: "",
          editorHtml: "",
          date: ""
        });
        window.alert("Congratulations! Your blog was successfully posted");
        window.location.href = "/blogs";
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response.data);
        this.setState({
          errors: err.response.data
        });
      });
  };

  render() {
    const { classes } = this.props;
    const { errors } = this.state;
    return (
      <div className={classes.section}>
        <Typography variant="h2" color="primary" className={classes.blogHeading}>
          Create a fantastic blog{" "}
          <span role="img" aria-label="star">
            ✨
          </span>
        </Typography>
        <form className={classes.form} noValidate onSubmit={this.handleSubmit}>
          <TextField
            id="outlined-basic"
            name="heading"
            label="Blog Title"
            variant="outlined"
            color="secondary"
            helperText={errors.heading} //error was defined in the backend
            error={errors.heading ? true : false}
            className={classes.textField}
            value={this.state.heading}
            onChange={this.handleChangeMeta}
            autoComplete="off"
            fullWidth
          />
          <TextField
            id="outlined-basic"
            name="description"
            label="Short 10-15 words description"
            variant="outlined"
            color="secondary"
            helperText={errors.description} //error was defined in the backend
            error={errors.description ? true : false}
            className={classes.textField}
            value={this.state.description}
            onChange={this.handleChangeMeta}
            autoComplete="off"
            fullWidth
          />
          <TextField
            id="outlined-basic"
            name="date"
            label="Date Format:(2nd July'20)"
            variant="outlined"
            color="secondary"
            helperText={errors.date} //error was defined in the backend
            error={errors.date ? true : false}
            className={classes.textField}
            value={this.state.date}
            onChange={this.handleChangeMeta}
            autoComplete="off"
            fullWidth
          />
          <ReactQuill
            className={classes.editor}
            name="editor"
            theme="snow"
            modules={modules}
            formats={formats}
            onChange={this.handleChange}
            value={this.state.editorHtml || ""}
            placeholder={this.props.placeholder}
          />
          <Button type="submit" variant="contained" color="secondary" className={classes.button} size="large" fullWidth>
            Submit Blog
          </Button>
        </form>
      </div>
    );
  }
}

export default withStyles(styles)(Blog);
