<template>
  <div class="card mb-6">
    <header class="card-header">
      <p class="card-header-title">Component</p>
      <button class="card-header-icon" aria-label="more options">
        <span class="icon">
          <i class="fas fa-angle-down" aria-hidden="true"></i>
        </span>
      </button>
    </header>
    <div class="card-content">
      <div class="content">
        <h1 class="title">{{ item.content }}</h1>
      </div>
    </div>
    <footer class="card-footer">
      <a href="#" class="card-footer-item">Edit</a>
      <a href="#" class="card-footer-item" @click="deleteItem">Delete</a>
    </footer>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: {
    item: Object,
  },
  methods: {
    deleteItem: function () {
      console.log("deleting key: " + this.item.id);
      fetch("http://localhost:8081/data/" + this.item.id, { method: "DELETE" })
        .then((result) => {
          return result.json();
        })
        .then((data) => {
          console.log(data);
          //   if (data["result"] == 200 && data["description"] == "OK") {
          //   }
        });
    },
  },
};
</script>

<style scoped>
</style>