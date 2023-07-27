import React from "react";
import TypeProduct from "../../components/TypeProduct/TypeProduct";
import { WrapperTypeProduct } from "./style";
import SliderComponet from "../../components/SliderComponent/SliderComponet";
import slider1 from "../../assets/images/slider1.webp";
import slider2 from "../../assets/images/slider2.webp";
import slider3 from "../../assets/images/slider3.webp";
import slider4 from "../../assets/images/slider4.webp";

const HomePage = () => {
  const arr = [
    "TV",
    "Tủ lanh",
    "Laptop",
    "Nồi cơm điện",
    "Điện thoại",
    "Xe máy",
    "Đồ gia dụng",
  ];
  return (
    <>
      <div style={{ padding: "0 120px" }}>
        <WrapperTypeProduct>
          {arr.map((item) => {
            return <TypeProduct name={item} key={item} />;
          })}
        </WrapperTypeProduct>
      </div>
      <div id="container" style={{ backgroundColor: "#efefef",padding:"0 120px" }}>
        <SliderComponet arrImages={[slider1, slider2, slider3, slider4]} />
      </div>
    </>
  );
};
export default HomePage;
