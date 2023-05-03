import { createRouter,createWebHistory } from "vue-router";

// import Home from '../views/Home.vue'
// import About from '../views/About.vue'

const Home = import('../views/Home.vue')
const About = import('../views/About.vue')
const router = createRouter({
  history: createWebHistory(),
  routes:[
    {path:'/',redirect:'/home'},
    { path: '/home', component: Home },
    { path: '/about', component: About }
  ]
  
})

export default router