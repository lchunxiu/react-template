/*
 * @Author: liuchunxiu 
 * @Date: 2018-04-03 11:02:16 
 * @Last Modified by: liuchunxiu
 * @Last Modified time: 2018-04-10 11:30:25
 */
import "./stylus/index.styl";
import React from "react";
import ReactDOM from "react-dom";
import App from "./module/app";
import { onError, Provider } from "mobx-react";
import store from "./store";
import { LocaleProvider } from "antd";
import zh_CN from "antd/lib/locale-provider/zh_CN";
import moment from "moment";
import "moment/locale/zh-cn";
moment.locale("zh-cn");

ReactDOM.render(
  <LocaleProvider locale={zh_CN}>
    <Provider userStore={store}>
      <App />
    </Provider>
  </LocaleProvider>,
  document.getElementById("root")
);

onError(error => {
  console.log("mobx-react error：", error);
});
