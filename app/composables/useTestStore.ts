import type { Product } from "@@/shared/types"

const items = ref<Product[]>([])

export const useTestStore = function () {
	onMounted(() => {
		$fetch("/api/products").then((data) => {
			items.value = data
		})
	})

	function getItemById(id: number) {
		return items.value.find((item) => item.id === id)
	}

	return {
		items,
		getItemById,
	}
}
