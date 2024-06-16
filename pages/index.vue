<script setup>
	import { useTodosStore } from '~/store/todos';
	const todoStore = useTodosStore();
	const { fetchTodosFromMockAPI } = todoStore;
	onMounted(() => fetchTodosFromMockAPI());
</script>

<style></style>

<template>
	<main>
		<TheInputField />
		<TheTodoList />
	</main>
</template>
