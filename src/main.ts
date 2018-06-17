import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store';
import axios from 'axios';

// import BootstrapVue from 'bootstrap-vue';
// Vue.use(BootstrapVue);
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap-vue/dist/bootstrap-vue.css';

import 'mdbootstrap/css/mdb.css';
import 'bootstrap/dist/css/bootstrap.css';

Vue.config.productionTip = false;

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
