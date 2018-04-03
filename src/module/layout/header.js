/*
 * @Author: liuchunxiu 
 * @Date: 2018-04-03 15:47:50 
 * @Last Modified by:   liuchunxiu 
 * @Last Modified time: 2018-04-03 15:47:50 
 */
import styles from './header.styl';
import React from 'react';
import { Avatar, Dropdown, Icon, Menu} from 'antd';
import { Link } from "react-router-dom";

const menu = (
    <Menu>
      <Menu.Divider />
      <Menu.Item>
      <Link to="/login"><Icon type="poweroff" /><span>退出登陆</span></Link>
      </Menu.Item>
    </Menu>
  );

export default class Header extends React.Component{
    state={
        isActive:false
    }
    onVisibleChange=(visible)=>{

    }
    render(){
        let {isActive} = this.state;
        return <div className={styles.container}>
        <Dropdown overlay={menu} trigger={['hover']} 
            onVisibleChange={(visible)=>{
                this.setState({
                    isActive:visible
                })
            }}>
            <div className={[styles['user-area'],isActive&&'active']}>
                <Avatar icon="user" />
                <span className={styles['user-name']}>UserName</span>
            </div>
        </Dropdown>
    </div>
    }
}