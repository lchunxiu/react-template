/*
 * @Author: liuchunxiu 
 * @Date: 2018-04-04 14:42:21 
 * @Last Modified by: liuchunxiu
 * @Last Modified time: 2018-04-09 17:27:26
 */
import { observable, spy, toJS, extendObservable, autorun, isBoxedObservable,isObservableObject,action,configure } from "mobx";
import UserInfo from "./userInfo";
configure({ enforceActions: true })
class RootStore {
  @observable userInfo = new UserInfo();
}

// 实现持久化存储
function extendFillDeep(obj){
    Object.keys(toJS(obj)).forEach(key=>{
        if(typeof obj[key] === 'object' && obj[key].constructor.name!=='Object' && isObservableObject(obj[key])){
            extendFillDeep(obj[key]);
        }
    })
    extendObservable(obj, {
        setStore: function(store){
            store &&
            Object.keys(store).forEach(key => {
              if(typeof this[key] === 'object' && this[key].constructor.name!=='Object' && isObservableObject(this[key]))
              {
                this[key].setStore(store[key]);
              }else{
                this[key] = store[key];
              }
            });
        }
      },{
          setStore: action.bound
      });
}

let store = new RootStore();
extendFillDeep(store)

let defaultStore;
let sessionStore = localStorage.getItem("store");
if (sessionStore) {
    store.setStore(JSON.parse(sessionStore));
}

spy(event => {
    localStorage.setItem("store", JSON.stringify(toJS(store)));
});
export default store;
