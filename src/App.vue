<template>
  <div class="wrapper">
    
    <div class="content">
      <the-header/>
      <router-view></router-view>
    </div>
    <the-footer/>
  </div>
  <scroll-back />
</template>

<script>
import TheFooter from "./components/UI/TheFooter.vue";
import TheHeader from "./components/UI/TheHeader.vue";
import ScrollBack from "./components/UX/ScrollBack.vue";

export default {
  name: "app",
  components: {
    TheHeader,
    TheFooter,
    ScrollBack,
  },
};
</script>

<style>


</style>
