<script setup>
	import { useTodosStore } from '~/store/todos';
	const todoStore = useTodosStore();
	const { fetchTodosFromMockAPI } = todoStore;
	onMounted(() => fetchTodosFromMockAPI());
</script>

<style></style>

<template>
	<NuxtLayout>
		<TheInputField />
		<TheTodoList />
	</NuxtLayout>
</template>
