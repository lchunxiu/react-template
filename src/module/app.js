/*
 * @Author: liuchunxiu 
 * @Date: 2018-04-03 11:01:59 
 * @Last Modified by: liuchunxiu
 * @Last Modified time: 2018-04-04 16:41:51
 */
import styles from "./app.styl";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loadable from "react-loadable";
const Loading = () => <div>loading</div>;
export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            component={Loadable({
              loader: () => import('./layout').then(res => res.default),
              loading: Loading,
              delay: 300
            })}
          />
          <Route
            exact
            path="/login"
            component={Loadable({
              loader: () => import('./login').then(res => res.default),
              loading: Loading,
              delay: 300
            })}
          />
        </Switch>
      </Router>
    );
  }
}
