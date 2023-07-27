import { Image } from "antd";
import React from "react";
import Slider from "react-slick";
const SliderComponet = ({ arrImages }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000
  };
  return (
    <Slider {...settings}>
      {arrImages.map((img) => {
        return (
          <Image
            src={img}
            alt="slider"
            preview={false}
            width="100%"
            height="474px"
          />
        );
      })}
    </Slider>
  );
};

export default SliderComponet;
