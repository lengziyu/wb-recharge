import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

import loginRouter from './modules/login.js'
import userRouter from './modules/user.js'
import newsRouter from './modules/news.js'
import shopRouter from './modules/shop.js'
import productRouter from './modules/product.js'

export const constantRoutes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue")
  },
  ...loginRouter,
  ...userRouter,
  ...newsRouter,
  ...shopRouter,
  ...productRouter,
];

const createRouter = () => new VueRouter({
  mode: "history",
  base: '/recharge/',
  base: process.env.BASE_URL,
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})


const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher
}

export default router;
