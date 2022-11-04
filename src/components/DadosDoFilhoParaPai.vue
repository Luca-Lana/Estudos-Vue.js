<template>
    <div class="alert">
        Seu formulário foi enviado!
        <button @click="clicou">
            X
        </button>
    </div>
</template>
<script>
export default {
    methods: {
        clicou() {
            this.$emit('fecharAlert');
        }
    }
}
</script>
<style>
    .alert {
        background-color: bisque;
        border-radius: 6px;
    }
</style>