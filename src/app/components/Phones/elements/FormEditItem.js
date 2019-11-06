import React from "react";
import uuid from "uuid";
import { Form, Input, Select } from "antd";
import { fm } from "../../../helpers/locale";
import { push } from "../../../actions/router";
import FormButton from "../../FormButton";

class FormEditItem extends React.Component {
  onClick = () => {
    const { createPhone, updatePhone } = this.props.actions;
    const { phone, filter } = this.props;
    if (phone.id) {
      updatePhone(phone.id, phone);
    } else {
      if (filter.active) {
        createPhone({ ...phone, contactId: filter.contactId });
      } else {
        createPhone(phone);
      }
    }
    this.goToPhones();
  };

  goToPhones = () => {
    const { baseUrl } = this.props;
    push(`${baseUrl}`);
  };

  onChange = e => {
    const { actions } = this.props;
    actions.editPhone(e.target.name, e.target.value);
  };

  render() {
    const { actions, phone, contacts, filter } = this.props;
    const isNew = !phone.id ? true : false;
    return (
      <Form layout={"vertical"} style={{ margin: 4 }}>
        <Form.Item label={fm("label-number")} labelAlign={"left"}>
          <Input
            name="number"
            value={phone.number}
            id={uuid.v4()}
            onChange={this.onChange}
          />
        </Form.Item>
        {!filter.active && (
          <Form.Item label={fm("label-contact")} labelAlign={"left"}>
            <Select
              placeholder="Выбирите контакт"
              onChange={e => {
                actions.editPhone("contactId", e);
              }}
              value={phone.contactId}
            >
              {contacts.map(contact => (
                <Select.Option key={uuid.v4()} value={contact.value}>
                  {contact.label}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
        )}
        <Form.Item>
          <FormButton
            isNew={isNew}
            clickOn={this.onClick}
            clickCancel={this.goToPhones}
          />
        </Form.Item>
      </Form>
    );
  }
}

export default FormEditItem;
