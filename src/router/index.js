import Vue from 'vue';
import VueRouter from 'vue-router';
import Welcome from '../components/Welcome.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome,
  }
];

const router = new VueRouter({
  base: '/plugn-roll-fhgr/',
  routes,
});

export default router;
