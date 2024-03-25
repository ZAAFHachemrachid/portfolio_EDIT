<script lang="ts">
    import Apip from "./APIP.svelte";
    import Kernel from "./Kernel.svelte";
    import Guiapp from "./GUIAPP.svelte";
    import WeBapp from "./WEBapp.svelte";
</script>

   
   <div class="flex flex-wrap">
    <div class="w-full sm:w-1/2 p-4 bg-surface-300"> <Apip /></div>
    <div class="w-full sm:w-1/2 p-4 bg-surface-300"> <Kernel /></div>
    <div class="w-full sm:w-1/2 p-4 bg-surface-300"> <Guiapp /></div>
    <div class="w-full sm:w-1/2 p-4 bg-surface-300"> <WeBapp /></div>
   </div>
   
   