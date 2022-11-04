<template>
    <h1>Produtos</h1>  
    <ProductCardVue v-for="product in $store.state.products" :key="product.id" :name="product.name" :price="product.price"/>
</template>
<script>
import ProductCardVue from '@/components/ProductCard.vue';
export default {
    components: {
        ProductCardVue,
    }
}
</script>