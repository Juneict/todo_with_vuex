import axios from "axios"

export default {
    state : {
        todos : []
    },
    getters : {
        myTodos(state) {
            return state.todos
        }
    },
    mutations : {
        setTodos(state, todos) {
            state.todos = todos
        },
        setTodo(state, todo) {
            state.todos.unshift(todo)
        },
        removeTodo(state, removeId) {
            state.todos = state.todos.filter(todo=>{
                return todo.id!=removeId
            })
        },
        updateTodo(state, todo) {
            state.todos.forEach(t => {
                if(t.id === todo.id) {
                    t = todo;
                }
            })
        }
    },
    actions : {
        async getTodos({commit}) {
          let res =  await axios.get("https://jsonplaceholder.typicode.com/todos");
          let todos = res.data;

          commit('setTodos', todos)
        },

        async addTodo({commit}, newTodo) {
            let res =  await axios.post("https://jsonplaceholder.typicode.com/todos", newTodo);
            let todo = res.data;

            commit('setTodo', todo)
        },

        async deleteTodo(context, removeId) {
            let res =  await axios.delete(`https://jsonplaceholder.typicode.com/todos/${removeId}`);
            context.commit('removeTodo', removeId)
        },

        async filterTodo({commit}, limit) {
            let res = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`);
            let todos = res.data;

            commit('setTodos', todos)
        },

        async updateTodo(context, todo) {
            let res = await axios.put(`https://jsonplaceholder.typicode.com/todos/${todo.id}`, todo);
            context.commit('updateTodo', res.data)
        }
    }
}