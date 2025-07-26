<template>
	<div class="layout min-h-screen">
		<NuxtLoadingIndicator />

		<slot></slot>
	</div>
</template>

<script setup lang="ts">
	useHead({
		titleTemplate: (title?: string) =>
			title && title.length ? `${title} - My Shop` : "My Shop",
	})
</script>
