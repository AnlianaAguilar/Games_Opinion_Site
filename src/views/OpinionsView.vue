<template>
  <div class="container my-5">
    <h2>Lista de Opiniones</h2>
    <opinionsList></opinionsList>
  </div>
</template>

<script>
import OpinionsList from '@/components/OpinionsList.vue'

export default {
  name: 'component-name',
  // props: {},
  data: function(){
    return {}
  },
  // computed: {},
  //methods: {},
  // watch: {},
  components: {
    OpinionsList
  },
  // mixins: [],
  // filters: {},
  // -- Lifecycle Methods
  // -- End Lifecycle Methods
}
</script>

<style scoped>
  
</style>