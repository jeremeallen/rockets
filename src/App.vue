<template>
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Starter Template for Bootstrap</title>
  </head>

  <body>

    <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
      <a class="navbar-brand logo" href="#">
        <img alt="NJ Rockets" src="./assets/NJR-logo_large.png" width='30'>
        NJ Rockets
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    </nav>

    <main role="main" class="container">
      <div id="app">
        <roster></roster>
      </div>
    </main>
  </body>
</html>
</template>

<script>
import Roster from './components/Roster.vue'

export default {
  name: 'app',
  components: {
    Roster
  }
}
</script>

<style lang='scss'>
  @import '../node_modules/bootstrap/scss/bootstrap.scss';

  body {
    padding-top: 3rem;
  }

  .logo img {
    margin-top: -10px
  }
</style>

