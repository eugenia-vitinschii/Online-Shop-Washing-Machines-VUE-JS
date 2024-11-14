<template>
  <the-header />
  <div class="content"></div>
  <router-view></router-view>
  <the-footer />
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
