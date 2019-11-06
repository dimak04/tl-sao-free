import React from "react";
import { Menu, Layout } from "antd";
const { Sider } = Layout;

export default function(props) {
  const { menuItems, onClick } = props;
  return (
    <Sider width={192}>
      <Menu
        mode={"inline"}
        theme={"light"}
        defaultSelectedKeys={[menuItems[0].key]}
        style={{ height: "100%", borderRight: 0 }}
      >
        {menuItems.map(item => (
          <Menu.Item
            key={item.key}
            onClick={onClick}
            title={item.label}
          >
            {item.label}
          </Menu.Item>
        ))}
      </Menu>
    </Sider>
  );
}
