import React from "react";
import uuid from "uuid";
import { fm } from "../../../helpers/locale";
import { push } from "../../../actions/router";
import { Form, Input } from "antd";
import FormButton from "../../FormButton";

class FormEditItem extends React.Component {
  onClick = () => {
    const { createPosition, updatePosition } = this.props.actions;
    const { position } = this.props;
    if (position.id) {
      updatePosition(position.id, position);
    } else {
      createPosition(position);
    }
    this.goToPositions();
  };

  goToPositions = () => {
    const { baseUrl } = this.props;
    push(`${baseUrl}`);
  };

  onChange = e => {
    const { actions } = this.props;
    actions.editPosition(e.target.name, e.target.value);
  };

  render() {
    const { position } = this.props;
    const isNew = !position.id ? true : false;
    return (
      <Form layout="vertical" style={{ margin: 4 }}>
        <Form.Item label={fm("label-name")} labelAlign="left" colon={true}>
          <Input
            name="name"
            value={position.name}
            id={uuid.v4()}
            onChange={this.onChange}
          />
        </Form.Item>
        <Form.Item>
          <FormButton
            isNew={isNew}
            clickOn={this.onClick}
            clickCancel={this.goToPositions}
          />
        </Form.Item>
      </Form>
    );
  }
}

export default FormEditItem;
