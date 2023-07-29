import React from "react";
import NavbarComponent from "../../components/NavbarComponent/NavbarComponent";
import CardComponent from "../../components/CardComponent/CardComponent";
import { Col, Pagination, Row } from "antd";
import { WrappeProducts, WrapperNavBar } from "./style";

const TypeProductPage = () => {
  const onChange = () => {};
  return (
    <div style={{ padding: "0 120px", background: "#efefef" }}>
      <Row
        style={{
          flexWrap: "nowrap",
          paddingTop: "10px",
        }}
      >
        <WrapperNavBar span={4}>
          <NavbarComponent />
        </WrapperNavBar>

        <Col span={20}>
          <WrappeProducts>
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
          </WrappeProducts>
          <Pagination
            defaultCurrent={2}
            total={100}
            onChange={onChange}
            style={{ textAlign: "center", marginTop: "10px" }}
          />
        </Col>
      </Row>
    </div>
  );
};

export default TypeProductPage;
