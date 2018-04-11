/*
 * @Author: liuchunxiu 
 * @Date: 2018-04-03 15:48:37 
 * @Last Modified by: liuchunxiu
 * @Last Modified time: 2018-04-11 12:17:55
 */
import {observable,computed,action, runInAction} from 'mobx';
import {request} from 'utils';

class UserInfo{
    @observable userName
    @observable portraitUrl
    @observable isAuthentic = false
    @observable authenticState = 'pending'
    @observable authorization
    @action.bound clearAuthentic(){
        this.isAuthentic = false;
    }
    @action.bound authentic(userName,password){
        this.authenticState = 'pending';
        request.post('/login',{userName:userName}).then(({data:res})=>{
            if(res.isok){
                runInAction(()=>{
                    this.userName = userName;
                    this.authorization = res.authorization;
                    this.portraitUrl = '';
                    this.isAuthentic = true;
                    this.authenticState = 'fullfill';
                })
            }else{
                runInAction(()=>{
                    this.isAuthentic = false;
                    this.authenticState = 'reject';
                })
            }
        }).catch(err=>{
            console.log('userInfo login err：',err);
        })
    }
}

export default UserInfo;
