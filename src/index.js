import './stylus/index.styl?modules=false'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './module/layout'
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
  <Router>
    <App/>
  </Router>,
  document.getElementById('root')
);