<script lang="ts">
	import { fade } from 'svelte/transition';
	import image from '$lib/images/op.jpg';
	import Icon from '@iconify/svelte';
	import Headeing from '$lib/Headercomp/headeing.svelte';
	let show = true;
</script>

<section class="">
	<div class="container mx-auto max-w-screen-lg">
		<div class="grid grid-cols-1 md:grid-cols-12">
			<div class="space-y-4 md:col-span-6 p-4 bg-surface-200">
				<h1 class="text-3xl md:text-5xl font-bold">
					Hi I am <Headeing />
				</h1>
				<p class="max-w-xl opacity-60">
					Welcome to my protfolio , I am a computer science student at the University of Science and
					Ahmed Draia, I am passionate about backend development and Low level programming.
				</p>
				<ul class="list-items">
					<li>
						<span
							><Icon
								icon="lucide:circle-check"
								class="variant-filled-primary rounded-token p-0.5"
							/></span
						>
						<span>
							<b>Safe apps</b> – For my projects, I use Rust, which is a safe language that prevents
							in backend and for frontend i use Svelte with TS. For safe and fast web apps
						</span>
					</li>
					<li>
						<span
							><Icon
								icon="lucide:circle-check"
								class="variant-filled-primary rounded-token p-0.5"
							/></span
						>
						<span>
							<b> Specailized </b> – I am specialized in backend development and low level programming,
							I have worked on many projects that have helped me to learn more about these fields, Full
							API with Axum and i Built my own Kernel
						</span>
					</li>
					<li>
						<span
							><Icon
								icon="lucide:circle-check"
								class="variant-filled-primary rounded-token p-0.5"
							/></span
						>
						<span>
							<b>Current</b> – I am currently working on a project that will help me to learn more about
							Kerrel development
						</span>
					</li>
				</ul>
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

<style>
	.list-items li {
		display: flex;
		gap: 16px;
		padding: 12px 0px;
	}
</style>
