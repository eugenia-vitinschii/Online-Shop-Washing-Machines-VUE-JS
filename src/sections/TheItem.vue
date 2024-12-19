<template>
  <!--Product item for items page (all items list) -->
  <div class="item__item">
    <div class="item__top">
      <div class="item__top-logo">
        <router-link :to="'/brand/' + brand" class="body-text">
            {{ brand }}
          </router-link>
      </div>
      <!-- labels for dicsount products -->
      <div class="item__top-labels">
        <div class="item__top-label" :class="{ visible: hugeSaleLabel }">
          <img src="@/assets/img/sale.jpg" alt="oops!" />
        </div>
        <div class="item__top-label" :class="{ visible: dicountLabel }">
          <img src="@/assets/img/discount.jpg" alt="oops!" />
        </div>
      </div>
    </div>
    <!--Img and title links -->
    <div class="item__links">
      <router-link :to="'/product/' + id">
        <div class="item__links-img">
          <img :src="img" alt="no img" />
        </div>
      </router-link>
      <router-link :to="'/product/' + id">
        <p class="body-text"> {{productType}} {{ productName }}</p>
      </router-link>
    </div>
    <!-- Prices blocks -->
    <div class="item__price">
      <div class="item__price-value">
        <p class="body-text bold" :class="{ oldPrice: !hidden}">
          {{ price }} lei
        </p>
        <p class="body-text bold " :class="{ hidden: hidden }">
          {{ newPrice }} lei
        </p>
      </div>
      <div class="item__price-value" :class="{ hidden: hidden }">
        <p class="body-text-red">
          Reducere <span class="bold">{{ discount }}%</span>
        </p>
        <p class="body-text-green">
          Economie <span class="bold">{{ economie }} lei!</span>
        </p>
      </div>
    </div>

    <!-- Add to card & Favorite -->
    <div class="item__buttons">
      <div class="item__buttons-credit">
        <p class="body-text">
          De la <span class="bold">{{ monthlyPrice }} lei </span> /lunar
        </p>
      </div>
      <div class="item__buttons-action">

      </div>
      <button @click="$emit('addToCard')">
        <svg id="card" class="" viewBox="0 0 576 512">
          <path
            d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"
          />
        </svg>
      </button>
      <button
        class="heart"
        @click="$emit('addToFavorite', 'selected   = ! selected  ')"
         
      >
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/></svg>
      </button>
    </div>
  </div>
</template>


<script setup>
//vue
import { defineOptions, defineProps } from "vue";

defineOptions({
  name: "TheItem",
});

defineProps({
  id: {
    type: String,
  },
  img: {
    type: String,
  },
  productType:{
    type: String,
  },
  productName: {
    type: String,
  },
  price: {
    type: [String, Number],
  },
  brand: {
    type: String,
  },
  labelImg: {
    type: String,
  },
  discount: {
    type: String,
  },
  label: {
    type: String,
  },
  economie: {
    type: Number,
  },
  newPrice: {
    type: Number,
  },
  hidden: {
    type: Boolean,
    default: false,
  },
  oldPrice: {
    type: Boolean,
    default: false,
  },
  hugeSaleLabel: {
    type: Boolean,
    default: false,
  },
  dicountLabel: {
    type: Boolean,
    default: false,
  },
  redHeart: {
    type: Boolean,
    default: false,
  },
  monthlyPrice: {
    type: Number,
  },
});
</script>
