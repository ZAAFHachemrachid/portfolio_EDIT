<script lang="ts">
	import { fade } from 'svelte/transition';
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails } from 'svelte-inview';

	let isInView: boolean;

	const handleInViewChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		isInView = detail.inView;
	};
</script>

<div
	use:inview={{ unobserveOnEnter: true, rootMargin: '-20%' }}
	on:inview_change={handleInViewChange}
>
	{#if isInView}
		<div in:fade class="box">
			<slot />
		</div>
	{/if}
</div>

<style>
	.wrapper {
		margin-top: 30px;
	}

	.box {
		width: 300px;
		border: 1px solid rgb(221, 221, 221);
		padding: 25px;
		border-radius: 10px;
	}
</style>
