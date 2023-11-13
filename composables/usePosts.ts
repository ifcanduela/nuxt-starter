import { defineStore } from "pinia"

export default defineStore("posts", () => {
	const posts = ref([])
	const loading = ref(true)

	fetch("https://jsonplaceholder.typicode.com/posts")
		.then((res) => res.json())
		.then((data) => {
			posts.value = data
			loading.value = false
		})

	return {
		posts,
		loading,
	}
})
