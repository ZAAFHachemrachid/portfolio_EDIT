<script lang="ts">
	import { ProgressRadial } from '@skeletonlabs/skeleton';
	let value = 55;
	let description = [
		{
			title: 'Tauri',
			value: 65
		},
		{
			title: 'Svelte',
			value: 37
		},
		{
			title: 'Iced',
			value: 70
		},
		{
			title: 'JavaFX',
			value: 60
		},
		{
			title: 'Leptos',
			value: 45
		},
		{
			title: 'Axum',
			value: 80
		}
	];
</script>

<section class="bg-secondary-300">
	<div class="container mx-auto max-w-screen-lg mb-4">
		<h2 class="h2 font-bold gradient-heading">Tools I Use</h2>
		<div class="flex flex-wrap">
			{#each description as item}
				<div class="w-[100px] flex-auto m-4">
					<ProgressRadial value={item.value} class="place-items-center" labelledby={item.title}>
						{item.title}
					</ProgressRadial>
				</div>
			{/each}
		</div>
	</div>
</section>
