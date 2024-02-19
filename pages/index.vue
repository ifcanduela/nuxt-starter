<template>
	<PageWrapper>
		<PageTitle>Products</PageTitle>

		<div v-for="product in testStore.items" class="mb-4">
			<main>{{ product.title }} (€{{ product.price }})</main>
		</div>
	</PageWrapper>
</template>

<script setup lang="ts">
	import { useTestStore } from "~/composables/useTestStore"

	const testStore = useTestStore()
</script>
