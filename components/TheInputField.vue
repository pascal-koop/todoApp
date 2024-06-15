<script setup lang="ts">
	import { useTodosStore } from '~/store/todos';
	const todoStore = useTodosStore();
	const toDoInput = ref<string>('');
</script>

<style></style>

<template>
	<input
		@keydown.enter="todoStore.addTodo(toDoInput)"
		v-model="toDoInput"
		type="text"
		placeholder="Type something here" />
</template>
