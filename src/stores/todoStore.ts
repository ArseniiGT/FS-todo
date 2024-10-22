import { defineStore } from 'pinia';

export interface Task {
  id: number;
  text: string;
  completed: boolean;
}

export const useTodoStore = defineStore('todo', {
  state: () => ({
    tasks: JSON.parse(localStorage.getItem('tasks') || '[]') as Task[],
  }),
  actions: {
    addTask(text: string) {
      const newTask: Task = {
        id: Date.now(),
        text,
        completed: false,
      };
      this.tasks.push(newTask);
      this.saveTasks();
    },
    toggleComplete(task: Task) {
      task.completed = !task.completed;
      this.saveTasks();
    },
    editTask(id: number, newText: string) {
      const task = this.tasks.find((task) => task.id === id);
      if (task) {
        task.text = newText;
        this.saveTasks();
      }
    },
    deleteTask(id: number) {
      this.tasks = this.tasks.filter((task) => task.id !== id);
      this.saveTasks();
    },
    saveTasks() {
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
  },
});
