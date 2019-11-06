import React from "react";
import uuid from "uuid";
import { Form, Input, Select, DatePicker } from "antd";
import { fm } from "../../../helpers/locale";
import { push } from "../../../actions/router";
import FormButton from "../../FormButton";

class FormEditItem extends React.Component {
  onClick = () => {
    const { createAgreement, updateAgreement } = this.props.actions;
    const { agreement } = this.props;
    if (agreement.id) {
      updateAgreement(agreement.id, agreement);
    } else {
      createAgreement(agreement);
    }
    this.goToAgreements();
  };

  goToAgreements = () => {
    const { baseUrl } = this.props;
    push(`${baseUrl}`);
  };

  onChange = e => {
    const { actions } = this.props;
    actions.editAgreement(e.target.name, e.target.value);
  };

  render() {
    const {
      actions,
      agreement,
      typeOfAgreements,
      organizations,
      typeOfDeliveries
    } = this.props;
    const isNew = !agreement.id ? true : false;
    return (
      <Form layout={"vertical"} style={{ margin: 4 }}>
        <Form.Item label={fm("label-number")} labelAlign={"left"}>
          <Input
            name="number"
            size={"small"}
            value={agreement.number}
            id={uuid.v4()}
            onChange={this.onChange}
          />
        </Form.Item>
        <Form.Item label={fm("label-date-start")} labelAlign={"left"}>
          <DatePicker
            onChange={(date, dateString) => {
              actions.editAgreement("dateStart", dateString);
            }}
            format="DD/MM/YYYY"
            size={"small"}
          />
        </Form.Item>
        <Form.Item label={fm("label-date-end")} labelAlign={"left"}>
          <DatePicker
            name="bvzzz"
            onChange={(date, dateString) => {
              actions.editAgreement("dateEnd", dateString);
            }}
            format="DD/MM/YYYY"
            size={"small"}
          />
        </Form.Item>
        <Form.Item label={fm("label-delay")} labelAlign={"left"}>
          <Input
            name="delay"
            size={"small"}
            value={agreement.delay}
            id={uuid.v4()}
            onChange={this.onChange}
          />
        </Form.Item>
        <Form.Item label={fm("label-type-of-agreement")} labelAlign={"left"}>
          <Select
            placeholder="Выбери тип"
            size={"small"}
            onChange={e => {
              actions.editAgreement("typeId", e);
            }}
            value={agreement.typeId}
          >
            {typeOfAgreements.map(item => (
              <Select.Option key={uuid.v4()} value={item.value}>
                {item.label}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item label={fm("label-provider")} labelAlign={"left"}>
          <Select
            placeholder="Выбери организацию"
            size={"small"}
            onChange={e => {
              actions.editAgreement("providerId", e);
            }}
            value={agreement.providerId}
          >
            {organizations.map(item => (
              <Select.Option key={uuid.v4()} value={item.value}>
                {item.label}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item label={fm("label-customer")} labelAlign={"left"}>
          <Select
            placeholder="Выбери организацию"
            size={"small"}
            onChange={e => {
              actions.editAgreement("customerId", e);
            }}
            value={agreement.customerId}
          >
            {organizations.map(item => (
              <Select.Option key={uuid.v4()} value={item.value}>
                {item.label}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item label={fm("label-type-of-delivery")} labelAlign={"left"}>
          <Select
            placeholder="Выбери тип доставки"
            size={"small"}
            onChange={e => {
              actions.editAgreement("typeOfDeliveryId", e);
            }}
            value={agreement.typeOfDeliveryId}
          >
            {typeOfDeliveries.map(item => (
              <Select.Option key={uuid.v4()} value={item.value}>
                {item.label}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item>
          <FormButton
            isNew={isNew}
            clickOn={this.onClick}
            clickCancel={this.goToAgreements}
          />
        </Form.Item>
      </Form>
    );
  }
}

export default FormEditItem;
