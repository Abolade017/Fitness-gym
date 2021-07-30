<template>
  <div class="flex flex-col space-y-20 mx-auto max-w-md py-12 pl-24">
    <div class="flex items-center space-x-20">
      <div>
        <img src="@/assets/images/images.jpg" alt="fitness_logo" class="h-12 w-12" />
      </div>
      <div class="flex space-x-6 items-center">
        <router-link to="/">Home</router-link>
        <router-link to="/training" class="text-gray-500">Training</router-link>
        <router-link to="/about" class="text-gray-500">Contact</router-link>
      </div>
    </div>
    <FitnessClub />
    <div class="flex items-center space-x-10">
      <Button>Join Now</Button>
      <button
        class="rounded-full bg-red-50 text-dark font-Cormorant text-center flex justify-center items-center w-40 h-12 ring-2 ring-red-200 ring-opacity-50"
      >Know More</button>
    </div>
    <h1 class="text-10xl spacing-6 font-Otomanopee text-red-200 text-opacity-25">Exercise</h1>
  </div>
</template>
<script>
import FitnessClub from "../components/FitnessClub";
import Button from '../components/Button'
export default {
  components: {
    FitnessClub,
    Button
  }
};
</script>