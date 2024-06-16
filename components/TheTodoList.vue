<script setup>
	import { useTodosStore } from '~/store/todos';
	import { storeToRefs } from 'pinia';
	const todoStore = useTodosStore();
	const { todos } = storeToRefs(todoStore);
	const { deleteTodoItem, markTodoAsCompleted, markTodoAsUndone } = todoStore;
</script>

<style></style>

<template>
	<div>
		<!-- all -->
		<ul class="">
			<li
				v-for="todo in todos"
				:class="{ 'line-through': todo.completed }"
				:key="todo.id">
				{{ todo.title
				}}<button @click="deleteTodoItem(todo.id)"> delete</button>
				<button
					v-if="!todo.completed"
					@click="markTodoAsCompleted(todo.id)"
					>Done</button
				>
				<button
					v-else
					@click="markTodoAsUndone(todo.id)"
					>undone</button
				>
			</li>
		</ul>
	</div>
</template>
