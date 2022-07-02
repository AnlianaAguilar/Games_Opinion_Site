<template>
  <div class="container">
    <div class="row">
      <div
        class="col-12 col-lg-3 card mx-3 mt-3 text-start"
        v-for="(game, index) in games"
        :key="index"
      >
        <img :src="game.background_image" class="img-fluid" alt="" />
        <div class="card-body">
          <p>{{ game.name }}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Rating: {{ game.rating }}</li>
          <li class="list-group-item">Released: {{ game.released }}</li>
          <li class="list-group-item">Updated: {{ game.updated }}</li>
        </ul>
        <div class="card-body">
          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            :data-bs-target="'#Modal' + index"
            :data-cy="index"
          >
            Opinar
          </button>
        </div>

        <!-- Modal -->
        <div
          class="modal fade"
          :id="'Modal' + index"
          tabindex="-1"
          :aria-labelledby="'#exampleModalLabel' + index"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" :id="'exampleModalLabel' + index">
                  Escribe tu opinion para el Juego: {{ game.name }}
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <label for="">Nombre</label>
                <input
                  type="text"
                  v-model="nameUser"
                  placeholder="Escriba su nombre"
                /><br />
                <label for="">Opiniones</label>
                <textarea
                  v-model="opinionUser"
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                >
                  Tu opinion debe ir aquí...</textarea
                >
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cerrar
                </button>
                <button
                  type="button"
                  class="btn btn-primary"
                  @click="add(game.name)"
                >
                  Guardar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "GamesList",
  // props: {},
  data: function () {
    return {
      nameUser: "",
      opinionUser: "",
    };
  },
  computed: {
    ...mapState(["games"]),
  },
  methods: {
    ...mapActions(["addOpinions"]),

    add(juego) {
      let valid = true;

      if (this.nameUser == "") {
        valid = false;
        alert("Requiere colocar su nombre");
      }
      if (this.opinionUser == "") {
        valid = false;
        alert("Requiere colocar una Opinion");
      }
      if (valid) {
        alert("Agregar a la opinion");
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
};
</script>

<style scoped>
</style>