<script setup lang="ts">
	import { useTodosStore } from '~/store/todos';
	import type { Todo } from '~/types/todo';
	import { storeToRefs } from 'pinia';
	const todoStore = useTodosStore();
	const { isLoading } = storeToRefs(todoStore);

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
	<form
		@keydown.enter.prevent="addTodoInStore(NewTodo)"
		class="flex flex-row">
		<input
			v-model="NewTodo.title"
			type="text"
			placeholder="Type something here" />
		<span v-if="isLoading"> <TheLoadingSpinner /> </span>
	</form>
</template>
