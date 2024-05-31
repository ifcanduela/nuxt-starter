// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: false },
	modules: [
		"@nuxt/image",
		"@nuxtjs/color-mode",
		"@nuxtjs/google-fonts",
		"@nuxtjs/tailwindcss",
		"@pinia/nuxt",
		"@vueuse/nuxt",
		"nuxt-icon",
	],
	colorMode: {
		classSuffix: "",
	},
	googleFonts: {
		display: "swap",
		download: true,
		families: {
			Inter: [400, 700],
		},
	},
	image: {
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
					width: 75,
					height: 75,
				},
			},
		},
	},
})
