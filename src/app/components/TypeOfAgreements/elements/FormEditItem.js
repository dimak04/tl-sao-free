import React from "react";
import uuid from "uuid";
import { fm } from "../../../helpers/locale";
import { push } from "../../../actions/router";
import { Form, Input } from "antd";
import FormButton from "../../FormButton";

class FormEditItem extends React.Component {
  onClick = () => {
    const { createTypeOfAgreement, updateTypeOfAgreement } = this.props.actions;
    const { typeOfAgreement } = this.props;
    if (typeOfAgreement.id) {
      updateTypeOfAgreement(typeOfAgreement.id, typeOfAgreement);
    } else {
      createTypeOfAgreement(typeOfAgreement);
    }
    this.goToTypeOfAgreements();
  };

  goToTypeOfAgreements = () => {
    const { baseUrl } = this.props;
    push(`${baseUrl}`);
  };

  onChange = e => {
    const { actions } = this.props;
    actions.editTypeOfAgreement(e.target.name, e.target.value);
  };

  render() {
    const { typeOfAgreement } = this.props;
    const isNew = !typeOfAgreement.id ? true : false;
    return (
      <Form layout="vertical" style={{ margin: 4 }}>
        <Form.Item label={fm("label-name")} labelAlign="left" colon={true}>
          <Input
            name="name"
            value={typeOfAgreement.name}
            id={uuid.v4()}
            onChange={this.onChange}
          />
        </Form.Item>
        <Form.Item>
          <FormButton
            isNew={isNew}
            clickOn={this.onClick}
            clickCancel={this.goToTypeOfAgreements}
          />
        </Form.Item>
      </Form>
    );
  }
}

export default FormEditItem;
