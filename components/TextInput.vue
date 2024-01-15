<template>
	<div class="flex">
		<input
			class="border rounded-sm grow px-2 py-3"
			type="text"
			v-model="model"
			v-bind="$attrs"
		/>
	</div>
</template>

<script setup>
	defineOptions({
		inheritAttrs: false,
	})

	const model = defineModel()
</script>
