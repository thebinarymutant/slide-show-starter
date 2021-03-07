import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const slideImages = [
  "https://s3.ap-south-1.amazonaws.com/cityflo.com/protect/homepagehero22.jpg",
  "https://s3.ap-south-1.amazonaws.com/cityflo.com/protect/homepagehero33.jpg",
  "https://s3.ap-south-1.amazonaws.com/cityflo.com/protect/homepagehero66.jpg"
];

const Slideshow = () => {
  return (
    <div>
      <Slide duration={1000} easing="ease">
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[0]})` }}>
            <span>Slide 1</span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[1]})` }}>
            <span>Slide 2</span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[2]})` }}>
            <span>Slide 3</span>
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default Slideshow;
