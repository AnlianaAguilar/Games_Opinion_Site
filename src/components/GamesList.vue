<template>
  <div class="container">
    <div class="row">      
        <div class="col-12 col-lg-3 card mx-3 mt-3 text-start" v-for="(game,index) in games" :key="index" >
          <img :src="game.background_image" class="img-fluid" alt="" />
          <div class="card-body">
            <p>{{game.name}}</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Rating: {{game.rating}}</li>
            <li class="list-group-item">Released: {{game.released}}</li>
            <li class="list-group-item">Updated: {{game.updated}}</li>
          </ul>
          <div class="card-body">
            <button type="button" class="btn btn-primary">Opinar</button>
          </div>
        </div>
      
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"
export default {
  name: "GamesList",
  // props: {},
  data: function () {
    return {};
  },
  computed: {
    ...mapState(['games']),
  },
  //methods: {},
  // watch: {},
  // components: {},
  // mixins: [],
  // filters: {},
  // -- Lifecycle Methods
  // -- End Lifecycle Methods
};
</script>

<style scoped>
</style>