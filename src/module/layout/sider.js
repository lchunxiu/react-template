import React from "react";
import { Menu, Icon } from "antd";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class App extends React.Component {
  handleClick = e => {
    console.log("click ", e);
  };
  render() {
    return (
    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
      <Menu.Item key="1">
        <Icon type="user" />
        <span>基本管理</span>
      </Menu.Item>
      <Menu.Item key="2">
        <Icon type="video-camera" />
        <span>nav 2</span>
      </Menu.Item>
      <Menu.Item key="3">
        <Icon type="upload" />
        <span>nav 3</span>
      </Menu.Item>
    </Menu>
    );
  }
}
