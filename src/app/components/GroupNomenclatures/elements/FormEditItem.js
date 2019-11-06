import React from "react";
import uuid from "uuid";
import { fm } from "../../../helpers/locale";
import { Form, Input } from "antd";
import { push } from "../../../actions/router";
import FormButton from "../../FormButton";

class FormEditItem extends React.Component {
  onClick = () => {
    const { createGroup, updateGroup } = this.props.actions;
    const { group } = this.props;
    if (group.id) {
      updateGroup(group.id, group);
    } else {
      createGroup(group);
    }
    this.goToGroupNomenclatures();
  };

  goToGroupNomenclatures = () => {
    const { baseUrl } = this.props;
    push(`${baseUrl}`);
  };

  onChange = e => {
    const { actions } = this.props;
    actions.editGroup(e.target.name, e.target.value);
  };

  render() {
    const { group } = this.props;
    const isNew = !group.id ? true : false;
    return (
      <Form layout="vertical" style={{ margin: 4 }}>
        <Form.Item label={fm("label-name")} labelAlign="left" colon={true}>
          <Input
            name="name"
            value={group.name}
            id={uuid.v4()}
            onChange={this.onChange}
          />
        </Form.Item>
        <Form.Item>
          <FormButton
            isNew={isNew}
            clickOn={this.onClick}
            clickCancel={this.goToGroupNomenclatures}
          />
        </Form.Item>
      </Form>
    );
  }
}

export default FormEditItem;
