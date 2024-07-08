<template>
	<pre><code>{{ product }}</code></pre>
</template>

<script setup lang="ts">
	const testStore = useTestStore()
	const productId = Number(useRoute().params.id)

	const product = testStore.getItemById(productId)
</script>
