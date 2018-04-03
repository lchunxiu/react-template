/*
 * @Author: liuchunxiu 
 * @Date: 2018-04-03 15:48:22 
 * @Last Modified by:   liuchunxiu 
 * @Last Modified time: 2018-04-03 15:48:22 
 */
import styles from './footer.styl';
import React from 'react';
import {Icon} from 'antd';

export default ()=>{
    return <div className={styles.container}>Copyright <Icon type="copyright" /> 2018 xiaoxiuchunzi</div>;
}