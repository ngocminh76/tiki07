import { Image } from "antd";
import React from "react";
import { WrapperSliderStyle } from "./style";

const SliderComponet = ({ arrImages }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  };
  return (
    <WrapperSliderStyle {...settings}>
      {arrImages.map((img) => {
        return (
          <Image
            src={img}
            alt="slider"
            preview={false}
            width="100%"
            height="360px"
          />
        );
      })}
    </WrapperSliderStyle>
  );
};

export default SliderComponet;
