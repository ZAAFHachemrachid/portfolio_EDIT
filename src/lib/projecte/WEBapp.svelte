<script lang="ts">
    import image from '$lib/images/image1.png'
</script>

<div class="card w-80 mx-auto">
	<header class="card-header"></header>
	<img src={image} alt="API" class="" />
	<section class="p-4 space-y-6">
	
		<div class="flex justify-between items-center">
			<b>WEB App</b>
			<div class="text-sm opacity-70">55% completed</div>
		</div>
		<div class="text-sm opacity-70">
            I use svelte as a front-end framework to build the web app. I use Tailwind CSS to style the web app. I use Vite as a build tool. I use Vercel to deploy the web app.
        </div>
	</section>
	<!-- <hr /> -->
	<footer class="p-4 border-t border-surface-300-600-token">
		<div class="flex justify-between">
			
		</div>
	</footer>
</div>

<style>
    .card img {
        width: 340px;
        height: 340px;
        object-fit: cover;
    }
</style>