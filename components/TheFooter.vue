<script setup>
	import { useTodosStore } from '~/store/todos';
	import { storeToRefs } from 'pinia';
	const todoStore = useTodosStore();
	const { todos, itemCount } = storeToRefs(todoStore);

	const pluralLabel = computed(() => {
		if (todos.value.length === 1) {
			return 'item';
		}
		return 'items';
	});

	const itemsLeft = computed(() => {
		return todos.value.filter((todo) => !todo.completed).length;
	});
</script>

<style></style>

<template>
	<div>
		<span>{{ itemsLeft }} {{ pluralLabel }} left</span>
		<ul>
			<li><RouterLink to="/">All</RouterLink></li>
			<li><RouterLink to="/active">Active</RouterLink></li>
			<li><RouterLink to="/completed">Completed</RouterLink></li>
		</ul>
	</div>
</template>
