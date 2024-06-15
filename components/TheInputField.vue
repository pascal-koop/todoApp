<script setup lang="ts">
	const toDoInput = ref<string>('');
</script>

<style></style>

<template>
	<input
		@keydown.enter=""
		v-model="toDoInput"
		type="text"
		placeholder="Type something here" />
</template>
