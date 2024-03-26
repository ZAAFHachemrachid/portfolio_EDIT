<script lang="ts">
    import Apip from "./APIP.svelte";
    import Kernel from "./Kernel.svelte";
    import Guiapp from "./GUIAPP.svelte";
    import WeBapp from "./WEBapp.svelte";
</script>

<section class=" bg-surface-300">
    <div class="container mx-auto max-w-screen-lg" >

<div class=" bg-surface-600">
    <h1 class="h1 font-bold ">Projects</h1>
    <p class=" text-surface-300-900-token">Here are some of the projects I have been working on.</p>
</div> 
</div>
   <div class="flex flex-wrap">
    <div class="w-full sm:w-1/2 p-4 bg-surface-200"> <Apip /></div>
    <div class="w-full sm:w-1/2 p-4 bg-surface-300"> <Kernel /></div>
    <div class="w-full sm:w-1/2 p-4 bg-surface-400"> <Guiapp /></div>
    <div class="w-full sm:w-1/2 p-4 bg-surface-500"> <WeBapp /></div>
   </div>
   
</section>