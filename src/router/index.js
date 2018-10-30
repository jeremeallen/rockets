import Vue from 'vue';
import Router from 'vue-router';
import Roster from '@/components/Roster.vue';
import Schedule from '@/components/Schedule.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'roster',
      component: Roster
    },
    {
      path: '/schedule',
      name: 'schedule',
      component: Schedule
    },
  ]
})