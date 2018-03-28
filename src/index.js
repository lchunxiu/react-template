import './index.css'
import _ from 'lodash'

console.log('in')
export default function(){
  window['test'] = 'test';
}

console.log(_.join('hello','world'))
let ele = document.createElement('div');
ele.innerText = 'hello world';
ele.setAttribute('class','description')
document.getElementById('app').appendChild(ele)