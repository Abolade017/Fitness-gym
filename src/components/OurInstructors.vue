<template>
<div class="mx-auto max-w-5xl">
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
    <div class="flex justify-between items-center space-x-24">
      <div
        class="flex justify-center items-center"
        v-for="instructor in instructors"
        :key="instructor.id"
      >
        <div class="flex flex-col space-y-4 justify-center items-center">
          <div class="h-56 w-64">
            <img :src="instructor.url" :alt="instructor.alt" class="h-full w-full transform  rounded-t-lg  flex-shrink-0" />
          </div>
          <div class="flex flex-col space-y-2 justify-center items-center">
            <div>{{instructor.name}}</div>
            <div>{{instructor.expert}}</div>
          </div>
        </div>
      </div>
    </div>
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
          url: require("@/assets/images/trainer1.jpg"),
          expert: "Cardio Erpert",
          alt: "Cardio Expert"
        },
        {
          id: 2,
          name: "Monica Sallesa",
          url: require("@/assets/images/trainer2.jpg"),
          expert: "Nutrition Expert",
          alt: "Nutrition Expert"
        },
        {
          id: 3,
          name: "Jhonson Rossoe",
          url: require("@/assets/images/trainer3.jpg"),
          expert: "meditation Expert",
          alt: "meditation Expert"
        }
      ]
    };
  }
};
</script>