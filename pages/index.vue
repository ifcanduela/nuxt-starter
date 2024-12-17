<template>
	<PageWrapper>
		<PageTitle>Products</PageTitle>

		<div class="grid grid-cols-4 gap-8">
			<article
				v-for="product in items"
				class="flex flex-col gap-4 items-center justify-start"
			>
				<header>
					<NuxtImg
						preset="thumbnail"
						densities="1x 2x"
						class="w-40 h-40 object-cover"
						:src="product.image"
					/>
				</header>

				<main>
					<NuxtLink :to="`/product/${product.id}`">
						{{ product.title }} (€{{ product.price }})
					</NuxtLink>
				</main>
			</article>
		</div>
	</PageWrapper>
</template>

<script setup lang="ts">
	const { data: items, status } = useLazyFetch("/api/products")
</script>
