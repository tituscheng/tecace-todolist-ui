<template>
  <div>
    <TodoItem
      v-for="item in todoList.slice().reverse()"
      v-bind:key="item.id"
      :item="item"
    >
    </TodoItem>
  </div>
</template>

<script>
import TodoItem from "./TodoItem.vue";
import { mapState } from "vuex";
export default {
  name: "TodoItemList",
  data() {
    return {};
  },
  computed: mapState({
    todoList: (state) => state.todoList,
  }),
  components: { TodoItem },
  mounted() {
    let ref = this;
    fetch("http://localhost:8081/all")
      .then(function (response) {
        return response.json();
      })
      .then(function (result) {
        var data = result["data"];
        Object.keys(data).forEach((key) =>
          ref.$store.commit("addItem", { id: key, content: data[key] })
        );
      })
      .catch(function (error) {
        console.log("Looks liek there was a problems: ", error);
      });
  },
};
</script>
