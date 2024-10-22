<script setup lang="ts">
import TodoList from './components/TodoList.vue';
</script>

<template>
  <div class="app-container">
    <h1>Мои задачи</h1>
    <TodoList />
  </div>
</template>

<style scoped>
.app-container {
  text-align: center;
  margin-top: 50px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

h1 {
  color: #42b883;
}
</style>
