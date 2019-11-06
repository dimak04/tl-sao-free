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
    actions.fetchPositions();
    actions.fetchPhones();
    actions.fetchTypeOfOrganizations();
    actions.fetchContacts();
    actions.fetchOrganizations();
  }

  render() {
    console.log(process.env.REACT_APP_API_URL);
    const {
      organizations,
      baseUrl,
      searchItem,
      filter,
      types,
      actions
    } = this.props;
    const { search, deleteOrganization } = actions;
    const { loading } = this.state;
    return (
        <Table
          title={() => (
            <Header
              search={search}
              searchItem={searchItem}
              baseUrl={baseUrl}
              filter={filter}
              types={types}
              setFilter={actions.setFilterOrganization}
            />
          )}
          rowKey={record => record.id}
          dataSource={organizations}
          size="small"
          bordered
          loading={loading}
          pagination={{ hideOnSinglePage: true, pageSize: 20 }}
        >
          <Column title={fm("label-id")} dataIndex="id" width={40} key="id" />

          <Column title={fm("label-name")} dataIndex="name" key="name" />

          <Column
            title={fm("label-full-name-organization")}
            dataIndex="fullName"
            key="fullName"
          />
          <Column
            title={fm("label-actual-address")}
            dataIndex="actualAddress"
            key="actualAddress"
          />
          <Column
            title={fm("label-legal-address")}
            dataIndex="legalAddress"
            key="legalAddress"
          />
          <Column title={fm("label-type-of-organization")} dataIndex="typeName" key="typeName" />
          <Column
            title={fm("label-nomenclatures")}
            dataIndex="nomenclatureLine"
            key="nomenclatureLine"
          />
          <Column
            title={fm("label-action")}
            key="action"
            width={80}
            render={(text, record) =>
              organizations.length >= 1 ? (
                <span>
                  <Icon
                    type="edit"
                    theme={"twoTone"}
                    twoToneColor="#4A4A4A"
                    onClick={() => {
                      push(`${baseUrl}/${record.id}/edit/base`);
                    }}
                  />
                  <Divider type="vertical" />
                  <Popconfirm
                    title={fm("alert-delete")}
                    okText={fm("button-delete")}
                    cancelText={fm("button-cancel")}
                    onConfirm={() => deleteOrganization(record.id)}
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
