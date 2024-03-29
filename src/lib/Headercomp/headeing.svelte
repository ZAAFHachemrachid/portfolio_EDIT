<script lang="ts">
	import { onMount } from 'svelte';

	let text = '';
	let index = 0;
	let isRemoving = false;
	const messages = ['Rachid  ', 'Devloper  ', 'Backend-Dev  ', 'Student  '];
	let i = 0;

	onMount(() => {
		const action = () => {
			if (isRemoving) {
				if (text.length > 0) {
					text = text.slice(0, -1);
					setTimeout(action, 300); // Adjust the deleting speed here
					return;
				}
				isRemoving = false;
				i++;
				if (i >= messages.length) {
					i = 0;
				}
				setTimeout(action, 1000); // Wait before typing the next message
				return;
			}
			const message = messages[i];
			text = message.slice(0, text.length + 1);
			if (text.length === message.length) {
				isRemoving = true;
			}
			setTimeout(action, isRemoving ? 100 : 300); // Adjust the typing and deleting speeds here
		};

		setTimeout(action, 300); // Start the action
	});
</script>

<span class="gradient-heading">{text}</span>
