<template>
  <div class="container my-5">
    <div class="alert alert-danger" role="alert" v-if="showOpinions <= 0">
      No existe Opiniones por Administrar!
    </div>

    <table class="table" v-else>
      <!-- v-if="showOpinions >= 1" -->
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">id</th>
          <th scope="col">Persona</th>
          <th scope="col">Juego</th>
          <th scope="col">Opinión</th>
          <th scope="col"></th>
          
        </tr>
      </thead>
      <tbody>
        <tr v-for="(opinion, index) in showOpinions" :key="index">
          <th scope="row">{{index}}</th>
          <td>{{opinion.id}}</td>
          <td>{{ opinion.nameUser }}</td>
          <td>{{ opinion.gameUser }}</td>
          <td>{{ opinion.opinionUser }}</td>
          <td>
            <button class="mx-3 btn btn-danger" @click="remove(index)">Eliminar</button>
            <button class="btn btn-info" @click="edit(opinion.id)">Editar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "AdministrationList",
  // props: {},
  data: function () {
    return {};
  },
  computed: {
    ...mapGetters(["showOpinions"]),
  },
  methods: {
      ...mapActions(['removeOpinion']),

      remove(index){
        // alert(id)
        let resp = confirm('Esta seguro que desea Eliminar la opinion?')
        if(resp){
            this.removeOpinion(index)
        }      

      },

      edit(id){
          // alert(id)
          this.$router.push(`/editar/${id}`)
      }
  },
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

