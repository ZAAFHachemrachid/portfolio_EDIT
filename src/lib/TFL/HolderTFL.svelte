<script lang="ts">
	import { ProgressRadial } from '@skeletonlabs/skeleton';
	let value = 55;
	let description = [
		{
			title: 'Rust',
			value: 65
		},
		{
			title: 'C',
			value: 55
		},
		{
			title: 'HTML',
			value: 70
		},
		{
			title: 'CSS',
			value: 67
		},
		{
			title: '   JS $ TS',
			value: 45
		},
		{
			title: 'SQL',
			value: 70
		}
	];
</script>

<section class="bg-secondary-300">
	<div class="container mx-auto max-w-screen-lg mt-4 mb-4">
		<h2 class="h2 font-bold">Language I Know</h2>
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
