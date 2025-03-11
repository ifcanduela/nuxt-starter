<template>
	<PageWrapper>
		<PageTitle>Products</PageTitle>

		<div class="flexible-grid gap-8 w-full">
			<NuxtLink
				v-for="product in items"
				:key="product.id"
				:to="`/product/${product.id}`"
				class="flex flex-col gap-4 items-center justify-start hover:bg-yellow-100"
			>
				<header>
					<NuxtImg
						preset="thumbnail"
						densities="1x 2x"
						class="w-40 h-40 object-cover"
						:src="product.image"
					/>
				</header>

				<main>{{ product.title }} (€{{ product.price }})</main>
			</NuxtLink>
		</div>

		<div class="fixed p-2 bottom-2 left-2 bg-black text-yellow-200">
			{{ status }}
		</div>
	</PageWrapper>
</template>

<script setup lang="ts">
	const { data: items, status } = useLazyFetch("/api/products")

	useHead({
		title: "Products",
		description: "List of products",
	})
</script>

<style scoped>
	.flexible-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
	}
</style>
