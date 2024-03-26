<script lang="ts">
    import image from '$lib/images/image2.png'
</script>

<div class="card w-80 mx-auto variant-ghost-secondary">
	<header class="card-header "><img src={image} alt="API" class="" /></header>

	
	<div class="p-4 space-y-6">
		<div class="flex justify-between items-center">
			<b>Kernel</b>
			<div class="text-sm opacity-70">43% completed</div>
		</div>
		<div class="text-sm opacity-70">
            I start learning and build my own kernel from scratch as a hobby project. 
            I am using Rust programming language to build the kernel. And wiki.osdev.org is my main reference.
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
        width: 340px;
        height: 280px;
        object-fit: cover;
    }
</style>