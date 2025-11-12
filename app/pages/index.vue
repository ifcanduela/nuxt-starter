<template>
	<PageWrapper>
		<PageTitle>Products</PageTitle>

		<div class="container mx-auto flexible-grid gap-8 w-full">
			<NuxtLink
				v-for="product in products"
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
	</PageWrapper>
</template>

<script setup lang="ts">
	const { data: products } = useFetch("/api/products")

	useSeoMeta({
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
