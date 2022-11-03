<template>
    <h1>Observadores</h1>
    <div>
        <input type="text" v-model="name">
        <br>
        {{ name }}
        <br><br><br>
        <h3>Page Count</h3>
        <select v-model="pageCount">
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
        </select>
        <br>
        {{ pageCount }}
    </div>
</template>
<script>
export default {
    data() {
        return{
            name: '',
            pageCount: 5,
        }
    },
    methods: {
        saveUser() {
            console.log('Ajax');
            console.log(this.name);
        },
        changePage() {
            console.log("ajax change page");
        }
    },
    computed: {

    },
    watch: {
        name(newValue) {
            if (newValue.length >= 3) {
                this.saveUser();
            }
        },
        pageCount() {
            this.changePage();
        }
    }    
}
</script>
<style>

</style>