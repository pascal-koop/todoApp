<script setup>
	import { useTodosStore } from '~/store/todos';
	import { storeToRefs } from 'pinia';
	import SvgIcon from '@jamescoyle/vue-icon';
	import { mdiClose } from '@mdi/js';

	const todoStore = useTodosStore();
	const { todos } = storeToRefs(todoStore);
	const { deleteTodoItem, markTodoAsCompleted, markTodoAsUndone } = todoStore;

	const isEditing = ref(false);
	let editingTodoId = ref(null);

	const editTodo = (id) => {
		isEditing.value = true;
		editingTodoId.value = id;
	};

	const updateTodo = (id, title) => {
		todoStore.updateTodo(id, title);
		isEditing.value = false;
	};
	const path = mdiClose;
</script>

<style></style>

<template>
	<div>
		<!-- all -->
		<ul class="flex flex-col">
			<li
				@dblclick="editTodo(todo.id)"
				v-for="todo in todos"
				:class="{ 'line-through': todo.completed }"
				:key="todo.id"
				class="flex">
				<input
					v-if="isEditing && todo.id === editingTodoId"
					type="text"
					v-model="todo.title"
					@keyup.enter="updateTodo(todo.id, todo.title)" />
				<button
					v-if="!todo.completed"
					@click="markTodoAsCompleted(todo.id)"
					><input
						type="checkbox"
						id="check-round01"
						v-model="todo.completed"
				/></button>
				<button
					v-else
					@click="markTodoAsUndone(todo.id)">
					<input
						type="checkbox"
						id="check-round01"
						v-model="todo.completed" />
				</button>
				<span v-if="!isEditing || todo.id !== editingTodoId">{{
					todo.title
				}}</span>
				<button
					class="h-1"
					@click="deleteTodoItem(todo.id)"
					><svg-icon
						height="20"
						width="20"
						type="mdi"
						:path="path"></svg-icon
				></button>
			</li>
		</ul>
	</div>
</template>
