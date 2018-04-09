/*
 * @Author: liuchunxiu 
 * @Date: 2018-04-04 16:46:04 
 * @Last Modified by: liuchunxiu
 * @Last Modified time: 2018-04-09 11:09:19
 */
import styles from "./form.styl";
import React from "react";
import { Redirect } from "react-router-dom";
import { Form, Icon, Input, Button, Checkbox } from "antd";
import { inject, observer } from "mobx-react";
const FormItem = Form.Item;

@Form.create()
@inject(store => ({
  authentic: store.userStore.userInfo.authentic,
  isAuthentic: store.userStore.userInfo.isAuthentic
}))
@observer
export default class NormalLoginForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.authentic(values.userName, values.password);
      }
    });
  };
  render() {
    if (this.props.isAuthentic) {
      return <Redirect to="/" />;
    }

    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className={styles["login-form"]}>
        <FormItem>
          {getFieldDecorator("userName", {
            rules: [{ required: true, message: "Please input your username!" }]
          })(
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Username"
            />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator("password", {
            rules: [{ required: true, message: "Please input your Password!" }]
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              placeholder="Password"
            />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator("remember", {
            valuePropName: "checked",
            initialValue: true
          })(<Checkbox>Remember me</Checkbox>)}
          <a className={styles["login-form-forgot"]} href="">
            Forgot password
          </a>
          <Button
            type="primary"
            htmlType="submit"
            className={styles["login-form-button"]}
          >
            Log in
          </Button>
          Or <a href="">register now!</a>
        </FormItem>
      </Form>
    );
  }
}

// export default Form.create()(NormalLoginForm);
