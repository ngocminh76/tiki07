import React from "react";
import {
  WrappeContent,
  WrappeLabelText,
  WrappeTextPrice,
  WrappeTextValue,
} from "./style";
import { Checkbox, Rate } from "antd";

const NavbarComponent = () => {
  const onChange = () => {};
  const renderContent = (type, options) => {
    switch (type) {
      case "text":
        return options.map((op) => {
          return <WrappeTextValue>{op}</WrappeTextValue>;
        });
      case "checkbox":
        return (
          <Checkbox.Group
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
            onChange={onChange}
          >
            {options.map((op) => {
              return (
                <Checkbox style={{ marginLeft: 0 }} value={op.value}>
                  {op.label}
                </Checkbox>
              );
            })}
          </Checkbox.Group>
        );
      case "star":
        return options.map((op) => {
          console.log("check", op);
          return (
            <div style={{ display: "flex" }}>
              <Rate style={{ fontSize: "12px" }} disabled defaultValue={op} />
              <span>{`tu ${op}  sao`}</span>
            </div>
          );
        });
      case "price":
        return options.map((op) => {
          return (
            <div>
              <WrappeTextPrice>{op}</WrappeTextPrice>
            </div>
          );
        });
      default:
        return {};
    }
  };
  return (
    <div>
      <WrappeLabelText>
        <WrappeContent>
          {renderContent("text", [
            "Tủ lạnh",
            "TV",
            "Máy giặt",
            "Laptop",
            "Nồi cơm điện",
            "Máy xay sinh tố",
          ])}

          <WrappeContent>
            {renderContent("checkbox", [
              { value: "a", label: "A" },
              { value: "b", label: "B" },
            ])}
          </WrappeContent>

          <WrappeContent>{renderContent("star", [3, 4, 5])}</WrappeContent>
          <WrappeContent>
            {renderContent("price", ["Dưới 40.000", "Trên 50.000"])}
          </WrappeContent>
        </WrappeContent>
      </WrappeLabelText>
    </div>
  );
};

export default NavbarComponent;
