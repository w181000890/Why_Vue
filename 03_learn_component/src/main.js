import { createApp } from 'vue'
// import App from './02_组件通信-父传子/App.vue'
// import App from './03_组件通信-子传父/App.vue'
// import App from './04_组件通信-案例项目/App.vue'
// import App from './04_组件通信_案例练习/App.vue'
// import App from './04_组件通信_校验/App.vue'
// import App from './05_组件插槽/App.vue'
// import App from './06_组件插槽_具名插槽/App.vue'
// import App from './07_组件通信_具名插槽/App.vue'
// import App from './08_Provide和Inject/App.vue'
// import App from './09_事件总线/App.vue'
// import App from './10_生命周期演练/App.vue'
// import App from './11_ref获取元素组件/App.vue'
// import App from './12_动态组件的使用/App.vue'
// import App from './13_keepalive的使用/App.vue'
// import App from './14_异步组件的使用/App.vue'
// import App from './15_组件的v-model的使用/App.vue'
import App from './16_组件混入Mixin/App.vue'

const app = createApp(App)
app.mixin({
  created(){
    console.log("hello world")
  }
})

app.mount('#app')
