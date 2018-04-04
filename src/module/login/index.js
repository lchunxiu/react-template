/*
 * @Author: liuchunxiu 
 * @Date: 2018-04-03 11:01:22 
 * @Last Modified by: liuchunxiu
 * @Last Modified time: 2018-04-04 16:06:06
 */
import styles from './index.styl';
import React from 'react';
import Form from './form';

class Login extends React.Component{
    render(){
        return <div className={styles.container}>
            <Form/>
        </div>
    }
}

export default Login;
