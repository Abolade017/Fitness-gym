<template>
  <div class="flex flex-col space-y-8 items-center justify-center relative">
    <div class="absolute"></div>
    <div class="items-center font-Otomanopee text-red-500 text-lg font-bold">Our Services</div>
    <div class="text-center font-bold text-4xl font-spartan text-dark items-center">
      <h1>
        Awesome Packages That We
        <span>
          <h1 class="pt-2">For Our Clients</h1>
        </span>
      </h1>
    </div>
    <Offers />
  </div>
</template>
<script>
import Offers from '../components/Offer';
export default {
    components:{
        Offers,
    },
}
</script>