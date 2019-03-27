import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/home.vue';
import About from '../views/about.vue';
import Team from '../views/team.vue';
import People from '../views/people.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/team', component: Team },
  { path: '/people', component: People },
];

const router = new VueRouter({routes});

export default router;
