// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: false },
	devServer: {
		port: 3000,
	},
	modules: [
		"@nuxt/image",
		"@nuxtjs/tailwindcss",
		"@nuxtjs/google-fonts",
		"@vueuse/nuxt",
		"@pinia/nuxt",
	],
	image: {},
	googleFonts: {
		display: "swap",
		download: true,
		families: {
			Inter: true,
		},
	},
})
