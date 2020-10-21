import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

import loginRouter from './modules/login.js'
import userRouter from './modules/user.js'
import newsRouter from './modules/news.js'
import shopRouter from './modules/shop.js'
import chongzhiRouter from './modules/chongzhi.js'

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import("../views/About.vue")
  },
  ...loginRouter,
  ...userRouter,
  ...newsRouter,
  ...shopRouter,
  ...chongzhiRouter,
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
