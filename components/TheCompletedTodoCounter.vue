<script setup>
	import { useTodosStore } from '~/store/todos';
	import { storeToRefs } from 'pinia';
	const todoStore = useTodosStore();
	const { todos } = storeToRefs(todoStore);

	const pluralLabel = computed(() => {
		if (todos.value.length === 1) {
			return 'Todo';
		}
		return 'Todos';
	});

	const itemsLeft = computed(() => {
		return todos.value.filter((todo) => !todo.completed).length;
	});
</script>

<style></style>

<template>
	<div>
		<p class="font-farro text-sm"
			><span class="mr-2 text-green-600 text-xl">{{ itemsLeft }} </span
			>{{ pluralLabel }} left</p
		>
	</div>
</template>
