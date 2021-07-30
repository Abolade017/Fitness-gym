<template>
  <div>
    <div class="flex flex-col space-y-8 items-center justify-center py-20">
      <div
        class="text-red-500 text-center item-center text-lg font-bold font-Otomanopee"
      >Our Instructors</div>
      <div class="text-4xl text-dark font-spartan text-center font-bold">
        <h1>
          Meet Our Extremely
          <span>
            <h1>Talented Trainers</h1>
          </span>
        </h1>
      </div>
    </div>
    <div
      class="flex justify-center items-center"
      v-for="instructor in instructors"
      :key="instructor.id"
    >
        <div>
          <!-- <img :src="@/assets/images/trainer.jpg" alt=""> -->
          <img :src="instructor.pic" :alt="instructor.alt" />
        </div>
         <!-- <div class="flex flex-col space-y-6">
        <div>{{instructor.name}}</div>
        <div>{{instructor.expert}}</div> -->
      <!-- </div> -->
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      instructors: [
        {
          id: 1,
          name: "Jason Holder",
          pic: "../assets/images/trainer1.jpg",
          expert: "Cardio Erpert",
          alt: "Cardio Expert"
        },
        {
          id: 2,
          name: "Monica Sallesa",
          pic: "../assets/images/trainer2.jpg",
          expert: "Nutrition Expert",
          alt: "Nutrition Expert"
        },
        {
          id: 3,
          name: "Jhonson Rossoe",
          pic: "../assets/images/trainer3.jpg",
          expert: "meditation Expert",
          alt: "meditation Expert"
        }
      ]
    };
  }
};
</script>