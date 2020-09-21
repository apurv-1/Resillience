import React from "react";
import Slider from "react-slick";

import withStyles from "@material-ui/core/styles/withStyles";

const styles = () => ({
  iframe: {
    width: "400px",
    height: "200px",
    "@media only screen and (max-width: 1025px)": {
      width: "300px",
      height: "150px"
    }
  }
});

class VideoSub extends React.Component {
  render() {
    const { classes } = this.props;
    var settings = {
      dots: true,
      autoplay: true,
      infinite: true,
      speed: 3000,
      autoplaySpeed: 7000,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 1000,
          settings: {
            autoplay: true,
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 720,
          settings: {
            autoplay: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            autoplay: true,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <Slider {...settings}>
        {["sh0EGUheef8", "1H72tRzG5TU", "cbBB-unybLA", "lv-YIJC1xWo", "PBwslCZRnaU", "w2zQ4lMFoMg", "gwNaLLQUHgs", "ubWLlaTN3Fw", "s6mvwNxPJ6g"].map((value, index) => (
          <div key={index}>
            <iframe
              title="Youtube"
              aria-hidden="true"
              className={classes.iframe}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              webkitallowfullscreen="true"
              mozallowfullscreen="true"
              srcDoc={`<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/${value}/?autoplay=1><img src=https://img.youtube.com/vi/${value}/hqdefault.jpg alt='Resillience Teacher Videos'><span>▶</span></a>`}
            ></iframe>
          </div>
        ))}
      </Slider>
    );
  }
}

export default withStyles(styles)(VideoSub);
