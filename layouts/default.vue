<template>
	<div class="layout bg-slate-100 min-h-screen">
		<NuxtLoadingIndicator />

		<AppNavigation />

		<main>
			<slot></slot>
		</main>
	</div>
</template>
