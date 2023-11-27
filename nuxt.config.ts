// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: [
		"@nuxt/image",
		"@nuxtjs/tailwindcss",
		"@nuxtjs/google-fonts",
		"@vueuse/nuxt",
		"@pinia/nuxt",
		"nuxt-phosphor-icons",
	],
	image: {},
	googleFonts: {
		display: "swap",
		download: true,
		families: {
			Inter: [400, 700],
		},
	},
})
