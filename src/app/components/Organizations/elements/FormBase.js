import { Form, Input, Select } from "antd";
import { fm } from "../../../helpers/locale";
import uuid from "uuid";
import React from "react";

class FormBase extends React.Component {
  onChange = e => {
    const { actions } = this.props;
    actions.editOrganization(e.target.name, e.target.value);
  };

  render() {
    const { actions, organization, typeOfOrganizations } = this.props;
    return (
      <>
        <Form layout={"vertical"} style={{ margin: 4 }}>
          <Form.Item label={fm("label-name-organization")} labelAlign={"left"}>
            <Input
              name="name"
              value={organization.name}
              id={uuid.v4()}
              onChange={this.onChange}
            />
          </Form.Item>
          <Form.Item
            label={fm("label-full-name-organization")}
            labelAlign={"left"}
          >
            <Input
              name="fullName"
              value={organization.fullName}
              id={uuid.v4()}
              onChange={this.onChange}
            />
          </Form.Item>
          <Form.Item label={fm("label-actual-address")} labelAlign={"left"}>
            <Input
              name="actualAddress"
              value={organization.actualAddress}
              id={uuid.v4()}
              onChange={this.onChange}
            />
          </Form.Item>
          <Form.Item label={fm("label-legal-address")} labelAlign={"left"}>
            <Input
              name="legalAddress"
              value={organization.legalAddress}
              id={uuid.v4()}
              onChange={this.onChange}
            />
          </Form.Item>
          <Form.Item
            label={fm("label-type-of-organization")}
            labelAlign={"left"}
          >
            <Select
              placeholder="Выбирите тип организации"
              onChange={e => {
                actions.editOrganization("typeId", e);
              }}
              value={organization.typeId}
            >
              {typeOfOrganizations.map(type => (
                <Select.Option key={uuid.v4()} value={type.value}>
                  {type.label}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
        </Form>
      </>
    );
  }
}

export default FormBase;
