<script lang="ts">
	import Hero from "$lib/hero.svelte";
	import Srvevce from "$lib/srvevce.svelte";
	import Holder from "$lib/projecte/Holder.svelte";
	import Contactme from "$lib/contactme.svelte";
	import HolderTfl from "$lib/TFL/HolderTFL.svelte";
    import {fade} from 'svelte/transition';
</script>
<section>
<div transition:fade={{ duration: 400 }}>

<Hero  />
</div>
</section>
<HolderTfl />
<Srvevce />
<Holder />
<Contactme />