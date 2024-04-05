<script lang="ts">
	import AnimatedElement from './../lib/AnimatedElement.svelte';
	import Hero from '$lib/Headercomp/hero.svelte';
	import Srvevce from '$lib/srvevce.svelte';
	import Holder from '$lib/projecte/Holder.svelte';
	import Contactme from '$lib/contactme.svelte';
	import HolderTfl from '$lib/TFL/HolderTFL.svelte';
	import HolderFram from '$lib/TFL/HolderFRAM.svelte';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	let mounted = false;

	onMount(() => {
		mounted = true;
	});
</script>

<section class=" container1" >
	<div transition:fade={{ duration: 400 }}>
		<Hero />
	</div>
	
</section>
<section class="bg-secondary-300">
	<HolderTfl />
	<hr class=" w-64 h-1 mx-auto my-4 bg-primary-400 border-0 rounded md:my-10" />

	<HolderFram />
</section>
<section>
	<Srvevce />
</section>
<section><Holder /></section>
<section><Contactme /></section>

<style>
	.container1 {
		background-image: url('$lib/images/bg3.svg');
		background-size: cover;

		background-position: center;
	}
	.fade-in {
		opacity: 0;
		transition: opacity 0.5s ease-in-out;
	}

	.fade-in.mounted {
		opacity: 1;
	}
</style>
