<template>
  <router-link :to="'/brand/' + brand">
    <img class="brands__img" :src="img" alt="brand">
  </router-link>
</template>

<script setup>
import {defineOptions, defineProps }from "vue";

defineOptions ({
   name: "BrandsSection"
})


defineProps({
  brand:{
    type: String,
  },
  img: {
    type: String,
  },
})
</script>

 