import Vue from 'vue'
import Vuex from 'vuex'
import 'es6-promise/auto'

Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        todoList: []
    },
    mutations: {
        addItem(state, value) {
            state.todoList.push(value)
        }
    },
    modules: {

    }
})