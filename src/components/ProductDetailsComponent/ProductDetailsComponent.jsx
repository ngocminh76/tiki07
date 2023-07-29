import { Col, Row } from "antd";
import React from "react";
import imageProduct from "../../assets/images/biaconan.webp";
import imageProductSmall from "../../assets/images/bia1.webp";
import { WrapperStyleColImage, WrapperStyleImageSmall } from "./style";

const ProductDetailsComponent = () => {
  return (
    <Row style={{padding:'16px',background:'#fff'}} >
      <Col span={10}>
        <WrapperStyleImageSmall src={imageProduct} alt="imageProduct" preview={false}/>
        <Row style={{paddingTop:"10px" , justifyContent:'space-between'}}>
          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall
              src={imageProductSmall}
              alt="imageProductSmall"
              preview={false}
            />
          </WrapperStyleColImage>
          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall
              src={imageProductSmall}
              alt="imageProductSmall"
              preview={false}
            />
          </WrapperStyleColImage>
          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall
              src={imageProductSmall}
              alt="imageProductSmall"
              preview={false}
            />
          </WrapperStyleColImage>
          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall
              src={imageProductSmall}
              alt="imageProductSmall"
              preview={false}
            />
          </WrapperStyleColImage>
          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall
              src={imageProductSmall}
              alt="imageProductSmall"
              preview={false}
            />
          </WrapperStyleColImage>
          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall
              src={imageProductSmall}
              alt="imageProductSmall"
              preview={false}
            />
          </WrapperStyleColImage>
        </Row>
      </Col>
      <Col span={14}>col-14</Col>
    </Row>
  );
};

export default ProductDetailsComponent;
