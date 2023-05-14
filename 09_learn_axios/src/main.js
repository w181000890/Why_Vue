import { createApp } from 'vue'
import axios from 'axios'
import App from './App.vue'

createApp(App).mount('#app')

axios.request({
  url:"http://123.207.32.32:8000/home/multidata"
}).then(res=>{
  console.log("res",res.data)
})