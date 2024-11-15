<template>
  <div class="header">
    <div class="container">
      <div class="header__wrapper">
        <div class="header__content">
          <div class="header__logo">
            <router-link to="/">
              <img src="@/assets/img/logo-header.jpg" alt="The Logo" />
            </router-link>
          </div>
          <nav class="header__links">
            <ul> 
              <li>
                <router-link class="header__link" to="/admin-panel"
                  >Admin</router-link>
              </li>
              <li>
                <router-link class="header__link" to="/"
                  >Home</router-link>
              </li>
             
              <!-- <li>
                <router-link class="header__link" to="/">Acasă</router-link>
              </li> -->
              <li>
                <router-link class="header__link" to="/items"
                  >Produse</router-link>
              </li>
              <li>
                <router-link class="header__link" to="/shopping-card">
                  <svg   class="header__link-icon" viewBox="0 0 576 512">
          <path
            d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"
          /></svg>
                 
                  <span class="red__circle">{{ user.cart.length }} </span>
                </router-link>
              </li>
              <!-- <li>
                <router-link class="header__link" to="/favorite"
                  >Favorite</router-link>
              </li> -->
              <!-- <li>
                <router-link class="header__link" to="/info"
                  >Termeni și condiții</router-link>
              </li> -->
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineOptions } from "vue";
import { useProductStore } from "@/stores/product";
import { storeToRefs } from "pinia";
defineOptions({
  name: "TheHeader",
});


const store = useProductStore();

const { user } = storeToRefs(store);
</script>