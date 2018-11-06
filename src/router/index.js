import Vue from 'vue';
import Router from 'vue-router';
import News from '@/components/News.vue';
import Roster from '@/components/Roster.vue';
import Schedule from '@/components/Schedule.vue';
import Standings from '@/components/Standings.vue';

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
    {
      path: '/standings',
      name: 'standings',
      component: Standings
    },
    {
      path: '/news',
      name: 'news',
      component: News
    },
  ]
})