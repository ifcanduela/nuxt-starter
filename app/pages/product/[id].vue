<template>
	<PageWrapper>
		<PageTitle>{{ product?.title }}</PageTitle>

		<main>
			<menu class="mb-8">
				<PrimaryButton to="/" icon="ph:house-fill">Home</PrimaryButton>
			</menu>

			<article>
				<pre
					class="bg-neutral-50 rounded p-4 whitespace-pre-wrap"
				><code>{{ product }}</code>
				</pre>
			</article>
		</main>
	</PageWrapper>
</template>

<script setup lang="ts">
	const { id } = useRoute().params

	const { data: product } = useLazyFetch(`/api/products/${id}`)

	useSeoMeta({
		title: product.value?.title,
		description: product.value?.description,
	})
</script>
