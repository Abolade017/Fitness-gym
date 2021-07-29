<template>
  <div  class="flex items-center justify-center space-x-10">
      <div class="bg-white h-56 w-48 rounded-bl-xl flex justify-center items-center"   v-for="offer in offers"
      :key="offer.id">
          <div class="flex justify-center items-center"></div>
           <div class="flex justify-center items-center"><p class="text-center flex justify-center items-center font-Noto text-lg text-dark">{{offer.title}}</p></div>
      </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      offers: [
        { id: 1, title: "Meditation Programme", pic: "" },
        { id: 2, title: "Muscle Building", pic: "" },
        { id: 3, title: "Cardio programme", pic: "" , more:'Learn More'},
        { id: 4, title: "Nutrition Supports", pic: "fab fa-nutritionix" }
      ]
    };
  }
};
</script>