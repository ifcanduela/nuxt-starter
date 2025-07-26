<template>
	<Component
		:is="tag"
		:to
		:href
		class="bg-black text-yellow-200 py-2 px-4 rounded-sm inline-flex items-center gap-2"
	>
		<Icon v-if="icon" :name="icon" />
		<slot></slot>
	</Component>
</template>

<script setup lang="ts">
	const props = defineProps<{
		icon?: string
		to?: string
		href?: string
	}>()

	const NuxtLink = resolveComponent("NuxtLink")

	const tag = computed(() => {
		if (props.to) {
			return NuxtLink
		}

		if (props.href) {
			return "a"
		}

		return "button"
	})
</script>
