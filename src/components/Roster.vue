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
              <h3>{{ player.first_name }} {{ player.last_name }}</h3>
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
    filteredPlayers() {
      return _.sortBy(this.players.filter(p => {
        const searchTerm = `${p.first_name},${p.last_name},${p.number}`.toLowerCase();
        const found = searchTerm.indexOf(this.search.toLowerCase()) !== -1;
        return found ? true : false;
      }), ['number', 'lastName']);
    },

    orderedPlayers() {
      return _.sortBy(this.filteredPlayers, [function(p) { return p.number; }]);
    }
  },
  methods: {
    getRoster() {
      axios.get('https://rockets-api.allensservices.com/api/roster')
        .then(response => {
          this.players = response.data;
        })
    },
  },
  created() {
    this.getRoster();
  },
}
</script>

