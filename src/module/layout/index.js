/*
 * @Author: liuchunxiu 
 * @Date: 2018-04-03 15:48:02 
 * @Last Modified by: liuchunxiu
 * @Last Modified time: 2018-04-18 15:21:23
 */
import styles from  './index.styl';
import React from "react";
import { Layout,Icon } from "antd";
import {Redirect} from 'react-router-dom';
import LeftMenu from "./sider";
import BottomFooter from './footer';
import RightHeader from './header';
import {inject, observer} from 'mobx-react';
import MyContent from './content';
const { Header, Footer, Sider, Content } = Layout;

@inject(store=>({isAuthentic:store.userStore.userInfo.isAuthentic})) @observer
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
    if(!this.props.isAuthentic){
      return <Redirect to='/login' />;
    }
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
            <Content className={styles.content}><MyContent/></Content>
            <Footer>
              <BottomFooter/>
            </Footer>
          </Layout>
        </Layout>
    );
  }
}
