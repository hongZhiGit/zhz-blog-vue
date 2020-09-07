import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);
const router = new Router({
  mode: 'history', // 去掉路由地址的#
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: 'home',
      component: () => import('../pages/base.vue'),
      children: [
        {
          // 首页
          path: '/home',
          name: 'home-context',
          component: () => import('../views/home.vue')
        },
        {
          // 目录
          path: '/menu',
          name: 'menu-context',
          component: () => import('../views/menu.vue')
        },
        {
          // 分类
          path: '/classify',
          name: 'classify-context',
          component: () => import('../views/classify.vue')
        },
        {
          // 关于我
          path: '/aboutMe',
          name: 'aboutMe-context',
          component: () => import('../views/aboutMe.vue')
        }
      ]
    }]
});

export default router;
