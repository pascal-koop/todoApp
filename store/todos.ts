import { defineStore } from 'pinia'
import type { Todo } from '~/types/todo'
import axios from 'axios'
export const useTodosStore = defineStore('todos', ()=> {
  const todos = ref<Todo[]>([])
  const isLoading = ref<boolean>(false)

  const addTodo = async(Newtodo: Todo) => {
    Newtodo.id = Math.floor(Math.random() * 10000)
    todos.value.push({ ...Newtodo })
    isLoading.value = true
    sendItemToAPI(Newtodo)
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
  const fetchTodosFromMockAPI = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
      todos.value = response.data.slice(0, 5)
    } catch (error) {
      console.error(error)
    }
  }
  const sendItemToAPI =  (item: Todo) => {
    axios.post('https://jsonplaceholder.typicode.com/todos')
    .then((response) => {
      if (response.status === 201) {
        isLoading.value = false
      }
    }).catch((error) => {

      isLoading.value = false
      if(error.response.status === 500){
        throw createError({
          statusCode: 500,
          statusMessage: 'Failed to add todo item'
          })
      }

      if(error.response.status === 404){
        throw createError({
          statusCode: 404,
          statusMessage: 'Failed to add todo item'
      })}
      })

  }

  return {
    todos,
    isLoading,
    addTodo,
    deleteTodoItem,
    markTodoAsCompleted,
    markTodoAsUndone,
    updateTodo,
    fetchTodosFromMockAPI
  }
});
