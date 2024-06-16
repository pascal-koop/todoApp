import { defineStore } from 'pinia'
import type { Todo } from '~/types/todo'

export const useTodosStore = defineStore('todos', ()=> {
  const todos = ref<Todo[]>([]) // Provide the correct type for the 'todos' array
  const addTodo = (Newtodo: Todo) => {
    Newtodo.id = Math.floor(Math.random() * 10000)
    todos.value.push({ ...Newtodo })
    console.log(todos.value)
  }
  return { todos, addTodo }

})