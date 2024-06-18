<script setup>
	import { useTodosStore } from '~/store/todos';
	import { storeToRefs } from 'pinia';
	import { defineProps } from 'vue';

	const props = defineProps({
		filterItemsBy: 'all' | 'active' | 'completed'
	});

	const showFilteredTodos = computed(() => {
		if (props.filterItemsBy === 'active') {
			return getActiveTodos.value;
		} else if (props.filterItemsBy === 'completed') {
			return getCompletedTodos.value;
		} else {
			return todos.value;
		}
	});

	const { fetchTodosFromMockAPI } = useTodosStore();

	const { todos, getActiveTodos, getCompletedTodos } = storeToRefs(
		useTodosStore()
	);

	onMounted(() => {
		fetchTodosFromMockAPI();
	});
</script>

<style></style>

<template>
	<div>
		<ul class="flex flex-col">
			<TheTodoItem
				v-for="todo in showFilteredTodos"
				:class="{ 'line-through decoration-2': todo.completed }"
				:key="todo.id"
				:todo="todo">
			</TheTodoItem>
		</ul>
	</div>
</template>
