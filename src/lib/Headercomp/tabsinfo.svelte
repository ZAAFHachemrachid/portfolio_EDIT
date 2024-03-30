<script lang="ts">
	import { Tabs } from 'flowbite';
	import type { TabsOptions, TabsInterface, TabItem } from 'flowbite';
	import type { InstanceOptions } from 'flowbite';
	import { onMount } from 'svelte';
	onMount(() => {
		const tabsElement: HTMLElement = document.getElementById('tabs')!;

		// create an array of objects with the id, trigger element (eg. button), and the content element
		const tabElements: TabItem[] = [
			{
				id: 'profile',
				triggerEl: document.querySelector('#profile-tab')!,
				targetEl: document.querySelector('#profile')!
			},
			{
				id: 'dashboard',
				triggerEl: document.querySelector('#dashboard-tab')!,
				targetEl: document.querySelector('#dashboard')!
			},
			{
				id: 'settings',
				triggerEl: document.querySelector('#settings-tab')!,
				targetEl: document.querySelector('#settings')!
			}
		];

		// options with default values
		const options: TabsOptions = {
			defaultTabId: 'settings',
			activeClasses:
				'hover:text-blue-600 variant-primary border-b-2 border-primary dark:text-blue-300 dark:border-blue-300 dark:hover:text-blue-200',
			inactiveClasses:
				'text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300',
			onShow: () => {
				console.log('tab is shown');
			}
		};

		// instance options with default values
		const instanceOptions: InstanceOptions = {
			id: 'tabs',
			override: true
		};

		/*
		 * tabsElement: parent element of the tabs component (required)
		 * tabElements: array of tab elements (required)
		 * options (optional)
		 * instanceOptions (optional)
		 */
		const tabs: TabsInterface = new Tabs(tabsElement, tabElements, options, instanceOptions);

		// open tab item based on id
		tabs.show('contacts');
	});
</script>

<div class="mb-4 border-b border-gray-200 dark:border-gray-700">
	<ul
		class="flex flex-wrap -mb-px text-sm font-medium text-center"
		id="default-tab"
		data-tabs-toggle="#default-tab-content"
		role="tablist"
	>
		<li class="me-2" role="presentation">
			<button
				class="inline-block p-4 border-b-2 rounded-t-lg"
				id="profile-tab"
				data-tabs-target="#profile"
				type="button"
				role="tab"
				aria-controls="profile"
				aria-selected="false">Safe apps</button
			>
		</li>
		<li class="me-2" role="presentation">
			<button
				class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
				id="dashboard-tab"
				data-tabs-target="#dashboard"
				type="button"
				role="tab"
				aria-controls="dashboard"
				aria-selected="false"
			>
				Specailized
			</button>
		</li>
		<li class="me-2" role="presentation">
			<button
				class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
				id="settings-tab"
				data-tabs-target="#settings"
				type="button"
				role="tab"
				aria-controls="settings"
				aria-selected="false">Current</button
			>
		</li>
	</ul>
</div>
<div id="default-tab-content">
	<div
		class="hidden p-4 rounded-lg bg-secondary-300 dark:bg-gray-800"
		id="profile"
		role="tabpanel"
		aria-labelledby="profile-tab"
	>
		<p class="text-sm text-gray-500 dark:text-gray-400">
			<strong class="font-medium text-gray-800 dark:text-white">Safe apps</strong>. For my projects,
			I use Rust, which is a safe language that prevents in backend and for frontend i use Svelte
			with TS. For safe and fast web apps
		</p>
	</div>
	<div
		class="hidden p-4 rounded-lg bg-secondary-300 dark:bg-gray-800"
		id="dashboard"
		role="tabpanel"
		aria-labelledby="dashboard-tab"
	>
		<p class="text-sm text-black-500 dark:text-gray-400">
			<strong class="font-medium text-gray-800 dark:text-white">Specailized</strong>. I am
			specialized in backend development and low level programming, I have worked on many projects
			that have helped me to learn more about these fields, Full API with Axum and i Built my own
			Kernel
		</p>
	</div>
	<div
		class="hidden p-4 rounded-lg bg-secondary-300 dark:bg-gray-800"
		id="settings"
		role="tabpanel"
		aria-labelledby="settings-tab"
	>
		<p class="text-sm text-gray-500 dark:text-gray-400">
			<strong class="font-medium text-gray-800 dark:text-white">Current</strong>. I am currently
			working on a project that will help me to learn more about Kerrel development
		</p>
	</div>
</div>
