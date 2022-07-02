<template>
    <div class="container my-5">
        <h1>Administrando Lista de Opiniones</h1>
        <administrationList></administrationList>
    </div>
</template>

<script>
import AdministrationList from '@/components/AdministrationList.vue'
export default {
    name: 'administrationView',
    // props: {},
    data: function(){
        return {}
    },
    // computed: {},
    //methods: {}
    // watch: {},
    components: {
        AdministrationList
    },
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    
</style>