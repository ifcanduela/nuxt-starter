import { defineStore } from "pinia"
import type { Product } from "~/utils/types"

export const useTestStore = defineStore("test", () => {
	const items = ref<Product[]>([])

	$fetch("/api/products").then((data) => {
		items.value = data
		console.log(data)
	})

	return {
		items,
	}
})
