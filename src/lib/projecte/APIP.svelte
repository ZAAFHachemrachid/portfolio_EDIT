<script lang="ts">
    import image from '$lib/images/image1.png'
</script>

<div class="card w-80 mx-auto">
	<img src={image} alt="API" class="" />
	<div class="p-4 space-y-6">
		<div class="flex justify-between items-center">
			<b>API</b>
			<div class="text-sm opacity-70">80% completed</div>
		</div>
		<div class="text-sm opacity-70">
            API is a set of functions and procedures allowing the creation of applications that access the features or data of an operating system, application, or other service.
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