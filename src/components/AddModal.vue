<template>
  <div>
    <button class="button" type="submit" @click="openAddBox">Add</button>
    <div class="modal" :class="addStatus ? 'is-active' : ''">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Your to-do item</p>
          <button
            class="delete"
            aria-label="close"
            @click="closeAddBox"
          ></button>
        </header>
        <section class="modal-card-body">
          <!-- Content ... -->
          <input
            class="input"
            type="text"
            placeholder="Clean the bathroom"
            v-model="todoItem"
          />
        </section>
        <footer class="modal-card-foot">
          <button class="button is-success" @click="addTodoItem">Submit</button>
          <button class="button" @click="closeAddBox">Cancel</button>
        </footer>
      </div>
      <button
        class="modal-close is-large"
        aria-label="close"
        @click="closeAddBox"
      ></button>
    </div>
  </div>
</template>

<script>
import { nanoid } from "nanoid";
export default {
  name: "AddModal",
  props: {
    todo: Array,
  },
  data() {
    return {
      addStatus: false,
      todoItem: "",
    };
  },
  methods: {
    openAddBox: function () {
      this.addStatus = true;
    },
    closeAddBox: function () {
      this.addStatus = false;
    },
    addTodoItem: function () {
      const newId = nanoid();
      let payload = { id: newId, content: this.todoItem };
      let jsonItem = {};
      jsonItem[newId] = this.todoItem;
      fetch("http://localhost:8081/data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(jsonItem),
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          if (data["result"] == 200 && data["description"] == "OK") {
            this.$store.commit("addItem", payload);
          }
        });

      this.addStatus = false;
    },
  },
};
</script>
