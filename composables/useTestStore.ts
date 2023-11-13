import { defineStore } from "pinia"

type Item = {
	name: string
	value: number
}

export const useTestStore = defineStore("test", () => {
	const items = ref<Item[]>([])

	fetch("/api/items")
		.then((res) => res.json())
		.then((data) => (items.value = data.items))

	function add(name: string, value: number) {
		items.value.push({ name, value })
	}

	return {
		items,
		add,
	}
})
