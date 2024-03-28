<script lang="ts">
	import image from '$lib/images/image1.png';
	import { popup } from '@skeletonlabs/skeleton';
	import type { PopupSettings } from '@skeletonlabs/skeleton';
	const popupFeatured: PopupSettings = {
		// Represents the type of event that opens/closed the popup
		event: 'click',
		// Matches the data-popup value on your popup element
		target: 'popupFeaturedA',
		// Defines which side of your trigger the popup will appear
		placement: 'bottom'
	};
</script>

<div class="card w-80 mx-auto variant-filled-secondary">
	<header class="card-header"><img src={image} alt="API" class="" /></header>

	<div class="p-4 space-y-6">
		<div class="flex justify-between items-center">
			<b>API</b>
			<div class="text-sm opacity-70">80% completed</div>
		</div>
		<div class="text-sm opacity-70">
			API is a set of functions and procedures allowing the creation of applications that access the
			features or data of an operating system, application, or other service.
		</div>
	</div>
	<!-- <hr /> -->
	<footer class="p-4 border-t border-surface-300-600-token">
		<div class="flex justify-center">
			<button class="btn variant-outline-primary w-32" use:popup={popupFeatured}>View</button>

			<div class="card p-4 w-72 shadow-xl z-50" data-popup="popupFeaturedA">
				<div>
					<h3 class="h3 m-1">API</h3>
					<button class="btn m-1 variant-outline-primary"> project 1 </button> <br />
					<button class="btn m-1 variant-outline-primary"> project 1</button>
					<div class="arrow bg-surface-100-800-token" />
				</div>
			</div>
		</div>
	</footer>
</div>

<style>
	.card img {
		width: 340px;
		height: 280px;
		object-fit: cover;
	}
</style>
