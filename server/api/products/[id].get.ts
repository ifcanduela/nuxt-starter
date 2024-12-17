import { type Product } from "~~/utils/types"

export default defineEventHandler(async (event) => {
	const id = getRouterParam(event, "id")

	const response: Product = await $fetch(
		`https://fakestoreapi.com/products/${id}`,
	)

	return response
})
