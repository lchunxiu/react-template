/*
 * @Author: liuchunxiu 
 * @Date: 2018-04-03 15:48:33 
 * @Last Modified by:   liuchunxiu 
 * @Last Modified time: 2018-04-03 15:48:33 
 */
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
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
        <SubMenu
          key="sub3"
          title={
            <span>
              <Icon type="info-circle-o" /><span>基本信息</span>
            </span>
          }
        >
          <Menu.Item key="7">Option 7</Menu.Item>
          <Menu.Item key="8">Option 8</Menu.Item>
        </SubMenu>
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
