<template>
    <div class="card" v-if="showProduto" @click="showProduto = false">
        <h2>{{ name }}</h2>
        Preço: {{ price }}
        <br>
        <button @click="addCarrinho">
            Add carrinho
        </button>
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
    },
    data() {
        return {
            showProduto: true
        }
    },
    methods: {
        addCarrinho() {
            this.$store.commit('addProduct', {
                "name": this.name, 
                "price": this.price,
            });
            this.$emit('remove');
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