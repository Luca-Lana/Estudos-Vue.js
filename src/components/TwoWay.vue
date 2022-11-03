<template>
    <h1>Two way data bind</h1>
    v-model -> formulários
    <br>
    <label for="">Nome: </label>
    <input type="text" v-model="name">
    <br>
    {{ name }}
    <br><br>

    <select name="" v-model="esporte">
        <option value="">Escolha uma opção</option>
        <option value="futebol">Futebol</option>
        <option value="futsal">Futsal</option>
        <option value="volei">Volei</option>
    </select>
    <br>
    {{esporte}}
    <br><br>

    News
    <input type="radio" v-model="newsletter" value="sim">SIM
    <input type="radio" v-model="newsletter" value="não">NÃO
    <br>
    {{ newsletter }}
    <br><br>

    <label for="">Contrato</label>
    <input type="checkbox" v-model="contract"> Aceita nosso contrato....
    <br>
    {{ contract }}
    <br><br>
    
    <label for="">Cores que voce mais gosta</label>
    <input type="checkbox" v-model="colors" value="azul"> Azul
    <input type="checkbox" v-model="colors" value="amarelo"> Amarelo
    <br><br>
    {{ colors }}

</template>
<script>
    export default {
        data () {
            return {
                name: '',
                esporte: '',
                newsletter: '',
                contract: false,
                colors: [],
            }
        }
    }
</script>
<style>

</style>