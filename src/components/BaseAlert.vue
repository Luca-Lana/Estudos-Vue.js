<template>
    <div :class="varStyle">
        Seu formulário foi enviado com sucesso!!
    </div>
</template>
<script>
export default {
    props: {
        varStyle: {
            type: String,
            default: '',
        }
    }
}
</script>
<style scoped>
    .alert {
        padding: 5px;
        border-radius: 6px;
        color: gray;
        background-color: #ddd;
    }
    .alert-success {
        background-color: #42b983;
        color: #fff;
    }
</style>