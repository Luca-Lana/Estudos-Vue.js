<template>
    <h1>Dados Vuex</h1>
    {{ $store.state }}
    <br><br>
    {{ $store.state.user }}
    <br><br>
    {{ $store.state.numbers }}
    <br><br>
    <button @click="alterarDados">
        Alterar dadoos
    </button>
</template>
<script>
export default {
    methods: {
        alterarDados() {
            this.$store.commit('storeUser', 'Valor  trocado')
        }
    }
}
</script>
<style>
</style>