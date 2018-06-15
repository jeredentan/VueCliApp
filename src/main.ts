// import Vue from 'vue';
// import App from './App.vue';
// import router from './router';
// import store from './store';
// import './registerServiceWorker';

// import 'bootstrap/dist/css/bootstrap.css';

// Vue.config.productionTip = false;

// new Vue({
//   router,
//   store,
//   render: (h) => h(App),
// }).$mount('#app');

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store';

// import the main Sass manifest file
import '@/assets/main.scss';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';

import Vuenut from 'vuenut';
import 'vuenut/dist/vuenut.css';

Vue.config.productionTip = false;
Vue.use(Vuenut);

new Vue({
  router,
  store,
  render: (h: any) => h(App),
}).$mount('#app');

axios.interceptors.request.use(
  (config: any) => {
    const authToken = store.getters['auth/authToken'];
    if (authToken) {
      config.headers.Authorization = `Bearer ${authToken}`;
    }
    return config;
  },
  (err: any) => {
    return Promise.reject(err);
  },
);
