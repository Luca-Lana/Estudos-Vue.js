<template>
    <h1>Editar usuário</h1>
    {{ $route }}
    <br><br>
    <div>
        <h1>Fazer login</h1>
        <button @click="login">Logar</button>
    </div>
</template>
<script>
export default {
    methods: {
        login() {
            //ajax
            console.log('Ajax logar');
            this.$router.push('/info');
        }
    }
}
</script>
<style>
</style>