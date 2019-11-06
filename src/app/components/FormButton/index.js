import React from "react";
import PropTypes from "prop-types";
import { Button } from "antd";
import { fm } from "../../helpers/locale";

function FormButton(props) {
  const { isNew, clickCancel, clickOn } = props;
  return (
    <Button.Group style={{ margin: 24 }}>
      <Button onClick={clickOn} type={"primary"}>
        {fm(`button-${isNew ? "create" : "save"}`)}
      </Button>
      <Button onClick={clickCancel} type={"primary"}>
        {fm(`button-${isNew ? "cancel" : "close"}`)}
      </Button>
    </Button.Group>
  );
}
FormButton.prototype = {
  isNew: PropTypes.bool,
  baseUrl: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default FormButton;
