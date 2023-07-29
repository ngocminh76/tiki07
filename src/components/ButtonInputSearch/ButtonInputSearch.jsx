import { SearchOutlined } from "@ant-design/icons";
import React from "react";
import InputComponent from "../InputComponent/InputComponent";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

const ButtonInputSearch = (props) => {
  const {
    size,
    placeholder,
    textButton,
    bordered = false,
    backgroundColorInput = "#fff",
    backgroundColorButton = "rgb(13,92,182)",
    colorButton = "#fff",
  } = props;
  return (
    <div style={{ display: "flex" }}>
      <InputComponent
        size={size}
        placeholder={placeholder}
        bordered={bordered}
        style={{ backgroundColor: backgroundColorInput }} 
      />
      <ButtonComponent
        size={size}
        styleButton={{
          background: backgroundColorButton,
          border: !bordered && "none",
        }}
        icon={<SearchOutlined style={{ color: colorButton }} />}
        textButton={textButton}
        borderRadius={0}
        styleTextButton={{ color: colorButton }}
      ></ButtonComponent>
    </div>
  );
};

export default ButtonInputSearch;
