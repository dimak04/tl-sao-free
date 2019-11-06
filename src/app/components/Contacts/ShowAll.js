import React from "react";
import uuid from "uuid";
import { Table, Popconfirm, Popover, Tag, Divider, Icon } from "antd";
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
    actions.fetchOrganizations();
    actions.fetchPositions();
    actions.fetchPhones();
    actions.fetchContacts();
  }

  render() {
    const { contacts, baseUrl, searchItem, filter, actions } = this.props;
    const { search, deleteContact } = actions;
    const { loading } = this.state;
    return (
        <Table
          title={() => (
            <Header search={search} searchItem={searchItem} baseUrl={baseUrl} />
          )}
          rowKey={record => record.id}
          dataSource={contacts}
          size="small"
          bordered
          loading={loading}
          pagination={{ hideOnSinglePage: true, pageSize: 20 }}
        >
          <Column title={fm("label-id")} dataIndex="id" width={40} key="id" />
          {!filter && (
            <Column
              title={fm("label-organization")}
              dataIndex="organizationName"
              key="organizationName"
            />
          )}
          <Column title={fm("label-full-name-people")} dataIndex="fio" key="fio" />
          <Column
            title={fm("label-position")}
            dataIndex="positionName"
            key="positionName"
          />
          <Column title={fm("label-email")} dataIndex="email" key="email" />
          <Column
            title={fm("label-phones")}
            dataIndex="phones"
            key="phones"
            width={80}
            render={tags => (
              <span>
                {tags.length > 0 && (
                  <Tag
                    style={{
                      display: "inline-table",
                      height: "12px",
                      lineHeight: "14px"
                    }}
                    color="blue"
                    key={uuid.v4()}
                  >
                    {tags[0].number}
                  </Tag>
                )}
                {tags.length > 1 && (
                  <Popover
                    title={fm("label-phones")}
                    content={
                      <span style={{display: "flex", flexDirection: "column"}}>
                        {tags.map(tag => {
                          return (
                            <Tag
                              style={{
                                display: "inline-table",
                                height: "12px",
                                lineHeight: "14px"
                              }}
                              color="blue"
                              key={uuid.v4()}
                            >
                              {tag.number}
                            </Tag>
                          );
                        })}
                      </span>
                    }
                    trigger="click"
                  >
                    <Tag
                      style={{
                        display: "inline-table",
                        height: "12px",
                        lineHeight: "14px"
                      }}
                      color="blue"
                      key={uuid.v4()}
                    >
                      ...
                    </Tag>
                  </Popover>
                )}
              </span>
            )}
          />
          <Column
            title={fm("label-action")}
            key="action"
            width={80}
            render={(text, record) =>
              contacts.length >= 1 ? (
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
                    onConfirm={() => deleteContact(record.id)}
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
