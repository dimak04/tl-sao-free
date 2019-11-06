import React from "react";
import uuid from "uuid";
import { Form, Input } from "antd";
import { fm } from "../../../helpers/locale";
import { push } from "../../../actions/router";
import FormButton from "../../FormButton";

class FormEditItem extends React.Component {
  onClick = () => {
    const { createTypeOfDelivery, updateTypeOfDelivery } = this.props.actions;
    const { typeOfDelivery } = this.props;
    if (typeOfDelivery.id) {
      updateTypeOfDelivery(typeOfDelivery.id, typeOfDelivery);
    } else {
      createTypeOfDelivery(typeOfDelivery);
    }
    this.goToTypeOfDeliveries();
  };

  goToTypeOfDeliveries = () => {
    const { baseUrl } = this.props;
    push(`${baseUrl}`);
  };

  onChange = e => {
    const { actions } = this.props;
    actions.editTypeOfDelivery(e.target.name, e.target.value);
  };

  render() {
    const { typeOfDelivery } = this.props;
    const isNew = !typeOfDelivery.id ? true : false;
    return (
      <Form layout="vertical" style={{ margin: 4 }}>
        <Form.Item label={fm("label-name")} labelAlign="left" colon={true}>
          <Input
            name="name"
            value={typeOfDelivery.name}
            id={uuid.v4()}
            onChange={this.onChange}
          />
        </Form.Item>
        <Form.Item>
          <FormButton
            isNew={isNew}
            clickOn={this.onClick}
            clickCancel={this.goToTypeOfDeliveries}
          />
        </Form.Item>
      </Form>
    );
  }
}

export default FormEditItem;
