import Vue from 'vue';
import VueRouter from 'vue-router';
import Welcome from '../components/Welcome.vue';
import Property from '../components/Property.vue';
import Employer from '../components/Employer.vue';
import PublicCharging from '../components/PublicCharging.vue';
import TourismAndGastro from '../components/TourismAndGastro.vue';
import Register from '../components/Register.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome,
  },
  {
    path: '/property',
    name: 'Immobilien',
    component: Property,
  },
  {
    path: '/employer',
    name: 'Arbeitgeber',
    component: Employer,
  },
  {
    path: '/public_charging',
    name: 'Öffentliches Laden',
    component: PublicCharging,
  },
  {
    path: '/tourism_and_gastro',
    name: 'Tourismus & Gastro',
    component: TourismAndGastro,
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
