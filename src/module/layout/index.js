import style from  '../../stylus/layout.styl';
import React from "react";
import { Layout,Icon } from "antd";
import LeftMenu from "./sider";
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
      <div>
        <Layout>
          <Sider 
            trigger={null}
            collapsible
            collapsed={this.state.collapsed}>
            <div className="logo">React模板</div>
            <LeftMenu />
          </Sider>
          <Layout>
            <Header style={{ background: "#fff", padding: 0 }}>
              <Icon
                className="sider-trigger"
                type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
                onClick={this.toggle}
              />
            </Header>
            <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>Content</Content>
            <Footer>
              <div>Copyright <Icon type="copyright" /> 2018 xiaoxiuchunzi</div>
            </Footer>
          </Layout>
        </Layout>
      </div>
    );
  }
}
