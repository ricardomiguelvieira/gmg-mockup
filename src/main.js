import Vue from 'vue';
import App from './app.vue';
import router from '../router';
import BootstrapVue from 'bootstrap-vue'
import VueLodash from 'vue-lodash'
import axios from 'axios'
import VueAxios from 'vue-axios'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(require('vue-faker'));
Vue.use(VueLodash);
Vue.use(VueAxios, axios)

const app = new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
