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
</script>

<style></style>

<template>
	<input
		@keydown.enter="addTodo(NewTodo)"
		v-model="NewTodo.title"
		type="text"
		placeholder="Type something here" />
</template>
