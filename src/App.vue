<template>
  <div id="app">
    <div class="container">
      <h1 class="title">To Do List</h1>
      <p class="subtitle">Assist on your daily activities</p>
      <AddModal></AddModal>
      <TodoItemList></TodoItemList>
    </div>
  </div>
</template>

<script>
import AddModal from "@/components/AddModal.vue";
import TodoItemList from "./components/TodoItemList.vue";
export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    AddModal,
    TodoItemList,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
  margin-top: 60px;
}
</style>
