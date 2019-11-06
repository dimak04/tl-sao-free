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
    actions.fetchGroups();
    actions.fetchNomenclatures();
  }

  render() {
    const { nomenclatures, searchItem, actions, baseUrl } = this.props;
    const { search, deleteNomenclature } = actions;
    const { loading } = this.state;
    return (
      <Table
        title={() => (
          <Header search={search} searchItem={searchItem} baseUrl={baseUrl} />
        )}
        rowKey={record => record.id}
        dataSource={nomenclatures}
        size="small"
        bordered
        pagination={{ hideOnSinglePage: true, pageSize: 20 }}
        loading={loading}
      >
        <Column title={fm("label-id")} dataIndex="id" width={40} key="id" />
        <Column title={fm("label-name")} dataIndex="name" key="name" />
        <Column
          title={fm("label-group-name")}
          dataIndex="groupName"
          key="groupName"
        />
        <Column
          title={fm("label-action")}
          key="action"
          width={80}
          render={(text, record) =>
            nomenclatures.length >= 1 ? (
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
                  onConfirm={() => deleteNomenclature(record.id)}
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
