<script lang="ts">
	import { fade } from 'svelte/transition';
	import image from '$lib/images/op.jpg';
	import Icon from '@iconify/svelte';
	import Headeing from '$lib/Headercomp/headeing.svelte';
	import Tabsinfo from './tabsinfo.svelte';
	let show = true;
</script>

<section>
	<div class="container mx-auto max-w-screen-lg" >
		<div class="grid grid-cols-1 md:grid-cols-12">
			<div class="space-y-4 md:col-span-6 p-4 bg-surface-200">
				<h1 class="text-3xl md:text-5xl font-bold">
					Hi I am <Headeing />
				</h1>
				<p class="max-w-xl opacity-60">
					Welcome to my protfolio , I am a computer science student at the University of Science and
					Ahmed Draia, I am passionate about backend development and Low level programming.
				</p>
				<Tabsinfo />
				<div class="flex flex-wrap gap-4">
					<a
						href="https://t.me/raraeded09"
						class="btn w-full md:w-fit variant-filled-primary md:btn-xl"
						><Icon icon="ic:sharp-telegram" width="24" height="24" style="color: white" /></a
					>

					<a
						href="https://www.instagram.com/raraeded?igsh=MW10eDdkZWM0aGc5Mg=="
						class="btn md:btn-lg w-full md:w-fit variant-filled-surface"
						><Icon icon="mdi:instagram" width="24" height="24" style="color: black" /></a
					>
				</div>
			</div>

			<img src={image} alt="design components" class="hidden md:block md:col-span-6" />
		</div>
	</div>
</section>

