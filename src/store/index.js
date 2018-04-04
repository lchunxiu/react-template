/*
 * @Author: liuchunxiu 
 * @Date: 2018-04-04 14:42:21 
 * @Last Modified by: liuchunxiu
 * @Last Modified time: 2018-04-04 15:49:11
 */
import {observable} from 'mobx';
import userInfo from './userInfo';
class RootStore{
    @observable userInfo =userInfo
    
}

export default new RootStore();