<script lang="ts">
	import '../app.postcss';
	import {
		AppShell,
		AppBar,
		Drawer,
		popup,
		initializeStores,
		storePopup,
		getDrawerStore
	} from '@skeletonlabs/skeleton';
	import type { DrawerSettings, DrawerStore } from '@skeletonlabs/skeleton';
	import type { AfterNavigate } from '@sveltejs/kit';
	import { afterNavigate } from '$app/navigation';
	import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';

	import Navigation from '$lib/Navigation.svelte';
	initializeStores();
	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });

	afterNavigate((params: AfterNavigate) => {
		const isNewPage = params.from?.url.pathname !== params.to?.url.pathname;
		const elemPage = document.querySelector('#page');
		if (isNewPage && elemPage !== null) {
			elemPage.scrollTop = 0;
		}
	});
	const drawerStore = getDrawerStore();

	function drawerOpen(): void {
		drawerStore.open();
	}
	function trigger(): void {
		const s: DrawerSettings = { position: 'right' };
		drawerStore.open(s);
	}
</script>

<Drawer>
	<Navigation />
</Drawer>
<!-- <AppShell>...</AppShell> -->
<!-- App Shell -->
<AppShell
	scrollbarGutter="auto"
	regionPage="scroll-smooth"
	slotSidebarRight="w-0 md:w-52 bg-surface-500/10 "
>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<strong class="text-xl uppercase">Rachid</strong>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<button
					class=" btn btn-sm mr-4"
					on:click={() => {
						trigger();
					}}
				>
					<span>
						<svg viewBox="0 0 100 80" class="fill-token w-4 h-4">
							<rect width="100" height="20" />
							<rect y="30" width="100" height="20" />
							<rect y="60" width="100" height="20" />
						</svg>
					</span>
				</button>
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
