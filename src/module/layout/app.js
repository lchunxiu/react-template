import React from "react";
import { Layout } from "antd";
import LeftMenu from "./sider";
const { Header, Footer, Sider, Content } = Layout;

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Layout>
          <Header>Header</Header>
          <Layout>
            <Sider>
              <LeftMenu />
            </Sider>
            <Content>Content</Content>
          </Layout>
          <Footer>Footer</Footer>
        </Layout>
      </div>
    );
  }
}
