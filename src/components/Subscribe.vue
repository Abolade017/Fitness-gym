<template>
  <div class="flex flex-col space-y-8 items-center justify-center py-20">
    <div class="font-bold text-dark text-3xl text-center font-spartan">Subscribe Our Fitness Article</div>
    <div class="text-dark text-lg text-center font-spartan">
      <p>
        Physical activity is defined as any bodily movement produced by
        <span>
          <p>skeletal muscles that results in energy expenditure</p>
        </span>
      </p>
    </div>
    <div class="flex justify-center items-center">
      <form action class="relative ">
        <input
          type="email"
          placeholder="Enter Your Email Address"
          class=" focus:outline-none flex justify-center items-center text-center w-6xl rounded-full h-16 placeholder-gray-300"
        />
        <div class="absolute bottom-2 right-2 pr-1">
        <Button class="">Subscribe</Button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import Button from "./Button";
export default {
  components: {
    Button
  }
};
</script>