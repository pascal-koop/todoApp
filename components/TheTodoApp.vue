<script setup lang="ts">
	const selectedView = ref('all');
</script>

<template>
	<div class="flex justify-end">
		<select
			class="font-farro border border-gray-300 rounded-md pt-2 pb-1 pl-1 text-sm my-1"
			v-model="selectedView">
			<option value="all">All</option>
			<option value="active">Active</option>
			<option value="completed">Completed</option>
		</select>
	</div>
	<TheAddNewTodos />
	<TheTodoList :filter-items-by="selectedView" />
	<TheCompletedTodoCounter />
</template>

<style scoped></style>
