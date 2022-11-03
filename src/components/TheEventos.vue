<template>
    <h1>Eventos</h1>
    <div>
        <button @:click="onCLick">Enviar</button>
    </div>
    <br><br>
    <div>
        <h2 @mouseover="mouseOver">Mouse over</h2>
    </div>
</template>
<script>
    export default {
        methods: {
            onCLick() {
                console.log('aconteceu')
            },
            mouseOver() {
                console.log('mouse over')
            }
        }
    }
</script>
<style>
</style>