<template>
  <div class="bg-red-100 opacity-15">
    <div class="flex justify-between items-center mx-auto max-w-5xl py-20">
      <div class="flex flex-col space-y-10 h-48">
        <div class="flex space-x-6 items-center">
          <img src="@/assets/images/images.jpg" alt="Logo" class="h-12 w-12 items-center" />
          <h1 class="text-dark font-bold text-xl items-center">Golds Gym</h1>
        </div>
        <p class="text-left text-dark text-md">
          A Modified Fitness Club that
          <span>
            <p>provide fitness and nutrition related</p>
          </span>
          <span>
            <p>services to improve your health.</p>
          </span>
        </p>
        <div class="flex space-x-6 items-center">
          <div></div>
          <div v-for="social in socials" :key="social.id">
            <div
              class="flex justify-center items-center h-8 w-8 rounded-full"
              :selected="social.id===2"
              :style="[social.id===2 ? {'background': 'red'} : {'background':'white'}]"
            >
              <i
                class="flex justify-center items-center h-8 w-8"
                :selected="social.id===2"
                :style="[social.id===2 ? {'color': '#FFF'} : {'color':'red'}]"
                :class="social.brand"
              ></i>
            </div>
          </div>
        </div>
      </div>
      <div class="h-48 flex flex-col space-y-6 items-center">
        <h1 class="text-dark font-bold text-lg">Resources</h1>
        <div class="flex flex-col space-y-2">
          <div class v-for="resource in resources" :key="resource.id">
            <a href="#" class="text-dark text-md text-left">{{resource.title}}</a>
          </div>
        </div>
      </div>
      <div class="h-48 flex flex-col space-y-6 items-center">
        <h1 class="text-dark font-bold text-lg">About</h1>
        <div class="flex flex-col space-y-2">
          <div class v-for="about in abouts" :key="about.id">
            <a href="#" class="text-dark text-md text-left">{{about.title}}</a>
          </div>
        </div>
      </div>
      <div class="h-48 flex flex-col space-y-6 items-center">
        <h1 class="text-dark font-bold text-lg">Helpful Links</h1>
        <div class="flex flex-col space-y-2">
          <div class v-for="link in helpfulLink" :key="link.id">
            <a href="#" class="text-dark text-md text-left">{{link.title}}</a>
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
      socials: [
        { id: 1, brand: "fab fa-facebook-f" },
        { id: 2, brand: "fab fa-twitter", bgColor: "bg-red-500", more: true },
        { id: 3, brand: "fab fa-google-plus-g" },
        { id: 4, brand: "fab fa-linkedin-in" }
      ],
      resources: [
        { id: 1, title: "Features" },
        { id: 2, title: "Pricing" },
        { id: 3, title: "Activity" },
        { id: 4, title: "Instructors" }
      ],
      abouts: [
        { id: 1, title: "Blog" },
        { id: 2, title: "FAQs" },
        { id: 3, title: "Policy" },
        { id: 4, title: "Contact" }
      ],
      helpfulLink: [
        { id: 1, title: "Articles" },
        { id: 2, title: "Nutrtions" },
        { id: 3, title: "Meditation" },
        { id: 4, title: "Services" }
      ]
    };
  }
};
</script>
<style scoped>
/* .bgColor{
    background-color: red;
    color: white;
} */
</style>