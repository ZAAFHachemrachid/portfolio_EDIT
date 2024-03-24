<script lang="ts">
	import image from '../lib/op.jpg'
	import Icon from '@iconify/svelte';
    import { fade } from "svelte/transition";
    import { quintOut } from 'svelte/easing';


</script>

<div class="container mx-auto max-w-screen-lg" transition:fade={{ duration: 500, delay: 500, easing: quintOut }}>
	<div class="grid grid-cols-1 md:grid-cols-12">
		<div class="space-y-4 md:col-span-6 p-4">
			<h1 class="text-3xl md:text-5xl font-bold">
				Hi I am <span class="relative px-1 md:px-3 py-1 bg-surface-300-600-token">Rachid</span>  
			</h1>
			<p class="max-w-xl opacity-60">
			    Welcome to my protfolio , I am a computer science student at the University of Science and 
                Technology Houari Boumediene, I am passionate about backend development and Low level programming.
			</p>
			<ul class="list-items">
				<li>
					<span><Icon icon="lucide:circle-check" class="variant-filled-primary rounded-token p-0.5" /></span>
					<span>
						<b>Rust Svelte based</b> – build safe applications, no runtime errors, no undefined is not a function ,and thay are
                         fast
					</span>
				</li>
				<li>
					<span><Icon icon="lucide:circle-check" class="variant-filled-primary rounded-token p-0.5" /></span>
					<span>
						<b>Free and open source</b> – all packages have MIT license, you can use Mantine in any project
					</span>
				</li>
				<li>
					<span><Icon icon="lucide:circle-check" class="variant-filled-primary rounded-token p-0.5" /></span>
					<span>
						<b>Current</b> – I am currently working on a project that will help me to learn more about Kerrel development
					</span>
				</li>
			</ul>
			<div class="flex flex-wrap gap-4">
                <a href="https://t.me/raraeded09"  class="btn w-full md:w-fit variant-filled-primary md:btn-xl" ><Icon icon="icon-park-outline:telegram" /></a>

				<a href="https://www.instagram.com/raraeded?igsh=MW10eDdkZWM0aGc5Mg==" class="btn md:btn-lg w-full md:w-fit variant-filled-surface"><Icon icon="ion:logo-instagram" /></a>
			</div>
		</div>

		<img src={image} alt="design components" class="hidden md:block md:col-span-6" />
	</div>
</div>

<style>
	.list-items li {
		display: flex;
		gap: 16px;
		padding: 12px 0px;
	}
</style>