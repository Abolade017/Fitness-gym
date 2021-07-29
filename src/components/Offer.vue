<template>
  <div class="flex items-center justify-center space-x-10">
    <div
      class="bg-white h-64  w-48 rounded-bl-xl flex flex-col justify-center items-center border-opacity-75 border border-gray-200"
      v-for="offer in offers"
      :key="offer.id"
    >
      <div class="flex flex-col space-y-10 items-center justify-center h-52 w-48">
        <div class="flex justify-center items-center h-10 w-10">
          <span
            :class="offer.pic"
            class="flex justify-center text-5xl items-center text-red-500"
          >{{offer.alt}}</span>
        </div>
        <div class="flex flex-col justify-center items-center">
          <p
            class="text-center flex justify-center items-center font-Noto text-lg text-dark break-words"
          >{{offer.titleOne}}</p>
          <span class="text-center items-center font-Noto text-lg text-dark">{{offer.titleTwo}}</span>
        </div>
       
      </div>
       <div class="flex justify-center items-center text-center text-red-500 text-md pb-4 " v-if="!more && offer.id==3">{{offer.more}}</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    
    return {
      more:false,
      offers: [
        {
          id: 1,
          titleOne: "Meditation",
          titleTwo: "Programme",
          pic: " material-icons-outlined",
          alt: "self_improvement"
        },
        {
          id: 2,
          titleOne: "Muscle",
          titleTwo: "Building",
          pic: "material-icons-outlined",
          alt: "fitness_center"
        },
        {
          id: 3,
          titleOne: "Cardio",
          titleTwo: " programme",
          pic: "material-icons-outlined",
          more: "Learn More",
          alt: "directions_run",
          more: "learn More"
        },
        {
          id: 4,
          titleOne: "Nutrition",
          titleTwo: "Supports",
          pic: "material-icons-outlined",
          alt: "emoji_food_beverage"
        }
      ]
    };
  }
};
</script>