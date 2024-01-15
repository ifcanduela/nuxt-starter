<template>
	<div class="flex" :title="`${rating}/5 in ${count} ratings`">
		<Icon
			v-for="s in stars"
			:name="s.icon"
			color="gold"
			class="hover:text-blue-500 cursor-pointer"
			@click="handleStarClick(s.value)"
		/>
	</div>
</template>

<script setup lang="ts">
	const emit = defineEmits(["change"])

	const props = defineProps<{
		rating: number
		count: number
	}>()

	const stars = computed(() => {
		const stars = [
			{ value: 1, icon: "ph:star" },
			{ value: 2, icon: "ph:star" },
			{ value: 3, icon: "ph:star" },
			{ value: 4, icon: "ph:star" },
			{ value: 5, icon: "ph:star" },
		]

		for (let i = 0; i < 5; i++) {
			if (stars[i].value < props.rating) {
				stars[i].icon = "ph:star-fill"
			} else {
				const remainder = props.rating - (stars[i].value - 1)

				if (remainder > 0.8) {
					stars[i].icon = "ph:star-fill"
				} else if (remainder > 0.2) {
					stars[i].icon = "ph:star-half-fill"
				} else {
					stars[i].icon = "ph:star"
				}
				break
			}
		}

		return stars
	})

	function handleStarClick(stars: number) {
		emit("change", stars)
	}
</script>
