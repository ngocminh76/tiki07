import React from "react";
import TypeProduct from "../../components/TypeProduct/TypeProduct";
import { WrappeButtonMore, WrappeProducts, WrapperTypeProduct } from "./style";
import SliderComponet from "../../components/SliderComponent/SliderComponet";
import slider1 from "../../assets/images/slider1.webp";
import slider2 from "../../assets/images/slider2.webp";
import slider3 from "../../assets/images/slider3.webp";
import slider4 from "../../assets/images/slider4.webp";
import CardComponent from "../../components/CardComponent/CardComponent";

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
      <div
        id="container"
        style={{
          backgroundColor: "#efefef",
          padding: "0 120px",
          height: "1000px",
          width: "100%",
        }}
      >
        <SliderComponet arrImages={[slider1, slider2, slider3, slider4]} />
        <WrappeProducts>
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />

        </WrappeProducts>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginTop: "10px",
          }}
        >
          <WrappeButtonMore
            textButton="Xem thêm"
            type="outline"
            styleButton={{
              border: "1px solid rgb(11,116,229)",
              color: "rgb(11,116,229)",
              height: "38px",
              width: "240px",
              borderRadius: "4px",
            }}
            styleTextButton={{ fontWeight: 500 }}
          ></WrappeButtonMore>
        </div>
      </div>
    </>
  );
};
export default HomePage;
