/*
 * @Author: liuchunxiu 
 * @Date: 2018-04-03 15:48:37 
 * @Last Modified by: liuchunxiu
 * @Last Modified time: 2018-04-09 16:27:27
 */
import {observable,computed,action, runInAction} from 'mobx';

class UserInfo{
    @observable userName
    @observable portraitUrl
    @observable isAuthentic = false
    @observable authenticState = 'pending'
    @action.bound clearAuthentic(){
        this.isAuthentic = false;
    }
    @action.bound authentic(userName,password){
        this.authenticState = 'pending';
        setTimeout(()=>{
            let random = Math.floor(Math.random()*10);
            if(random%2===0){
                runInAction(()=>{
                    this.isAuthentic = false;
                    this.authenticState = 'reject';
                })
            }else{
                runInAction(()=>{
                    this.userName = userName;
                    this.portraitUrl = '';
                    this.isAuthentic = true;
                    this.authenticState = 'fullfill';
                })
            }
        },100)
    }
}

export default UserInfo;
