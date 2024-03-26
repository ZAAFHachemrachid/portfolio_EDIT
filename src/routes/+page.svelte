<script lang="ts">
	import Hero from '$lib/hero.svelte';
	import Srvevce from '$lib/srvevce.svelte';
	import Holder from '$lib/projecte/Holder.svelte';
	import Contactme from '$lib/contactme.svelte';
	import HolderTfl from '$lib/TFL/HolderTFL.svelte';
	import HolderFram from '$lib/TFL/HolderFRAM.svelte';
	import Headeing from '$lib/headeing.svelte';
	import { fade } from 'svelte/transition';
</script>

<section>
	<Hero />
</section>
<HolderTfl />
<HolderFram />
<Srvevce />
<Holder />
<Contactme />
