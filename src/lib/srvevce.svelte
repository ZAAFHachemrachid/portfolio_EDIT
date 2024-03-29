<script lang="ts">
	//import IconGauge from 'virtual:icons/tabler/gauge'
	//import IconUser from 'virtual:icons/tabler/user'
	//import IconCookie from 'virtual:icons/tabler/cookie'
	//import IconLock from 'virtual:icons/tabler/lock'
	//import IconMessage2 from 'virtual:icons/tabler/message-2'
	import type { SvelteComponentTyped } from 'svelte';
	import Icon from '@iconify/svelte';

	const mockdata = [
		{
			title: 'Extreme performance',
			description:
				'This dust is actually a powerful poison that will even make a pro wrestler sick, Regice cloaks itself with frigid air of -328 degrees Fahrenheit'
		},
		{
			title: 'Privacy focused',
			description:
				'People say it can run at the same speed as lightning striking, Its icy body is so cold, it will not melt even if it is immersed in magma'
		},
		{
			title: 'No third parties',
			description:
				'They’re popular, but they’re rare. Trainers who show them off recklessly may be targeted by thieves'
		},
		{
			title: 'Secure by default',
			description:
				'Although it still can’t fly, its jumping power is outstanding, in Alola the mushrooms on Paras don’t grow up quite right'
		}
	];
</script>

<section>
	<div class="container mx-auto max-w-screen-lg">
		<div class="grid grid-cols-1 md:grid-cols-12">
			<div class="space-y-4 md:col-span-4 p-4">
				<div class="text-xl md:text-3xl font-bold gradient-heading" id="Services">Services :</div>
				<p class="max-w-xl opacity-60 mx-auto">
					What i am cabable of doing, I have worked on many projects and i have a good experience in
					backend development and low level programming and desktop apps.
				</p>
			</div>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:col-span-8">
				<div class="p-4 space-y-2">
					<div class="variant-filled-tertiary text-2xl p-2 w-fit rounded-token">
						<Icon icon="iconoir:network-solid" />
					</div>

					<div class="font-semibold">API's</div>
					<div class="text-sm opacity-60">
						Most api that I have worked on are RPC based, I have also worked on RESTful api's, I
						have also worked on GraphQL api's,And i use Axum as a web framework to create api's
					</div>
				</div>
				<div class="p-4 space-y-2">
					<div class="variant-filled-tertiary text-2xl p-2 w-fit rounded-token">
						<Icon icon="carbon:network-2" />
					</div>

					<div class="font-semibold">Multi web apps API's</div>
					<div class="text-sm opacity-60">
						Same i use Axum in this field to create api's,To mange multiple apps in one code base, I
						have also worked on websockets to create real time api's.
					</div>
				</div>
				<div class="p-4 space-y-2">
					<div class="variant-filled-tertiary text-2xl p-2 w-fit rounded-token">
						<Icon icon="codicon:terminal-linux" class="variant-ghost-primary" />
					</div>

					<div class="font-semibold">Embbeded Systems</div>
					<div class="text-sm opacity-60">
						I devlop software for microcontrollers, I have worked on the stm32f4 and stm32f1
						series,And try to build my own Kernel as a hobby and i want to make it a os.
					</div>
				</div>
				<div class="p-4 space-y-2">
					<div class="variant-filled-tertiary text-2xl p-2 w-fit rounded-token">
						<Icon icon="carbon:gui" />
					</div>

					<div class="font-semibold">GUI Development</div>
					<div class="text-sm opacity-60">
						I have worked on GUI development using GTK and QT, I have also worked on web development
						using Svelte , Tuari and Iced.
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
