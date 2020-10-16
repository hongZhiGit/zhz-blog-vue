import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

//获取原型对象上的push函数
const originalPush = Router.prototype.push;
//修改原型对象中的push方法
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};
const router = new Router({
  mode: 'history', // 去掉路由地址的#
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/management/login',
      name: 'login',
      component: () => import('../pages/management/login.vue')
    },
    {
      path: '/management/',
      name: 'management',
      redirect: 'management/home',
      component: () => import('../pages/management/base.vue'),
      children: [
        {
          // 首页
          path: '/management/home',
          component: () => import('../views/management/home.vue')
        },
        {
          // 文章列表页
          path: '/management/article/list',
          component: () => import('../views/management/article/list.vue')
        },
        {
          // 文章保存页
          path: '/management/article/save',
          component: () => import('../views/management/article/save.vue')
        },
        {
          // 标签列表页
          path: '/management/tag/list',
          component: () => import('../views/management/tag/list.vue')
        },
        {
          // 标签保存页
          path: '/management/tag/list',
          component: () => import('../views/management/tag/list.vue')
        }
      ]
    },
    {
      path: '/',
      name: 'home',
      redirect: 'home',
      component: () => import('../pages/client/base.vue'),
      children: [
        {
          // 首页
          path: '/home',
          name: 'home-context',
          component: () => import('../views/client/home.vue')
        },
        {
          // 目录
          path: '/menu',
          name: 'menu-context',
          component: () => import('../views/client/menu.vue')
        },
        {
          // 分类
          path: '/classify',
          name: 'classify-context',
          component: () => import('../views/client/classify.vue')
        },
        {
          // 关于我
          path: '/about-me',
          name: 'aboutMe-context',
          component: () => import('../views/client/about-me.vue')
        },
        {
          // 文章详情
          path: '/article-detail',
          name: 'aboutMe-context',
          component: () => import('../views/client/article-details.vue')
        }
      ]
    }]
});

export default router;
