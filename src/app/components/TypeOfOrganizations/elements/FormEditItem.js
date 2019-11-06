import React from "react";
import uuid from "uuid";
import { fm } from "../../../helpers/locale";
import { push } from "../../../actions/router";
import { Form, Input } from "antd";
import FormButton from "../../FormButton";

class FormEditItem extends React.Component {
  onClick = () => {
    const {
      createTypeOfOrganization,
      updateTypeOfOrganization
    } = this.props.actions;
    const { typeOfOrganization } = this.props;
    if (typeOfOrganization.id) {
      updateTypeOfOrganization(typeOfOrganization.id, typeOfOrganization);
    } else {
      createTypeOfOrganization(typeOfOrganization);
    }
    this.goToTypeOfOrganizations();
  };

  goToTypeOfOrganizations = () => {
    const { baseUrl } = this.props;
    push(`${baseUrl}`);
  };

  onChange = e => {
    const { actions } = this.props;
    actions.editTypeOfOrganization(e.target.name, e.target.value);
  };

  render() {
    const { typeOfOrganization } = this.props;
    const isNew = !typeOfOrganization.id ? true : false;
    return (
      <Form layout="vertical" style={{ margin: 4 }}>
        <Form.Item label={fm("label-name")} labelAlign="left" colon={true}>
          <Input
            name="name"
            value={typeOfOrganization.name}
            id={uuid.v4()}
            onChange={this.onChange}
          />
        </Form.Item>
        <Form.Item style={{ color: "red" }}>
          <FormButton
            isNew={isNew}
            clickOn={this.onClick}
            clickCancel={this.goToTypeOfOrganizations}
          />
        </Form.Item>
      </Form>
    );
  }
}

export default FormEditItem;
