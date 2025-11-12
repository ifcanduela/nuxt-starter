import tailwindcss from "@tailwindcss/vite"

export default defineNuxtConfig({
	compatibilityDate: "2024-07-08",

	devtools: { enabled: false },

	vite: {
		plugins: [tailwindcss()],
	},

	modules: [
		"@nuxt/image",
		"@nuxt/fonts",
		"@nuxt/icon",
		"@nuxt/eslint",
		"@nuxtjs/color-mode",
		"@vueuse/nuxt",
	],

	css: ["./app/assets/css/global.css"],

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
