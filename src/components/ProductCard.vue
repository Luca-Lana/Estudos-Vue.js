<template>
    <div class="card">
        <h2>{{ name }}</h2>
        Preço: {{ price }}
    </div>
</template>
<script>
export default {
    props: {
        name: {
            type: String,
            default: '',
        },
        price: {
            type: Number,
            default: 0,
        }
    }
}
</script>
<style>
    .card {
        background-color: bisque;
        border-radius: 6px;
        margin: 5px;
        width: 500px;
    }
</style>