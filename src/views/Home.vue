<template>
  <div>
    <div class="flex justify-between items-center">
      <div class="w-1/2">
        <Header />
      </div>
      <Fitness />
    </div>
    <OurService />
    <PhysicalExercise />
    <ImproveMode />
    <OurInstructors />
  </div>
</template>
<script>
import Header from "../components/Header";
import Fitness from "../components/Fitness";
import OurService from "../components/OurService";
import PhysicalExercise from "../components/PysicalExercise";
import ImproveMode from "../components/ImproveMode";
import OurInstructors from "../components/OurInstructors";
export default {
  components: {
    Header,
    Fitness,
    OurService,
    PhysicalExercise,
    ImproveMode,
    OurInstructors,
  }
};
</script>