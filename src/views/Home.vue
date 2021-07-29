<template>
<div>
  <div class="flex justify-between items-center">
    <div class="w-1/2">
      <Header />
    </div>
  <Fitness />
  </div>
  <OurService />
  </div>
</template>
<script>
import Header from "../components/Header";
import Fitness from '../components/Fitness';
import OurService from '../components/OurService';
export default {
  components: {
    Header,
    Fitness,
    OurService
  }
};
</script>