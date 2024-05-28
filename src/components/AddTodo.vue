<template>
  <div class="input-group mb-3">
    <input type="text" class="form-control" placeholder="Add Todo" v-model="newTodo.title">
    <div class="btn btn-primary" @click="addTodo(newTodo)">Add Todo</div>
    </div>
</template>

<script>
import {mapActions} from "vuex";
export default {
    data() {
        return {
            newTodo : {
                title : "",
            }
        }
    },
    methods : mapActions(["addTodo"])
}
</script>

<style>

</style>