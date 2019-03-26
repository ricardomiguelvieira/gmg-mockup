
import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/home.vue';
import About from '../views/about.vue';
import Team from '../views/team.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/team', component: Team },
];

const router = new VueRouter({routes});

export default router;
