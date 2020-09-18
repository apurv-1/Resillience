import React, { Component } from "react";
import "react-quill/dist/quill.snow.css"; // ES6
import "./textEditor.css";
// import Image from "../../compressed/blogImage.svg";

//Material Ui
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import axios from "axios";

const styles = () => ({
  root: {
    margin: "0 25% 5% 25%",
    backgroundColor: "#EEEEEE",
    "@media only screen and (max-width: 770px)": {
      margin: "5% 10% 5% 10%",
      overflowX: "hidden"
    }
  },
  section: {
    marginTop: "4.2%",
    "@media only screen and (max-width: 770px)": {
      marginTop: "50px"
    }
  },
  image: {
    paddingBottom: "10%",
    width: "100%",
    "@media only screen and (max-width: 970px)": {
      width: "100%"
    }
  },
  blogHeading: {
    textAlign: "center"
  },
  description: {
    fontSize: "20px"
  }
});

class Blog extends Component {
  state = {
    heading: "",
    description: "",
    date: "",
    blogArray: []
  };

  componentDidMount = () => {
    axios.get("/blogs").then((res) => {
      // console.log(res.data.blogs);
      this.setState({
        blogArray: res.data.blogs
      });
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <img alt="BlogsBold" src="https://res.cloudinary.com/rweb1/image/upload/v1600243277/Assets/images/blogImage_h5fiap.svg" className={classes.image}></img>
        <div className={classes.grid}>
          {this.state.blogArray.map((eachBlog, index) => (
            <Card className={classes.root} key={index}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Scenery"
                  height="250"
                  className={classes.media}
                  image="https://res.cloudinary.com/rweb1/image/upload/v1600321493/Assets/images/abhinav-blog-cover_dabuit.png"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h4" component="h2">
                    {eachBlog.heading}
                  </Typography>
                  <Typography gutterBottom variant="body1" component="h2">
                    {eachBlog.date}
                  </Typography>
                  <Typography className={classes.description} color="textSecondary" component="h2">
                    {eachBlog.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="large"
                  color="secondary"
                  onClick={() => {
                    window.location.href = `/blogs/${eachBlog._id}`;
                  }}
                >
                  Read More...
                </Button>
              </CardActions>
            </Card>
          ))}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Blog);
