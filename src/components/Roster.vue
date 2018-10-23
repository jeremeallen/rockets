<template>
  <ul class="list-group">
    <li class="list-group-item" v-for='(player, index) in orderedPlayers' :key='`player-${ index }`'>
      <h3>{{ player.firstName }} {{ player.lastName }}
      <span class="badge badge-primary badge-pill float-right">{{ player.number }}</span></h3>
    </li> 
  </ul>
</template>

<script>
import axios from 'axios';
import _ from 'lodash';

export default {
  name: 'Roster',
  data() {
    return {
      headers: ['First Name', 'Last Name', 'Number'],
      players: [],
    };
  },
  computed: {
    cleanedPlayers() {
      return this.players.map(p => {
        return {
          firstName: p.gsx$firstname['$t'],
          lastName: p.gsx$lastname['$t'],
          number: Number(p.gsx$number['$t']),
        };
      });
    },

    orderedPlayers() {
      return _.sortBy(this.cleanedPlayers, [function(p) { return p.number; }]);
    }
  },
  methods: {
    getRoster() {
      axios.get('https://spreadsheets.google.com/feeds/list/1FB7Gn0Ydtbmv2C2iNMjDm37FGAj-7jIotma7vr6qXzI/od6/public/values?alt=json')
        .then(response => {
          this.players = response.data.feed.entry;
        })
    },
  },
  created() {
    this.getRoster();
  },
}
</script>

