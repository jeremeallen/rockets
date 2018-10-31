<template>
  <div class="row">
    <div class="col-sm-8 offset-sm-2">
      <h2 class='text-center'>Schedule</h2>
      <table class='table table-sm' v-if='games.length'>
        <thead>
          <tr>
            <th>Date</th>
            <th>Visiting</th>
            <th>Home</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for='(game, index) in games' :key='`game-${ index }`'>
            <td>{{ game.datetime | date }}</td>
            <td>{{ game.visitor }}</td>
            <td>{{ game.home }}</td>
            <td>{{ game.datetime | time }} (CST)</td>
          </tr>
        </tbody>
      </table>
      <div v-else class='text-center'>
        <h5>No games</h5>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import _ from 'lodash';
import moment from 'moment-timezone';

export default {
  name: 'Schedule',
  data() {
    return {
      headers: ['First Name', 'Last Name', 'Number'],
      games: [],
    };
  },
  filters: {
    date(value) {
      return moment(value).tz('America/Chicago').format("dddd, MMMM Do");
    },

    time(value) {
      return moment(value).tz('America/Chicago').format("h:mm a");
    },
  },
  methods: {
    getSchedule() {
      axios.get('https://rockets-api.allensservices.com/api/schedule')
        .then(response => {
          this.games = response.data;
        })
    },
  },
  created() {
    this.getSchedule();
  },
}
</script>

