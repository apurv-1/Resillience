import React, { Component } from "react";
import BlogContent from "./BlogContent";
import Grid from "@material-ui/core/Grid";
import SidebarAbout from "./SidebarAbout";
import SidebarSocial from "./SidebarSocial";

import Card from "@material-ui/core/Card";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import "react-quill/dist/quill.snow.css"; // ES6
import "../textEditor.css";

//Material Ui

import axios from "axios";

const styles = () => ({
  image: {
    display: "flex",
    padding: "5%",
    marginTop: "2%",
    justifyContent: "space-between",
    "@media only screen and (max-width: 770px)": {
      marginTop: "8%"
    }
  },
  section: {
    backgroundColor: "white"
    // width: "70%"
  },
  heading: {
    paddingTop: "2%",
    textAlign: "center",
    letterSpacing: "-1px"
  },
  date: {
    fontSize: "20px",
    padding: "12px 15px"
  },
  sidebar: {
    display: "flex",
    flexDirection: "column"
    // width: "28%"
  }
});

class ParticularBlog extends Component {
  state = {
    heading: "",
    date: "",
    content: ""
  };

  componentDidMount = () => {
    const id = this.props.match.params.id; // Get id handle from the route parameter.
    axios.get(`/blogs/${id}`).then((res) => {
      // console.log(res.data.blog.content);
      this.setState({
        heading: res.data.blog.heading,
        date: res.data.blog.date,
        content: res.data.blog.content
      });
    });
  };

  render() {
    const { classes } = this.props;
    //Need to parse the html string
    return (
      <Grid container spacing={4} className={classes.image}>
        <Grid item md={9} sm={12} style={{ width: "100%" }}>
          <Card className={classes.section}>
            <Typography gutterBottom variant="h3" component="h2" className={classes.heading}>
              {this.state.heading}
            </Typography>
            <Typography gutterBottom component="h2" color="textSecondary" className={classes.date}>
              {this.state.date}
            </Typography>
            <BlogContent html={this.state.content} style={{ overflowX: "hidden" }} />
          </Card>
        </Grid>
        <Grid item md={3} sm={12}>
          <div className={classes.sidebar}>
            <SidebarAbout />
            <SidebarSocial />
          </div>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(ParticularBlog);
