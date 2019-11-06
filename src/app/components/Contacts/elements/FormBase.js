import { Button, Form, Input, Select } from "antd";
import { fm } from "../../../helpers/locale";
import uuid from "uuid";
import React from "react";
import { push } from "../../../actions/router";

class FormBase extends React.Component {
  onClick = () => {
    const { updateContact } = this.props.actions;
    const { contact, baseUrl } = this.props;
    if (contact.id) {
      updateContact(contact.id, contact);
      push(`${baseUrl}`);
    } else {
      this.createContact();
    }
  };

  async createContact() {
    const { contact, actions, filter } = this.props;
    if (filter.active) {
      await actions.createContact({
        ...contact,
        organizationId: filter.organizationId
      });
    } else {
      await actions.createContact(contact);
    }
    this.goToEdit();
    return console.log(contact.id);
  }

  goToEdit = () => {
    const { baseUrl, contact } = this.props;

    push(`${baseUrl}/${contact.id}/edit`);
  };

  onChange = e => {
    const { actions } = this.props;
    actions.editContact(e.target.name, e.target.value);
  };

  render() {
    const {
      actions,
      contact,
      positions,
      organizations,
      filter,
      baseUrl
    } = this.props;
    return (
      <>
        <Form layout={"vertical"} style={{margin: 4}}>
          {!filter.active && (
            <Form.Item
              label={fm("label-name-organization")}
              labelAlign={"left"}
            >
              <Select
                placeholder="Выбирите организацию"
                onChange={e => {
                  actions.editContact("organizationId", e);
                }}
                value={contact.organizationId}
              >
                {organizations.map(organization => (
                  <Select.Option key={uuid.v4()} value={organization.value}>
                    {organization.label}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          )}
          <Form.Item label={fm("label-full-name-people")} labelAlign={"left"}>
            <Input
              name="fio"
              value={contact.fio}
              id={uuid.v4()}
              onChange={this.onChange}
            />
          </Form.Item>
          <Form.Item label={fm("label-position")} labelAlign={"left"}>
            <Select
              placeholder="Выбирите должность"
              onChange={e => {
                actions.editContact("positionId", e);
              }}
              value={contact.positionId}
            >
              {positions.map(position => (
                <Select.Option key={uuid.v4()} value={position.value}>
                  {position.label}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item>
            <Button.Group>
              <Button onClick={this.onClick} type={"primary"}>
                {fm(`button-${contact.id ? "save" : "create"}`)}
              </Button>
              <Button
                onClick={() => {
                  push(`${baseUrl}`);
                }}
                type={"primary"}
              >
                {fm("button-cancel")}
              </Button>
            </Button.Group>
          </Form.Item>
        </Form>
      </>
    );
  }
}

export default FormBase;
