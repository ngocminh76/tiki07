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
      <WrapperImageStyle src={logo} alt="logo"/>
      <StyleNameProduct>IPhone</StyleNameProduct>
      <WrapperReportText>
        <span style={{ marginRight: "4px" }}>
          <span> 4.95 </span>
          <StarFilled style={{ fontSize: "12px", color: "yellow" }} />
        </span>
        <span> | Đã bán 1000+</span>
      </WrapperReportText>
      <WrappePriceText>
        1.000.000 đ<WrappeDiscountText>-5%</WrappeDiscountText>
      </WrappePriceText>
    </WrapperCardStyle>
  );
};

export default CardComponent;
