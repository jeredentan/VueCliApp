import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import NotFoundPage from './views/NotFoundPage.vue';
import RegistrationForm from './views/account/RegistrationForm.vue';
import LoginForm from './views/account/LoginForm.vue';
import store from './store/store';

Vue.use(Router);

const router = new Router({
  mode: 'history', // (https://router.vuejs.org/guide/essentials/history-mode.html#example-server-configurations)
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: { requiresAuth: true },
    },
    {
      path: '/register',
      name: 'registrationForm',
      component: RegistrationForm,
    },
    {
      path: '/login',
      name: 'loginForm',
      component: LoginForm,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      meta: { requiresAuth: true },
    },
    {
      path: '*',
      component: NotFoundPage,
      // redirect: '/',
      // meta: { requiresAuth: true },
    },
  ],
});

router.beforeEach((to: any, from: any, next: any) => {
  // console.log('Checking if user is authenticated ...');

  if (to.matched.some((record: any) => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!store.getters['auth/isAuthenticated']) {
      next({
        path: '/login',
        query: { redirect: to.fullPath },
      });
    } else {
      next();
    }
  } else {
    next(); // make sure to always call next()!
  }
});

export default router;
