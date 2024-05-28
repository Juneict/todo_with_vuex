<template>
    <div>
        <h1 class="text-primary text-center">Todo Lists</h1>
        <div class="container">
            <div class="row">
                <AddTodo />
                <FilterTodo />
                <div class="col-md-4 my-4" v-for="todo in myTodos" :key="todo.id">
                    <b-card @dblclick="toggleComplete(todo)" :bg-variant="changeBackground(todo)" text-variant="white" class="text-center">
                        <b-card-text class="d-flex justify-content-between">
                            <span> {{ todo.title }}</span>
                            <b-icon-trash variant="danger" @click="deleteTodo(todo.id)"></b-icon-trash></b-card-text>
                    </b-card>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {mapGetters, mapActions} from "vuex";
import AddTodo from "./AddTodo";
import FilterTodo from "./FilterTodo"

export default {
    components: {
        AddTodo,
        FilterTodo
    },
    computed:  mapGetters(["myTodos"]),
    methods : {
        toggleComplete (todo) {
            todo.completed =! todo.completed
            this.updateTodo(todo);
        },
        changeBackground (todo) {
            return todo.completed ? 'success' : 'primary'
        },
        ...mapActions(["getTodos", "deleteTodo", "updateTodo"]),
    },
    mounted() {
       this.getTodos();
    },
  };
  </script>
  