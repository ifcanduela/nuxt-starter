// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2024-07-08",
	devtools: { enabled: false },
	modules: [
		"@nuxt/image",
		"@nuxt/fonts",
		"@nuxtjs/color-mode",
		"@nuxtjs/tailwindcss",
		"@pinia/nuxt",
		"@vueuse/nuxt",
		"nuxt-icon",
	],
	colorMode: {
		classSuffix: "",
	},
	image: {
		domains: ["fakestoreapi.com"],
		presets: {
			avatar: {
				modifiers: {
					format: "jpg",
					width: 50,
					height: 50,
				},
			},
			thumbnail: {
				modifiers: {
					width: 160,
					height: 160,
				},
			},
		},
	},
})
