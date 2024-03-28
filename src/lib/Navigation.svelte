<script lang="ts">
	import { ListBox, ListBoxItem, getModalStore, getDrawerStore } from '@skeletonlabs/skeleton';
	const drawerStore = getDrawerStore();
	function drawerClose(): void {
		drawerStore.close();
	}
</script>

<nav class="list-nav p-4">
	<ul>
		<li>
			<a class="btn btn-sm variant-ghost-surface" href="#Language" on:click={drawerClose}>
				Lang & Tool
			</a>
		</li>
		<li>
			<a class="btn btn-sm variant-ghost-surface" href="#Services" on:click={drawerClose}>
				Services
			</a>
		</li>
		<li>
			<a class="btn btn-sm variant-ghost-surface" href="#Projects" on:click={drawerClose}>
				Projects
			</a>
		</li>
		<li>
			<a class="btn btn-sm variant-ghost-surface" href="#contact" on:click={drawerClose}>
				Contact
			</a>
		</li>
	</ul>
</nav>
