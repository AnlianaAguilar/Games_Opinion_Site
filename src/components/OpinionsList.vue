<template>
  <div class="container">
    <div
      class="alert alert-danger"
      v-if="this.showOpinions <= 0"
      role="alert"
    >
      No exixte opiniones Por mostrar!
    </div>

    <div class="accordion accordion-flush my-4" id="accordionFlushExample">
      <div class="accordion-item" v-for="(opinion, index) in showOpinions"
        :key="index">
        <h2 class="accordion-header" id="flush-headingOne">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseOne"
            aria-expanded="false"
            aria-controls="flush-collapseOne"
          >
            Opinión creada por: {{opinion.nameUser}}.
            PARA EL JUEGO: {{opinion.gameUser}}
          </button>
        </h2>
        <div
          id="flush-collapseOne"
          class="accordion-collapse collapse"
          aria-labelledby="flush-headingOne"
          data-bs-parent="#accordionFlushExample"
        >
          <div class="accordion-body">Opinión{{opinion.opinionUser}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "OpinionView",
  // props: {},
  data: function () {
    return {};
  },
  computed: {
    ...mapGetters(["showOpinions"]),
  },
  methods: {},
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
