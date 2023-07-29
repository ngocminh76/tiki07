import React from "react";
import logo from "../../assets/images/logo.png";
import {
  StyleNameProduct,
  WrappeDiscountText,
  WrappePriceText,
  WrapperCardStyle,
  WrapperImageStyle,
  WrapperReportText,
} from "./style";
import { StarFilled } from "@ant-design/icons";
import { WrapperStyleTextSell } from "../ProductDetailsComponent/style";

const CardComponent = () => {
  return (
    <WrapperCardStyle
      hoverable
      headStyle={{ width: "200px", height: "200px" }}
      style={{ width: 200 }}
      cover={
        <img
          alt="example"
          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        />
      }
    >
      <WrapperImageStyle src={logo} alt="logo" />
      <StyleNameProduct>IPhone</StyleNameProduct>
      <WrapperReportText>
        <span style={{ marginRight: "4px" }}>
          <span> 4.95 </span>
          <StarFilled style={{ fontSize: "12px", color: "yellow" }} />
        </span>
        <WrapperStyleTextSell> | Đã bán 1000+</WrapperStyleTextSell>
      </WrapperReportText>
      <WrappePriceText>
        <span style={{ marginRight: "8px" }}> 1.000.000 đ</span>
        <WrappeDiscountText>-5%</WrappeDiscountText>
      </WrappePriceText>
    </WrapperCardStyle>
  );
};

export default CardComponent;
