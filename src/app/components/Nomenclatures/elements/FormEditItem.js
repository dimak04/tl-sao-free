import React from "react";
import uuid from "uuid";
import { Form, Input, Select } from "antd";
import { fm } from "../../../helpers/locale";
import { push } from "../../../actions/router";
import FormButton from "../../FormButton";

class FormEditItem extends React.Component {
  onClick = () => {
    const { createNomenclature, updateNomenclature } = this.props.actions;
    const { nomenclature } = this.props;
    if (nomenclature.id) {
      updateNomenclature(nomenclature.id, nomenclature);
    } else {
      createNomenclature(nomenclature);
    }
    this.goToNomenclatures();
  };

  goToNomenclatures = () => {
    const { baseUrl } = this.props;
    push(`${baseUrl}`);
  };

  onChange = e => {
    const { actions } = this.props;
    actions.editNomenclature(e.target.name, e.target.value);
  };

  render() {
    const { actions, nomenclature, groups } = this.props;
    const isNew = !nomenclature.id ? true : false;
    return (
      <Form layout={"vertical"} style={{ margin: 4 }}>
        <Form.Item label={fm("label-name")} labelAlign={"left"}>
          <Input
            name="name"
            value={nomenclature.name}
            id={uuid.v4()}
            onChange={this.onChange}
          />
        </Form.Item>
        <Form.Item label={fm("label-group-name")} labelAlign={"left"}>
          <Select
            placeholder="Выбери группу"
            onChange={e => {
              actions.editNomenclature("groupId", e);
            }}
            value={nomenclature.groupId}
          >
            {groups.map(group => (
              <Select.Option key={uuid.v4()} value={group.value}>
                {group.label}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item>
          <FormButton
            isNew={isNew}
            clickOn={this.onClick}
            clickCancel={this.goToNomenclatures}
          />
        </Form.Item>
      </Form>
    );
  }
}

export default FormEditItem;
