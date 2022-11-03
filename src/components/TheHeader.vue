<template>
    <div class="header">
        <slot name='title'/>
        <slot name='description'/>
        <slot/>
    </div>
    <div class="todo-items" v-for="obj in todos" :key="obj.id" >
        {{ obj.title }}
    </div>
    <img :src="imgSrc" v-bind:alt="imgAlt">
</template>

<script>
    export default {
        data() {
            return {
                imgSrc: 'www.google.com',
                imgAlt: 'Imagem boa',
                todos: [
                    {
                        "userId": 1,
                        "id": 1,
                        "title": "delectus aut autem",
                        "completed": false
                    },
                    {
                        "userId": 1,
                        "id": 2,
                        "title": "quis ut nam facilis et officia qui",
                        "completed": false
                    },
                    {
                        "userId": 1,
                        "id": 3,
                        "title": "fugiat veniam minus",
                        "completed": false
                    },
                    {
                        "userId": 1,
                        "id": 4,
                        "title": "et porro tempora",
                        "completed": true
                    },
                    {
                        "userId": 1,
                        "id": 5,
                        "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
                        "completed": false
                    }
                ]
            }
        }
    }
</script>

<style>
    .header {
        background-color: #000;
        color: #fff;
    }

    .todo-items {
        background-color: rgb(209, 56, 56);
        color: #fff;
        padding: 5px;
        margin: 5px;
    }
</style>