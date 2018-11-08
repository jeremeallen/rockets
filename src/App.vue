<template>
  <div class='body'>
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <a class="navbar-brand logo" href="#">
        <img alt="NJ Rockets" src="./assets/NJR-logo_large.png" width='30'>
        NJ Rockets
      </a>
      <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation" ref="hamburger">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="navbar-collapse collapse" id="navbarCollapse" style="">
        <ul class="navbar-nav mr-auto">
          <router-link tag="li" to="/" class="nav-item">
            <a class="nav-link" @click="closeHamburger">Home</a>
          </router-link>
          <router-link tag="li" to="/schedule">
            <a class="nav-link" @click="closeHamburger">Schedule</a>
          </router-link>
          <router-link tag="li" to="/standings">
            <a class="nav-link" @click="closeHamburger">Standings</a>
          </router-link>
          <router-link tag="li" to="/news">
            <a class="nav-link" @click="closeHamburger">News</a>
          </router-link>
        </ul>
      </div>
    </nav>
    <main role="main" class="container">
      <div id="app">
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>

<script>

export default {
  name: 'app',
  watch: {
    '$route': 'closeHamburger'
  },
  methods: {
    closeHamburger() {
      this.$refs.hamburger.click();
    }
  },
}
</script>

<style lang='scss'>
  @import '../node_modules/bootstrap/scss/bootstrap.scss';

  .body {
    padding-top: 4rem;
  }

  .logo img {
    margin-top: -10px
  }
</style>

