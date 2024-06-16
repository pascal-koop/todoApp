export default defineEventHandler(async (event)=> {
  const url: string = 'https://jsonplaceholder.typicode.com/todos'

  try {
    const response: ResponseType = await $fetch(url)
    let todos = response

    if (response.length === 0) {
      return sendNoContent(event, 404);
    }
    console.log(todos)
  } catch (error) {
    console.log(error)
  }

})