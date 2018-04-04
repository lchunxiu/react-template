/*
 * @Author: liuchunxiu 
 * @Date: 2018-04-03 15:47:50 
 * @Last Modified by: liuchunxiu
 * @Last Modified time: 2018-04-04 18:22:45
 */
import styles from "./header.styl";
import React from "react";
import { Avatar, Dropdown, Icon, Menu } from "antd";
import { Redirect } from "react-router-dom";
import { inject, observer } from "mobx-react";

@inject(store => ({
  userName: store.userStore.userInfo.userName,
  clearAuthentic: store.userStore.userInfo.clearAuthentic
}))
@observer
export default class Header extends React.Component {
  state = {
    isActive: false,
    isLogout:false
  };
  logout=()=>{
    this.props.clearAuthentic();
    this.setState({
      isLogout:true
    })
  }
  onVisibleChange = visible => {};
  render() {
    if(this.state.isLogout){
      return <Redirect to="/ogin" />;
    }
    let { isActive } = this.state;
    return (
      <div className={styles.container}>
        <Dropdown
          overlay={<Menu>
            <Menu.Divider />
            <Menu.Item>
              <a onClick={this.logout}>
                <Icon type="poweroff" />
                <span>退出登陆</span>
              </a>
            </Menu.Item>
          </Menu>}
          trigger={["hover"]}
          onVisibleChange={visible => {
            this.setState({
              isActive: visible
            });
          }}
        >
          <div className={[styles["user-area"], isActive && "active"]}>
            <Avatar icon="user" />
            <span className={styles["user-name"]}>{this.props.userName}</span>
          </div>
        </Dropdown>
      </div>
    );
  }
}
