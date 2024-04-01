<script lang="ts">
	import Apip from './APIP.svelte';
	import Kernel from './Kernel.svelte';
	import Guiapp from './GUIAPP.svelte';
	import WeBapp from './WEBapp.svelte';
</script>

<section class=" bg-secondary-300">
	<div class="container mx-auto max-w-screen-lg">
		<div
			class=" bg-secondary-300 justify-center"
			style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 10vh;"
		>
			<h1 class="h1 font-bold gradient-heading" id="Projects">Projects</h1>
			<p class=" text-surface-300-900-token">
				Here are some of the projects I have been working on.
			</p>
		</div>
	</div>
	<div class="flex flex-wrap">
		<div class="w-full sm:w-1/2 p-4 bg-secondary-300"><Apip /></div>
		<div class="w-full sm:w-1/2 p-4 bg-secondary-300"><Kernel /></div>
		<div class="w-full sm:w-1/2 p-4 bg-secondary-300"><Guiapp /></div>
		<div class="w-full sm:w-1/2 p-4 bg-secondary-300"><WeBapp /></div>
	</div>
</section>
