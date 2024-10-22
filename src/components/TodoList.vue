<template>
  <div class="todo-app">
    <form @submit.prevent="addNewTask">
      <input v-model="newTask" placeholder="Введите задачу" />
      <button type="submit">Добавить</button>
    </form>

    <ul>
      <li v-for="task in tasks" :key="task.id" class="task-item">
        <span @click="toggleComplete(task)" class="checkbox">
          <input type="checkbox" v-model="task.completed" />
        </span>
        <span :class="{ completed: task.completed }">{{ task.text }}</span>
        <button @click="deleteTask(task.id)">Удалить</button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { ref, computed } from 'vue';
import { useTodoStore } from '../stores/todoStore';

export default {
  setup() {
    const store = useTodoStore();
    const newTask = ref('');

    // Прямая реактивная связь с массивом задач
    const tasks = computed(() => store.tasks);

    const addNewTask = () => {
      if (newTask.value.trim()) {
        store.addTask(newTask.value);
        newTask.value = '';
      }
    };

    const toggleComplete = (task: any) => {
      store.toggleComplete(task);
    };

    const deleteTask = (id: number) => {
      store.deleteTask(id);
    };

    return {
      tasks,
      newTask,
      addNewTask,
      toggleComplete,
      deleteTask,
    };
  },
};
</script>

<style scoped>
.task-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}

.checkbox {
  margin-right: 10px;
  cursor: pointer;
}

.completed {
  text-decoration: line-through;
  color: gray;
}
</style>
