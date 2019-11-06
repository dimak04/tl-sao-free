import React from "react";
import { Table, Popconfirm, Divider, Icon } from "antd";
import Header from "./elements/Header";
import { push } from "../../actions/router";
import { fm } from "../../helpers/locale";
const { Column } = Table;

class ShowAll extends React.Component {
  state = {
    loading: false
  };

  componentDidMount() {
    const { actions } = this.props;
    actions.fetchAgreements();
    actions.fetchTypeOfAgreements();
    actions.fetchOrganizations();
    actions.fetchTypeOfDeliveries();
  }

  render() {
    const { agreements, baseUrl, searchItem, actions } = this.props;
    const { search, deleteAgreement } = actions;
    const { loading } = this.state;
    return (
        <Table
          title={() => (
            <Header search={search} searchItem={searchItem} baseUrl={baseUrl} />
          )}
          rowKey={record => record.id}
          dataSource={agreements}
          size="small"
          bordered
          loading={loading}
          pagination={{ hideOnSinglePage: true, pageSize: 20 }}
        >
          <Column title={fm("label-id")} dataIndex="id" width={40} key="id" />
          <Column title={fm("label-number")} dataIndex="number" key="number" />
          <Column
            title={fm("label-date-start")}
            dataIndex="dateStart"
            key="dateStart"
          />
          <Column title={fm("label-date-end")} dataIndex="dateEnd" key="dateEnd" />
          <Column title={fm("label-delay")} dataIndex="delay" key="delay" />
          <Column title={fm("label-type-of-agreement")} dataIndex="typeName" key="typeName" />
          <Column
            title={fm("label-provider")}
            dataIndex="providerName"
            key="providerName"
          />
          <Column
            title={fm("label-customer")}
            dataIndex="customerName"
            key="customerName"
          />
          <Column
            title={fm("label-type-of-delivery")}
            dataIndex="typeOfDeliveryName"
            key="typeOfDeliveryId"
          />
          <Column
            title={fm("label-action")}
            key="action"
            width={80}
            render={(text, record) =>
              agreements.length >= 1 ? (
                <span>
                  <Icon
                    type="edit"
                    theme={"twoTone"}
                    twoToneColor="#4A4A4A"
                    onClick={() => {
                      push(`${baseUrl}/${record.id}/edit`);
                    }}
                  />
                  <Divider type="vertical" />
                  <Popconfirm
                    title={fm("alert-delete")}
                    okText={fm("button-delete")}
                    cancelText={fm("button-cancel")}
                    onConfirm={() => deleteAgreement(record.id)}
                  >
                    <Icon
                      type="delete"
                      theme={"twoTone"}
                      twoToneColor="#FF1F13"
                    />
                  </Popconfirm>
                </span>
              ) : null
            }
          />
        </Table>
    );
  }
  componentWillUnmount() {
    const { actions } = this.props;
    actions.search("");
  }
}
export default ShowAll;
