/*
 * @Author: liuchunxiu 
 * @Date: 2018-04-04 15:21:09 
 * @Last Modified by: liuchunxiu
 * @Last Modified time: 2018-04-04 15:35:46
 */
/*
 * @Author: liuchunxiu 
 * @Date: 2018-04-04 15:21:07 
 * @Last Modified by:   liuchunxiu 
 * @Last Modified time: 2018-04-04 15:21:07 
 */
/*
 * @Author: liuchunxiu 
 * @Date: 2018-04-03 11:02:16 
 * @Last Modified by: liuchunxiu
 * @Last Modified time: 2018-04-04 15:20:33
 */
import './stylus/index.styl'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './module/app'
import { onError,Provider } from "mobx-react";
import store from './store';


ReactDOM.render(
  <Provider userStore={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);

onError((error) => {
  console.log('mobx-react error：',error);
});