<template>
  <div class="row">
    <div class="col-sm-8 offset-sm-2">
      <h2 class='text-center'>Roster</h2>
      <form>
        <div class="form-group">
          <input type='text' placeholder='Search' v-model='search' class='form-control' />
        </div>
      </form>
      <table class='table table-sm' v-if='filteredPlayers.length'>
        <tbody>
          <tr v-for='(player, index) in filteredPlayers' :key='`player-${ index }`'>
            <td class='pt-3'>
              <h3><span class="badge badge-secondary badge-pill float-left ml-2 mr-3">{{ player.number }}</span></h3>
            </td>
            <td class='pt-3'>
              <h3>{{ player.firstName }} {{ player.lastName }}</h3>
            </td>
          </tr>
        </tbody>
      </table>
      <div v-else class='text-center'>
        <h5>No players</h5>
        <button class='btn btn-secondary' @click.prevent='search = ""'>Clear filter</button>
      </div>
    </div>
  </div>
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
      search: ''
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

    filteredPlayers() {
      return _.sortBy(this.cleanedPlayers.filter(p => {
        const searchTerm = `${p.firstName},${p.lastName},${p.number}`.toLowerCase();
        const found = searchTerm.indexOf(this.search.toLowerCase()) !== -1;
        return found ? true : false;
      }), ['number', 'lastName']);
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

