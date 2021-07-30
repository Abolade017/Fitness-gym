<template>
    <div class="relative py-10 mx-auto max-w-5xl ">
        <div class="flex items-center justify-center space-x-12">
      <div class="flex flex-col space-y-6 items-start justify-start">
        <div>
          <p class="text-left text-red-500 font-Otomanopee text-lg font-bold">Improve Moods</p>
        </div>
        <div>
          <h1 class="text-left text-4xl text-dark font-bold font-spartan">Makes You More Active<span><h1 class="text-left text-4xl text-dark font-bold"> And Improves Moods</h1></span></h1>
        </div>
        <div>
          <p class="text-left text-dark text-lg font-spartan">Physical activities and exercise can have immediate and long-term health benefits. Most importantly, regular activity can improve your quality of life. Exercise can improve your health and increase the risk of</p>
        </div>
        <Button>Learn More</Button>
      </div>
       <div class="w-5xl h-5xl">
        <img src="@/assets/images/woman-runner.jpg" alt="woman_runner" class="object-cover rounded-bl-5xl w-full h-full flex justify-center items-center" />
      </div>
    </div>
    <div class="absolute -bottom-4 -right-20">
      <Box />
    </div>
    </div>
</template>
<script>
import Box from './Box';
import Button from './Button';
export default {
    components:{
        Box,
        Button,
    }
}
</script>