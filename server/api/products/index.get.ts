import type { Product } from "@/shared/types"

export default defineEventHandler(async (event) => {
	const query = getQuery(event)
	const page = query.page || 1

	const response: Product[] = await $fetch(
		`https://fakestoreapi.com/products?page=${page}`,
	)

	return response
})
