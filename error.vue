<script setup>
	const props = defineProps({
		error: Object
	});
	const handleError = () => {
		error.value = null;
	};
</script>
<template>
	<NuxtLayout>
		<div>
			<div>
				<h1>Dang</h1>
				<p>{{ error.statusCode }} {{ error.message }}</p>
				<p>it looks like something went wrong</p>
				<p>Sorry about that</p>
			</div>
			<p
				>go back to the
				<NuxtLink
					@click="handleError"
					to="/"
					>home page</NuxtLink
				></p
			>
		</div>
	</NuxtLayout>
</template>
