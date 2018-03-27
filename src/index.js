
console.log('in')
export default function(){
  window['test'] = 'test'
  console.log('in')
}

document.getElementById('app').innerText = 'hello!'
console.log('in')