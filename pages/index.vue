<template>
	<PageTitle>Products</PageTitle>

	<menu class="mb-4">
		<TextInput v-model="productFilter" />
	</menu>

	<div
		v-if="!pending"
		class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12"
	>
		<div
			v-for="product in products"
			class="flex flex-col justify-between gap-2 rounded overflow-hidden shadow-lg bg-white"
		>
			<main>
				<div class="p-4 relative">
					<img
						class="w-full h-[240px] object-contain"
						:src="product.image"
						alt=""
					/>
					<div
						class="absolute px-2 py-1 text-xs bg-orange-500 text-white top-0 left-0 rounded-br"
					>
						{{ product.category }}
					</div>
				</div>

				<NuxtLink :to="`/products/${product.id}`" class="block px-2">
					{{ product.title }}
				</NuxtLink>
			</main>

			<div class="mx-2 h-[1px] bg-slate-200"></div>

			<footer class="flex px-2 pb-2 justify-between text-sm">
				<div class="font-bold">
					{{ product.price }}
				</div>

				<div>
					<StarRating
						:rating="product.rating.rate"
						:count="product.rating.count"
					/>
				</div>
			</footer>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { useStorage } from "@vueuse/core"

	const { data, pending } = await useFetch("/api/products")

	const productFilter = useStorage<string>("products.filter", "")

	const products = computed(() => {
		if (!data.value) return []

		if (!productFilter.value) {
			return data.value
		}

		const rx = new RegExp(productFilter.value, "i")

		return data.value.filter((product: any) => rx.test(product.title))
	})
</script>
