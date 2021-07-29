<template>
     <div class="w-1/2 items-center pb-10 relative">
      <div class="h-exact">
        <img
          src="@/assets/images/lady.jpg"
          alt="lady_fitness"
          class="object-cover w-full h-full rounded-bl-5xl"
        />
      </div>
      <div class="absolute right-4 -bottom-14">
       <Box />
      </div>
      <div class="absolute top-80 -left-8">
        <div class="flex items-center justify-center rounded-full h-24 w-24 bg-white">
          <div class="flex items-center justify-center h-24 w-24">
            <i class="fas fa-play text-red-600 flex items-center justify-center h-full w-full"></i>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
import Box from '../components/Box';
export default {
  components:{
    Box,
  }
}
</script>