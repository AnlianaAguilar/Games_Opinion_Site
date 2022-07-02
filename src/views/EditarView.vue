<template>
    <div>
        <h1>Editando Opiniones de: {{data.gameUser}}</h1>
       <label for="">nombre</label>
       <input type="text" v-model="data.nameUser">
        <label for="">Opinion</label>
       <textarea name="" id="" cols="30" rows="10" v-model="data.opinionUser"></textarea>
       <button><router-link to='/administracion'>Regresar</router-link></button>
       <button @click="add(data.gameUser)">Guardar</button>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'EditarView',
    props: [
        'id'
    ],
    data: function(){
        return {
            data:{},
        }
    },
    computed: {
        ...mapGetters(['showOpinions'])
    },
    created(){
        let resultado = this.showOpinions.find(opinion=> opinion.id==this.id)
        //console.log(resultado)
        this.data=resultado
    },
    methods: {
         ...mapActions(["addOpinions"]),

    add(juego) {
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
        alert("Editar a la opinion");
        let opinion = {
          nameUser: this.nameUser,
          opinionUser: this.opinionUser,
          gameUser: juego,
        };
        this.addOpinions(opinion);
        console.log(opinion);
        this.nameUser = "";
        this.opinionUser = "";
      }
    },
    },
    // watch: {},
    // components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    
</style>