<template>
  <div class="cart">
    <div class="container">
      <div class="cart__wrapper">
        <div class="cart__empty" v-show="user.cart.length < 1">
          <p class="heading">Coșul este gol!</p>
          <router-link 
          to="/items" 
          class="custom__button">
          Vezi toate produsele
          </router-link>
        </div>
        <div class="cart__message" v-show="user.cart.length >= 1">
          <p class="heading">Coș ({{ user.cart.length }})</p>
        </div>
        <div class="cart__items">
          <shopping-item
            v-for="item in user.cart"
            :key="item.id"
            :img="item.img"
            :productName="item.productName"
            :brand="item.brand"
            :discount="item.discount"
            :price="item.price"
            :saveMoney="saveMoney(item)"
            :newPrice="newPrice(item)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

 <script setup>
import ShoppingItem from "@/components/ProductComponents/ShoppingItem.vue";

import { defineOptions } from "vue";
 
import { useProductStore } from "@/stores/product";
import { storeToRefs } from "pinia";

defineOptions({
  name: "ShoppingCard",
});
const store = useProductStore();

const { user } = storeToRefs(store);

function saveMoney(item) {
  let eco = Math.floor(item.price - (item.price * item.discount) / 100);
  let saved = item.price - eco;
  return saved;
}

function newPrice(item) {
  let eco = Math.floor(item.price - (item.price * item.discount) / 100);
  return eco;
}

</script>
 
 