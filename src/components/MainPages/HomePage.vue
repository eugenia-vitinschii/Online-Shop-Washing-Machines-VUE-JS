<template>

    <div class="container">
      <div class="home__wrapper">
        <p class="heading">Home page</p>
      </div>
  </div>
  <div class="delivery">
    <div class="container">
      <div class="delivery__wrapper">
        <delivey-item
          v-for="item in items"
          :key="item.id"
          :id="item.id"
          :img="item.img"
          :name="item.name"
          :body="item.body"
        />
      </div>
    </div>
  </div>
</template>


<script setup>

import DeliveyItem from "../UI/DeliveyItem.vue";
import { defineOptions } from "vue";
 

defineOptions({
  name: "HomePage",
});
    const items = [
      {
        id: '1',
        img: require("@/assets/img/icons8-settings-64.png"),
        name: "Service și garanție",
        body: "Rețea proprie de centre de servicii",
      },
      {
        id: '2',
        img: require("@/assets/img/icons8-home-64.png"),
        name: "Livrare în toată Moldova",
        body: "Livrarea de la 1 la 2 zile de la data comenzii",
      },
      {
        id: '3',
        img: require("@/assets/img/icons8-checkmark-64.png"),
        name: "Încredere și fiabilitate",
        body: "20 de ani pe piață",
      },
      {
        id: '4',
        img: require("@/assets/img/icons8-money-64.png"),
        name: "Returnare și schimbare",
        body: "În termen de 14 zile",
      },
    ];
</script>