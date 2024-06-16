import { defineStore } from 'pinia'
import type { Todo } from '~/types/todo'

export const useTodosStore = defineStore('todos', ()=> {
  const todos = ref<Todo[]>([]) // Provide the correct type for the 'todos' array
  const addTodo = (Newtodo: Todo) => {
    Newtodo.id = Math.floor(Math.random() * 10000)
    todos.value.push({ ...Newtodo })
    console.log(todos.value)
  }

  const deleteTodoItem = (id: number) => {
    const index = todos.value.findIndex((todo) => todo.id === id)
    if (index !== -1) {
      todos.value.splice(index, 1)
    }
  }

  const markTodoAsCompleted = (id: number) => {
    const index = todos.value.findIndex((todo) => todo.id === id)
    if (index !== -1) {
      todos.value[index].completed = true
    }
  }

  const markTodoAsUndone = (id: number) => {
    const index = todos.value.findIndex((todo) => todo.id === id)
    if (index !== -1) {
      todos.value[index].completed = false
    }
  }

  const updateTodo = (id: number, title: string) => {
    const index = todos.value.findIndex((todo) => todo.id === id)
    if (index !== -1) {
      todos.value[index].title = title
    }
  }
  return { todos, addTodo, deleteTodoItem, markTodoAsCompleted, markTodoAsUndone, updateTodo }

})