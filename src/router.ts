import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import NotFoundPage from './views/NotFoundPage.vue';

Vue.use(Router);

export default new Router({
  mode: 'history', // (https://router.vuejs.org/guide/essentials/history-mode.html#example-server-configurations)
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    { path: '*', component: NotFoundPage },
  ],
});
