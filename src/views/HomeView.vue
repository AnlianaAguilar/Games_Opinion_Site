<template>
  <div class="container my-3">
    <h1>Lista de Juegos Disponibles</h1>
    <GamesList></GamesList>
  </div>
</template>

<script>
// @ is an alias to /src

import GamesList from '@/components/GamesList.vue'
export default {
  name: 'HomeView',
  components: {
    GamesList,
  }
}
</script>
