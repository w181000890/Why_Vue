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
      // ]
      // children: [
      //   {
      //     path: "/home",
      //     redirect: "/home/recommend"
      //   },
        // {
        //   path: "recommend", // /home/recommend
        //   component: () => import("../views/HomeRecommend.vue")
        // },
        // {
        //   path: "ranking", // /home/ranking
        //   component: () => import("../views/HomeRanking.vue")
        // }
      ]
    },
    { path: '/about', component: About },
    { path: '/user/:id', component: () => import('../views/User.vue') },
    // {
    //   path: '/:pathMatch(.*)*',
    //   component: () => import('../views/NotFound.vue')
    // }
  ]

})

export default router