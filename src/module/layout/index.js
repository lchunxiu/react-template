/*
 * @Author: liuchunxiu 
 * @Date: 2018-04-03 15:48:02 
 * @Last Modified by: liuchunxiu
 * @Last Modified time: 2018-04-03 18:33:31
 */
import styles from  './index.styl';
import React from "react";
import { Layout,Icon } from "antd";
import LeftMenu from "./sider";
import BottomFooter from './footer';
import RightHeader from './header';
const { Header, Footer, Sider, Content } = Layout;

export default class Index extends React.Component {
  state={
    collapsed:false
  }
  toggle=()=>{
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    return (
        <Layout className={styles.layout}>
          <Sider 
            trigger={null}
            collapsible
            collapsed={this.state.collapsed}
            >
            <div className={styles.logo}>React模板</div>
            <LeftMenu />
          </Sider>
          <Layout>
            <Header className={styles.header}>
              <Icon
                className={styles['sider-trigger']}
                type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
                onClick={this.toggle}
              />
              <RightHeader/>
            </Header>
            <Content className={styles.content}>Content</Content>
            <Footer>
              <BottomFooter/>
            </Footer>
          </Layout>
        </Layout>
    );
  }
}
