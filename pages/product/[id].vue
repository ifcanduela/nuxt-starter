<template>
	<pre><code>{{ product }}</code></pre>
</template>

<script setup lang="ts">
	const { id } = useRoute().params

	const { data: product } = useLazyFetch(`/api/products/${id}`)
</script>
