<script setup lang="ts">
	import { useTodosStore } from '~/store/todos';
	import type { Todo } from '~/types/todo';
	const todoStore = useTodosStore();
	const { addTodo } = todoStore;

	const NewTodo = ref<Todo>({
		id: 0,
		title: '',
		completed: false
	});
	const addTodoInStore = (todo: Todo) => {
		if (todo.title === '') return;
		todo.title = todo.title.trim();
		todoStore.addTodo(todo);
		NewTodo.value = {
			id: 0,
			title: '',
			completed: false
		};
	};
</script>

<style></style>

<template>
	<form @keydown.enter.prevent="addTodoInStore(NewTodo)">
		<input
			v-model="NewTodo.title"
			type="text"
			placeholder="Type something here" />
	</form>
</template>
