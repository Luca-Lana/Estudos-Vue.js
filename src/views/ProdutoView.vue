<template>
    <h1>Produtos</h1>  
    <ProductCardVue v-for="product in $store.state.products" :key="product.id" :name="product.name" :price="product.price"/>
    <br><br>
    <h2>Carrinho</h2>
    {{ $store.state.carrinho }}
    <br><br>
    <div>
        <bold>Total:</bold> R$: {{ $store.getters.totalCarrinho }}
    </div>
</template>
<script>
import ProductCardVue from '@/components/ProductCard.vue';
export default {
    components: {
        ProductCardVue,
    },
}
</script>