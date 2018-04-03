/*
 * @Author: liuchunxiu 
 * @Date: 2018-04-03 11:01:59 
 * @Last Modified by: liuchunxiu
 * @Last Modified time: 2018-04-03 18:39:45
 */
import styles from './app.styl';
import React from 'react';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
//  import Login from './login';
//  import Layout from './layout';
const Loading = ()=><div>loading</div>
const LoginComponent = Loadable({
    loader: () => import('./login').then(res=>res.default),
    loading: Loading,
    delay: 300,
  });
const LayoutComponent = Loadable({
      loader: () => import('./layout').then(res=>res.default),
      loading: Loading,
      delay: 300,
    });
export default class App extends React.Component{
    render(){
        import('./layout').then(res=>{
            console.log('asyn load:',res,LoadableComponent('./login'))
        })
        return <Router>
            <Switch>
                <Route exact path="/" component={LayoutComponent} />
                <Route path="/login" component={LoginComponent} />
            </Switch>
        </Router>
    }
}