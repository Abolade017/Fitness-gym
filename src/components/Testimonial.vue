<template>
  <div class="flex justify-center space-x-24 items-center relative mx-auto max-w-5xl">
    <div class="h-5xl w-exact-sm">
      <img src="@/assets/images/motherschild.jpg" alt="mother_child_fitness" class="w-full h-full" />
    </div>
    <div class="flex flex-col space-y-6 items-start h-5xl">
      <h1 class="text-left text-red-500 text-lg font-bold font-Otomanopee">Testimonials</h1>
      <p class="text-left font-bold text-dark font-spartan text-4xl">
        That's What Our
        <span>
          <p class="text-left font-bold text-dark font-spartan text-4xl">Super Client Says</p>
        </span>
      </p>
    </div>
    <div class="absolute -right-36 top-96">
      <Box />
    </div>
    <div class="absolute bg-white h-80 w-exact top-52 -right-12 rounded-tr-5xl">
      <div class="flex flex-col justify-center pt-20 px-10 space-y-8">
        <p
          class="text-left text-dark text-xl font-Josefin"
        >"Gale is an amazing trainer as well as a graet person. she is so flexible when it comes to my crazy work schedule and make sure she to always fit me in. Everyday she pushes me harder towards my goals."</p>
        <div>
          <h1 class="font-bold text-dark text-left font-spartan text-xl">Jessica Parker</h1>
          <p>Mariland, USA</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Box from "./Box";
export default {
  components: {
    Box
  }
};
</script>