import Vue from 'vue';
import VueRouter from 'vue-router';
import Welcome from '../components/Welcome.vue';
import Register from '../components/Register.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome,
  },
  {
    path: '/register',
    name: 'Registrieren',
    component: Register,
  }
];

const router = new VueRouter({
  base: '/plugn-roll-fhgr/',
  routes,
});

export default router;
