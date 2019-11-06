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
    actions.fetchContacts();
    actions.fetchPhones();
  }

  render() {
    const { phones, searchItem, filter, actions, baseUrl } = this.props;
    const { search, deletePhone } = actions;
    const { loading } = this.state;
    return (
      <Table
        title={() => (
          <Header search={search} searchItem={searchItem} baseUrl={baseUrl} />
        )}
        rowKey={record => record.id}
        dataSource={phones}
        size="small"
        bordered
        loading={loading}
        pagination={{ hideOnSinglePage: true, pageSize: 20 }}
      >
        <Column title={fm("label-id")} dataIndex="id" width={40} key="id" />
        <Column title={fm("label-number")} dataIndex="number" key="number" />
        {!filter && (
          <Column
            title={fm("label-contact")}
            dataIndex="contactName"
            key="contactName"
          />
        )}
        <Column
          title={fm("label-action")}
          key="action"
          width={80}
          render={(text, record) =>
            phones.length >= 1 ? (
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
                  onConfirm={() => deletePhone(record.id)}
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
    const {actions} = this.props;
    actions.search("");
  }
}
export default ShowAll;
