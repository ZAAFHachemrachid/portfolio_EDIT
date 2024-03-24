<script lang="ts">
    import Apip from "./APIP.svelte";
    import Kernel from "./Kernel.svelte";
    import Guiapp from "./GUIAPP.svelte";
    import WeBapp from "./WEBapp.svelte";
</script>

   
   <div class="flex flex-wrap">
    <div class="w-full sm:w-1/2 p-4 bg-primary-700"> <Apip /></div>
    <div class="w-full sm:w-1/2 p-4 bg-primary-700"> <Kernel /></div>
    <div class="w-full sm:w-1/2 p-4 bg-primary-700"> <Guiapp /></div>
    <div class="w-full sm:w-1/2 p-4 bg-primary-700"> <WeBapp /></div>
   </div>
   
   