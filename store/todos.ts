import { defineStore } from 'pinia'
import type { Todo } from '~/types/todo'
import axios from 'axios'/*  eslint regeln rein regeln raus einfach in root eslint rein cura magnolia prettier rein */

export const useTodosStore = defineStore('todos', ()=> {
  const todos = ref<Todo[]>([])
  const itemCount = computed(() => todos.value.length)

  const getCompletedTodos = computed(() => todos.value.filter((todo) => todo.completed === true))
  const getActiveTodos = computed(() => todos.value.filter((todo) => todo.completed === false))

  const addTodo = async(newTodo: Todo) => {
    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/todos', newTodo)
      todos.value.push(response.data)
      return response
    } catch (error) {
      console.error(error)
      return error
    }
  }

  const deleteTodoItem = async (todoId: Todo['id']) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
      const index = todos.value.findIndex((todo) => todo.id === todoId)
      if (index !== -1) {
        todos.value.splice(index, 1)
      }
    } catch (error) {
      console.error(error)
    }
  }

  const toggleTodoCompleted = (id: number) => {
    // TODO: WIP API Toggle
    const index = todos.value.findIndex((todo) => todo.id === id)
    if (index !== -1) {
      todos.value[index].completed = !todos.value[index].completed
    }
  }

  const updateTodo = async (todoItem: Todo) => {
    try {
      await axios.patch(`https://jsonplaceholder.typicode.com/todos/${todoItem.id}`, todoItem)
      const index = todos.value.findIndex((todo) => todo.id === todoItem.id)
    if (index !== -1) {
      todos.value[index].title = todoItem.title
    }
    } catch (error) {
      console.error(error)
    }
  }

  const fetchTodosFromMockAPI = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
      todos.value = response.data.slice(0, 5)
    } catch (error) {
      console.error(error)
    }
  }

  return {
    todos,
    itemCount,
    addTodo,
    deleteTodoItem,
    toggleTodoCompleted,
    updateTodo,
    getCompletedTodos,
    getActiveTodos,
    fetchTodosFromMockAPI
  }
});
