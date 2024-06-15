import { defineStore } from 'pinia'

export const useTodosStore = defineStore('todos', ()=> {
  const todos = ref<string[]>([])
  const addTodo = (todo: string) => {
    todos.value.push(todo)
  }
  return { todos, addTodo }



})