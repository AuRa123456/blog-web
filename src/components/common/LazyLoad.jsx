import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const LazyLoad = ({ classes, image }) => {
  return (
    <LazyLoadImage
      effect='blur'
      className={classes}
      src={image}
      width={image}
    />
  );
};

export default LazyLoad;
