<script setup lang="ts">
	import { useTodosStore } from '~/store/todos';
	import type { Todo } from '~/types/todo';

	const isLoading = ref(false);

	const newTodo = ref<Todo>({
		title: '',
		completed: false
	});

	const { addTodo } = useTodosStore();

	async function submit(todo: Todo) {
		isLoading.value = true;
		try {
			await addTodo(todo);
			newTodo.value.title = '';
		} catch (error) {
			// Handle error if needed
		} finally {
			isLoading.value = false;
		}
	}
</script>

<style></style>

<template>
	<form
		@keydown.enter.prevent="submit(newTodo)"
		class="mb-6">
		<input
			class="font-farro border border-gray-300 rounded-md pt-2 pb-1 pl-3 text-xl my-1 w-full"
			v-model="newTodo.title"
			type="text"
			placeholder="Type something here" />
		<TheLoadingSpinner :is-loading="isLoading" />
	</form>
</template>
