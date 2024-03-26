<script>
	import { onMount } from 'svelte';
	let text = 'Rachid';
	let displayText = '';

	onMount(() => {
		let i = 0;
		const type = () => {
			if (i < text.length) {
				displayText += text.charAt(i);
				i++;
				setTimeout(type, 500); // Adjust the speed of typing here
			} else {
				setTimeout(() => {}, 1000); // Wait time before reversing
			}
		};

		const reverse = () => {
			if (displayText.length > 0) {
				displayText = displayText.slice(0, -1);
				setTimeout(reverse, 200); // Adjust the speed of reversing here
			} else {
				// After reversing is complete, restart the typing animation
				type(); // Wait time before typing again
			}
		};
		// Start the typing animation
		type();
	});
</script>

<span class="relative px-1 md:px-3 py-1 bg-surface-300-600-token gradient-heading">
	{displayText}
</span>
