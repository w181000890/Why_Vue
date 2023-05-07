import { createRouter, createWebHistory } from "vue-router";

// import Home from '../views/Home.vue'
// import About from '../views/About.vue'

// const Home = import('../views/Home.vue')
const About = import('../views/About.vue')
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/home' },
    {
      name:'home',
      path: '/home', 
      component: () => import("../views/Home.vue"),
      // component: Home,
      children: [
        {
          path:'/home',
          redirect:"/home/recommend"
        },
        {
          path:'recommend',
          component:()=>import('../views/HomeRecommend.vue')
        },
        {
          path:'ranking',
          component:()=>import('../views/HomeRanking.vue')
        },
      ]
    },
    { path: '/about', component: About },
    { path: '/user/:id', component: () => import('../views/User.vue') },
    {
      path:'/order',
      component:()=>import('../views/Order.vue')
    },
    {
      path:'/login',
      component:()=>import('../views/Login.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => import('../views/NotFound.vue')
    }
  ]

})
// 动态添加路由
let isAdmin = true
if(isAdmin) {
  //一级路由
  router.addRoute({
    path:'/admin',
    component:()=>import('../views/Admin.vue')
  }),
  router.addRoute("home",{
    path:'vip',
    component:()=>import('../views/HomeVip.vue')
  })
}

router.beforeEach((to,from)=>{
  const token = localStorage.getItem('token')
  if(to.path==='/order'&&!token){
    return '/login'
  }
})

export default router