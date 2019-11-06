import React from "react";
import { fm } from "../../helpers/locale";
import { Menu } from "antd";
import { push } from "../../actions/router";
import { Layout } from "antd";
const { Sider } = Layout;

class LeftMenu extends React.Component {
  state = {
    current: "group-nomenclatures"
  };
  componentDidMount() {
    const { path } = this.props;
    const key = path.substring(path.lastIndexOf("/") + 1);
    this.setState({ current: key });
  }

  onClick = e => {
    this.setState({ current: e.key });
    push(`/settings/${e.key}`);
  };
  titleItem = value => {
    fm(`label-${value}`);
  };
  render() {
    return (
      <Sider width={192}>
        <Menu
          theme={"light"}
          mode={"inline"}
          onClick={this.onClick}
          selectedKeys={[this.state.current]}
          style={{ height: "100%", borderRight: 0 }}
        >
          <Menu.Item
            title={this.titleItem("group-nomenclatures")}
            key="group-nomenclatures"
          >
            {fm("label-group-nomenclatures")}
          </Menu.Item>
          <Menu.Item
            title={this.titleItem("nomenclatures")}
            key="nomenclatures"
          >
            {fm("label-nomenclatures")}
          </Menu.Item>
          <Menu.Item title={this.titleItem("positions")} key="positions">
            {fm("label-positions")}
          </Menu.Item>
          <Menu.Item title={this.titleItem("agreements")} key="agreements">
            {fm("label-agreements")}
          </Menu.Item>
          <Menu.Item
            title={this.titleItem("type-of-deliveries")}
            key="type-of-deliveries"
          >
            {fm("label-type-of-deliveries")}
          </Menu.Item>
          <Menu.Item
            title={this.titleItem("type-of-agreements")}
            key="type-of-agreements"
          >
            {fm("label-type-of-agreements")}
          </Menu.Item>
          <Menu.Item
            title={this.titleItem("organizations")}
            key="organizations"
          >
            {fm("label-organizations")}
          </Menu.Item>
          <Menu.Item
            title={this.titleItem("type-of-organizations")}
            key="type-of-organizations"
          >
            {fm("label-type-of-organizations")}
          </Menu.Item>
          <Menu.Item title={this.titleItem("contacts")} key="contacts">
            {fm("label-contacts")}
          </Menu.Item>
          <Menu.Item title={this.titleItem("phones")} key="phones">
            {fm("label-phones")}
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}

export default LeftMenu;
