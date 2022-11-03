<template>
    <h1>Computed properties</h1>
    <div>{{ fullName }}</div>
    <br><br>
    <h3>Tarefas incompletas</h3>
    <ul>
        <li :style="todoStyle" v-for="todo in unCompletedTodos" :key="todo.id"> {{ todo.title }}</li>
    </ul>
    <br><br>
    <h3>Tarefas completas</h3>
    <ul>
        <li :class="todoStyle" v-for="todo in completedTodos" :key="todo.id"> {{ todo.title }}</li>
    </ul>
    <br><br>
</template>
<script>
export default {
    data() {
        return {
            todoStyle: {
                'margin': '15px',
            },
            user: {
                first_name: 'Jon',
                last_name: 'Snow',
            },
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
                ],
        }
    },

    computed: {
        fullName() {
           return `${this.user.first_name} ${this.user.last_name}`;
        },
        completedTodos() {
            return this.todos.filter(todo => todo.completed);
        },    
        unCompletedTodos() {
            return this.todos.filter(todo => !todo.completed);
        },    
    }
}
</script>
<style>
</style>