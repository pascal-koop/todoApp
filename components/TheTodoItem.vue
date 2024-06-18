<template>
	<li class="mb-4 flex items-center">
		<input
			v-if="isEditing"
			type="text"
			v-model="todoTitle"
			@keyup.enter="
				updateTodo({
					id: todo.id as number,
					title: todoTitle,
					completed: todo.completed
				});
				isEditing = false;
			"
			class="font-farro border border-gray-300 rounded-md pt-2 pb-1 pl-1 text-sm my-1 w-96" />
		<input
			v-else
			type="checkbox"
			id="check-round01"
			v-model="todo.completed"
			class="accent-emerald-500/25" />
		<span
			v-if="!isEditing"
			@dblclick="isEditing = true"
			class="ml-3 font-farro text-md">
			{{ todo.title }}
		</span>
		<button
			class="ml-3"
			@click="deleteTodoItem(todo.id as number)">
			<svg-icon
				height="25"
				width="25"
				type="mdi"
				:path="path">
			</svg-icon>
		</button>
	</li>
</template>

<script setup lang="ts">
	import type { Todo } from '~/types/todo';
	import { useTodosStore } from '~/store/todos';
	import SvgIcon from '@jamescoyle/vue-icon';
	import { mdiClose } from '@mdi/js';
	const path = mdiClose;
	const props = defineProps<{
		todo: Todo;
	}>();

	const { deleteTodoItem, updateTodo } = useTodosStore();

	const isEditing = ref(false);
	const todoTitle = ref(props.todo.title);
</script>

<style scoped></style>
