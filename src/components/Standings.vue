<template>
  <div class="row">
    <div class="col-sm-8 offset-sm-2">
      <h2 class='text-center'>Standings</h2>
      <table class='table table-sm table-striped' v-if='teams.length'>
        <thead>
          <tr>
            <th>Place</th>
            <th>Team</th>
            <th>GP</th>
            <th>W</th>
            <th>L</th>
            <th>OTL</th>
            <th>SOW</th>
            <th>SOL</th>
            <th>PTS</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for='(team, index) in teams' :key='`team-${ index }`'>
            <td>{{ team.order }}</td>
            <td>{{ team.team }}</td>
            <td>{{ team.games_played }}</td>
            <td>{{ team.wins }}</td>
            <td>{{ team.losses }}</td>
            <td>{{ team.ot }}</td>
            <td>{{ team.sow }}</td>
            <td>{{ team.sol }}</td>
            <td>{{ team.points }}</td>
          </tr>
        </tbody>
      </table>
      <div v-else class='text-center'>
        <h5>Standiongs not available</h5>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import _ from 'lodash';

export default {
  name: 'Standings',
  data() {
    return {
      headers: ['GP'],
      teams: [],
      search: ''
    };
  },
  methods: {
    getStandings() {
      axios.get('https://rockets-api.allensservices.com/api/standings')
        .then(response => {
          this.teams = response.data;
        })
    },
  },
  created() {
    this.getStandings();
  },
}
</script>

