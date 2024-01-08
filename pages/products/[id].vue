<template>
	<article v-if="!pending">
		<PageTitle>{{ product.title }}</PageTitle>

		<menu>
			<NuxtLink to="/">Home</NuxtLink>
		</menu>

		<div class="grid grid-cols-2 gap-4">
			<div>
				<img :src="product.image" />
			</div>

			<div>
				<div class="mb-8 flex gap-4">
					<span class="text-4xl font-bold">
						&euro;{{ product.price }}
					</span>

					<Btn @click="addToCart">
						<Icon name="ph:shopping-cart-simple" />
						Add to cart
					</Btn>
				</div>

				<div>
					{{ product.description }}
				</div>
			</div>
		</div>
	</article>
</template>

<script setup lang="ts">
	const { id } = useRoute().params

	const { data: product, pending } = useFetch(`/api/products/${id}`)

	function addToCart() {
		alert("Add to cart...")
	}
</script>
