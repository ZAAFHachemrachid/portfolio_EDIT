<script lang="ts">
    import image from '$lib/images/image.png'
</script>

<div class="card w-80 mx-auto">
	<img src={image} alt="API" class="" />
	<div class="p-4 space-y-6">
		<div class="flex justify-between items-center">
			<b>WEB App</b>
			<div class="text-sm opacity-70">55% completed</div>
		</div>
		<div class="text-sm opacity-70">
            I use svelte as a front-end framework to build the web app. I use Tailwind CSS to style the web app. I use Vite as a build tool. I use Vercel to deploy the web app.
        </div>
	</div>
	<!-- <hr /> -->
	<footer class="p-4 border-t border-surface-300-600-token">
		<div class="flex justify-between">
			
		</div>
	</footer>
</div>

<style>
    .card img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
</style>