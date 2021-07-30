<template>
     <button 
        class="rounded-full bg-red-500 text-white font-Noto text-center flex justify-center items-center w-40 h-12 bg-transparent shadow-lg"
      ><slot></slot></button>
</template>
<script>
export default {
    data(){
        return {
            text:String,
        }
    },
    props:{
        title: String,
    },
}
</script>