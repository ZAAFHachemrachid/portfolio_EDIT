<script lang="ts">
	import Hero from '$lib/Headercomp/hero.svelte';
	import Srvevce from '$lib/srvevce.svelte';
	import Holder from '$lib/projecte/Holder.svelte';
	import Contactme from '$lib/contactme.svelte';
	import HolderTfl from '$lib/TFL/HolderTFL.svelte';
	import HolderFram from '$lib/TFL/HolderFRAM.svelte';
	import Headeing from '$lib/Headercomp/headeing.svelte';
	import { fade } from 'svelte/transition';
	import Sava from '$lib/sava.svelte';

	const theme = {
		mode: 'light'
		// Add other theme properties here
	};
</script>

<section class=" container1">
	<Hero />
</section>
<section class="bg-secondary-300">
	<HolderTfl />
	<hr class=" w-64 h-1 mx-auto my-4 bg-primary-400 border-0 rounded md:my-10" />

	<HolderFram />
</section>
<section class=" container2">
	<Srvevce />
</section>
<Holder />
<Contactme />
<Sava />

<style>
	.container1 {
		background-image: url('$lib/images/bg3.svg');
		background-size: cover;

		background-position: center;
	}
	.container2 {
		background-image: url('$lib/images/bg2.svg');
		background-size: cover;

		background-position: center;
	}
</style>
