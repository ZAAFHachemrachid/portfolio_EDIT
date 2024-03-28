<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';

	import type { AfterNavigate } from '@sveltejs/kit';
	import { afterNavigate } from '$app/navigation';
	import { initializeStores } from '@skeletonlabs/skeleton';
	import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';

	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });
	import { popup } from '@skeletonlabs/skeleton';

	afterNavigate((params: AfterNavigate) => {
		const isNewPage = params.from?.url.pathname !== params.to?.url.pathname;
		const elemPage = document.querySelector('#page');
		if (isNewPage && elemPage !== null) {
			elemPage.scrollTop = 0;
		}
	});
</script>

<!-- <AppShell>...</AppShell> -->
<!-- App Shell -->
<AppShell scrollbarGutter="auto" regionPage="scroll-smooth">
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<strong class="text-xl uppercase">Rachid</strong>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<a class="btn btn-sm variant-ghost-surface" href="#Language"> Lang & Tool </a>
				<a class="btn btn-sm variant-ghost-surface" href="#Services"> Services </a>
				<a class="btn btn-sm variant-ghost-surface" href="#Projects"> Projects </a>
				<a class="btn btn-sm variant-ghost-surface" href="#contact"> Contact </a>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>

	<!-- Page Route Content -->
	<slot />
	<svelte:fragment slot="pageFooter">
		<footer class="bg-surface-300-600-token p-4">
			<div class="container mx-auto">
				<div class="flex items-center justify-between">
					<div>
						<p class="text-sm text-surface-300-900-token">© 2021 Rachid</p>
					</div>
					<div>
						<a href="#hello" class="text-sm text-surface-300-900-token">Privacy Policy</a>
						<a href="#hello" class="text-sm text-surface-300-900-token">Terms of Service</a>
					</div>
				</div>
			</div>
		</footer>
	</svelte:fragment>
</AppShell>
