<template>
  <div class="container">
    <h1 class="fs-sm-6 fs-1">Editando Opiniones de: {{ data.gameUser }}</h1>
    <div class="container text-start ">
        <label class="fs-6">Nombre: </label>
        <input type="text" v-model="data.nameUser" />
        <label class="fs-6">Opinion: </label>
        <textarea cols="30" rows="10" v-model="data.opinionUser" ></textarea>
        <div class="d-grid gap-2 d-md-block text-start">
            <button class="btn btn-primary" type="button"><router-link class="text-decoration-none text-white"  to="/administracion">Regresar</router-link></button>
            <button class="btn btn-info" type="button" @click="editGame">Guardar</button>
        </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "EditarView",
  props: ["id"],
  data: function () {
    return {
      data: {},
    };
  },
  computed: {
    ...mapGetters(["showOpinions"]),
  },
  created() {
    let resultado = this.showOpinions.find((opinion) => opinion.id == this.id);
    //console.log(resultado)(data.gameUser)(juego)
    this.data = resultado;
  },
  methods: {
    editGame() {
      let valid = true;

      if (this.data.nameUser == "") {
        valid = false;
        alert("Requiere colocar su nombre");
      }
      if (this.data.opinionUser == "") {
        valid = false;
        alert("Requiere colocar una Opinion");
      }
      if (valid) {
        alert("Desea guardar los cambios?");
      }
    },
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
    label, input, textarea, div{
        display: block;
        margin-top: 1%;
    }
    input, textarea{
        width: 100%;
    }
    button{
        margin-right: 2%;
    }
    

</style>