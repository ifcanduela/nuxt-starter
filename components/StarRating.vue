<template>
	<div class="flex" :title="`${rating}/5 in ${count} ratings`">
		<Icon
			name="ph:star"
			v-for="s in fullStars"
			weight="fill"
			color="gold"
		/>
		<Icon name="ph:star-half" v-if="halfStar" color="gold" />
		<Icon name="ph:star" v-for="s in emptyStars" color="gold" />
	</div>
</template>

<script setup lang="ts">
	const props = defineProps({
		rating: Number,
		count: Number,
	})

	const fullStars = computed(() => Math.floor(props.rating))

	const halfStar = computed(() => {
		const remainder = 5 - fullStars.value

		return remainder >= 0.35 && remainder < 0.65
	})

	const emptyStars = computed(() => {
		const stars = fullStars.value - (halfStar.value ? 1 : 0)
		return 5 - stars
	})
</script>
