// 直接使用组件加载形式，打包时，会放在一个包中，内容庞大
// import Home from "../pages/Home.vue"
// import About from "../pages/About.vue"
import { createRouter, createWebHashHistory } from "vue-router"

// 配置映射关系
const routes = [
  {
    path: '/',
    redirect:'/home'
  },
  {
    path: '/home',
    // component: Home 
    // 采用路由分包（路由懒加载），这样在打包时，只有用到的模块才会下载，也是一种优化手段
    // /* webpackChunkName: "home-chunk" */ 魔法注释 打包时为dist分包下的文件命名
    component: () => import(/* webpackChunkName: "home-chunk" */ "../pages/Home.vue"),
    children: [
      // 二级路由默认路径
      {
        path: "",
        redirect: "/home/message"
      },
      {
        path: "message",
        component: () => import("../pages/HomeMessage.vue")
      },
      {
        path: "shop",
        component: () => import("../pages/HomeShop.vue")
      }
    ]
  },
  {
    path: '/about',
    // component: About
    component: () => import(/* webpackChunkName: "about-chunk" */ "../pages/About.vue")
  },
  // 页面找不到
  {
    path: '/:pathMatch(.*)',
    component: () => import("../pages/NotFound.vue")
  }
]

// 创建一个路由对象router
const router = createRouter({
  routes,
  // 指定路由模式
  history:createWebHashHistory()
})
export default router
