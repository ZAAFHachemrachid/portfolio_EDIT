<script lang="ts">
	import { ProgressRadial, popup } from '@skeletonlabs/skeleton';
	import type { PopupSettings } from '@skeletonlabs/skeleton';
	const popupFeaturedGUI: PopupSettings = {
		// Represents the type of event that opens/closed the popup
		event: 'click',
		// Matches the data-popup value on your popup element
		target: 'popupFeaturedGUI',
		// Defines which side of your trigger the popup will appear
		placement: 'bottom'
	};
	const popupFeaturedAxum: PopupSettings = {
		// Represents the type of event that opens/closed the popup
		event: 'click',
		// Matches the data-popup value on your popup element
		target: 'popupFeaturedAxum',
		// Defines which side of your trigger the popup will appear
		placement: 'bottom'
	};
	let value = 55;
	let description = [
		{
			title: 'Tauri',
			value: 65,
			link: 'https://docs.rs/tauri/1.6.1/tauri/'
		},
		{
			title: 'Svelte',
			value: 37,
			link: 'https://learn.svelte.dev/tutorial/welcome-to-svelte'
		},
		{
			title: 'Iced & EGUI',
			value: 70
		},
		{
			title: 'JavaFX',
			value: 60,
			link: 'https://www.youtube.com/watch?v=_7OM-cMYWbQ&list=PLZPZq0r_RZOM-8vJA3NQFZB7JroDcMwev'
		},
		{
			title: 'Leptos',
			value: 45,
			link: 'https://book.leptos.dev/'
		},
		{
			title: 'Axum',
			value: 80
		}
	];
	function redirectToIced() {
		window.open('https://github.com/iced-rs/iced', '_blank');
	}
	function redirectToEgui() {
		window.open('https://github.com/emilk/egui', '_blank');
	}
	function redirectToYou() {
		window.open(
			'https://www.youtube.com/watch?v=Gc5Nj5LJe1U&list=PL7r-PXl6ZPcCTTxjmsb9bFZB9i01fAtI7',
			'_blank'
		);
	}
	function redirectToDoc() {
		window.open('https://github.com/tokio-rs/axum', '_blank');
	}
</script>

<section class="bg-secondary-300">
	<div class="container mx-auto max-w-screen-lg mb-4">
		<div class="flex flex-wrap">
			{#each description as item}
				{#if item.title === 'Iced & EGUI' || item.title === 'Axum'}
					<div class="w-[100px] flex-auto m-4 text">
						<ProgressRadial
							value={item.value}
							class="place-items-center  "
							labelledby={item.title}
							track=" stroke-secondary-400"
							strokeLinecap="round"
							meter=" stroke-primary-500"
						>
							{item.value}
						</ProgressRadial>
						{#if item.title === 'Iced & EGUI'}
							<div class=" ml-3 mt-5">
								<button class="btn variant-outline-primary" use:popup={popupFeaturedGUI}
									>{item.title}</button
								>

								<div class="card p-4 w-72 shadow-xl z-50" data-popup="popupFeaturedGUI">
									<div>
										<h3 class="h3 m-1">Iced & Egui</h3>
										<button class="btn m-1 variant-outline-primary" on:click={redirectToIced}>
											Raod Map Iced
										</button> <br />
										<button class="btn m-1 variant-outline-primary" on:click={redirectToEgui}>
											Raod Map Egui
										</button>
										<div class="arrow bg-surface-100-800-token" />
									</div>
								</div>
							</div>
						{:else}
							<div class=" ml-9 mt-5">
								<button class="btn variant-outline-primary" use:popup={popupFeaturedAxum}
									>{item.title}</button
								>

								<div class="card p-4 w-72 shadow-xl z-50" data-popup="popupFeaturedAxum">
									<div>
										<h3 class="h3 m-1">Axum</h3>
										<button class="btn m-1 variant-outline-primary" on:click={redirectToYou}>
											Youtube vids
										</button> <br />
										<button class="btn m-1 variant-outline-primary" on:click={redirectToDoc}>
											Doc's
										</button>
										<div class="arrow bg-surface-100-800-token" />
									</div>
								</div>
							</div>
						{/if}
					</div>
				{:else}
					<div class="w-[100px] flex-auto m-4 text">
						<ProgressRadial
							value={item.value}
							class="place-items-center  "
							labelledby={item.title}
							track=" stroke-secondary-400"
							strokeLinecap="round"
							meter=" stroke-primary-500"
						>
							{item.value}
						</ProgressRadial>
						<div class=" ml-9 mt-4">
							<a href={item.link} target="_blank" class="btn variant-outline-primary">
								{item.title}
							</a>
						</div>
					</div>
				{/if}
			{/each}
		</div>
	</div>
</section>
