<template>
  <button class="custom__button"><slot></slot></button>
</template>


<script setup>
import { defineOptions } from "vue";

defineOptions({
  name: "TheButton",
});
</script>
