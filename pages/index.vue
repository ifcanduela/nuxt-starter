<template>
	<PageWrapper>
		<PageTitle>Products</PageTitle>

		<article v-for="product in testStore.items" class="mb-4">
			<header>
				<NuxtImg
					preset="thumbnail"
					densities="1x 2x"
					:src="product.image"
				/>
			</header>

			<main>{{ product.title }} (€{{ product.price }})</main>
		</article>
	</PageWrapper>
</template>

<script setup lang="ts">
	const testStore = useTestStore()
</script>
