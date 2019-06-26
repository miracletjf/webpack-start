import Vue from 'vue'
import App from './App.vue'
require('./module-a')

const setTimer = function (delay = 1000){
  return new Promise(res => {
    setTimeout(() => {
      console.log(`${delay}ms pass !`)
      res(delay)
    }, delay);
  })
}

const test_async = async function (){
  let a = await setTimer(1000)
  return a
}

test_async()
console.log('hello webpack')

new　Vue({
  render: h => h(App)
}).$mount('#app')
