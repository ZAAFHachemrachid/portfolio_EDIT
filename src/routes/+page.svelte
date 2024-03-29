<script lang="ts">
	import Hero from '$lib/Headercomp/hero.svelte';
	import Srvevce from '$lib/srvevce.svelte';
	import Holder from '$lib/projecte/Holder.svelte';
	import Contactme from '$lib/contactme.svelte';
	import HolderTfl from '$lib/TFL/HolderTFL.svelte';
	import HolderFram from '$lib/TFL/HolderFRAM.svelte';
	import Headeing from '$lib/Headercomp/headeing.svelte';
	import { fade } from 'svelte/transition';

	const theme = {
		mode: 'light'
		// Add other theme properties here
	};
</script>

<section>
	<Hero />
</section>
<section class="bg-secondary-300">
	<HolderTfl />
	<hr class="!border-t-8 !border-double" />

	<HolderFram />
</section>
<Srvevce />
<Holder />
<Contactme />
