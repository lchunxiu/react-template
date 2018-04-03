/*
 * @Author: liuchunxiu 
 * @Date: 2018-04-03 11:01:22 
 * @Last Modified by: liuchunxiu
 * @Last Modified time: 2018-04-03 11:22:54
 */
import styles from './index.styl';
import React from 'react';
import Form from './form';


export default class Login extends React.Component{
    render(){
        return <div className={styles.container}>
            <Form/>
        </div>
    }
}
