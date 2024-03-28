<script lang="ts">
	import { ListBox, ListBoxItem, ProgressRadial, popup } from '@skeletonlabs/skeleton';
	import type { PopupSettings } from '@skeletonlabs/skeleton';
	let comboboxValue: string;
	const popupFeatured: PopupSettings = {
		// Represents the type of event that opens/closed the popup
		event: 'click',
		// Matches the data-popup value on your popup element
		target: 'popupFeatured',
		// Defines which side of your trigger the popup will appear
		placement: 'bottom'
	};

	const popupCombobox: PopupSettings = {
		event: 'click',
		target: 'popupCombobox',
		placement: 'bottom',
		closeQuery: '.listbox-item'
	};
	let value = 55;
	let description = [
		{
			title: 'Rust',
			value: 65,
			link: 'https://roadmap.sh/rust'
		},
		{
			title: 'C',
			value: 55,
			link: 'https://www.w3schools.com/c/index.php'
		},
		{
			title: 'HTML',
			value: 70,
			link: 'https://www.w3schools.com/html/'
		},
		{
			title: 'CSS',
			value: 67,
			link: 'https://www.w3schools.com/css/default.asp'
		},
		{
			title: 'JS & TS',
			value: 45
		},
		{
			title: 'SQL',
			value: 70,
			link: 'https://roadmap.sh/sql'
		}
	];
	function redirectToTypeScript() {
		window.open('https://roadmap.sh/Typescript', '_blank');
	}
	function redirectToJavaScript() {
		window.open('https://roadmap.sh/javascript', '_blank');
	}
</script>

<section class="bg-secondary-300">
	<div class="container mx-auto max-w-screen-lg mt-4">
		<h2 class="h2 font-bold gradient-heading" id="Language">Language I Know</h2>
		<div class="flex flex-wrap">
			{#each description as item}
				{#if item.title === 'JS & TS'}
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
						<div class=" ml-10">
							<button class="btn variant-outline-primary" use:popup={popupFeatured}
								>{item.title}</button
							>

							<div class="card p-4 w-72 shadow-xl z-50" data-popup="popupFeatured">
								<div>
									<h3 class="h3 m-1">JavaScript & TypeScript</h3>
									<button class="btn m-1 variant-outline-primary" on:click={redirectToTypeScript}>
										Raod Map TypeScript
									</button> <br />
									<button class="btn m-1 variant-outline-primary" on:click={redirectToJavaScript}>
										Raod Map JavaScript
									</button>
									<div class="arrow bg-surface-100-800-token" />
								</div>
							</div>
						</div>
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
						<div class=" ml-10">
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

<style>
	.text {
		white-space: pre; /* Preserves whitespace as typed, including spaces */
	}
</style>
