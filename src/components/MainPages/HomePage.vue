<template>
  <div class="home">
    <div class="container">
      <div class="home__wrapper">
        <p class="heading">Home page</p>

        <!-- <p class="heading">
          Number two is: {{ $store.state.products.counter }}
        </p>

        <p class="heading" :style="{ color: $store.state.colorCode }">
          Number is:

          {{ $store.getters.myGettter }}
        </p>

        <button class="someButton" @click="$store.dispatch('increaseCounter')">
          +
        </button> -->

        <!-- <input
          type="text"
          placeholder="Enter color code"
          v-model="$store.state.colorCode"
        /> -->
        <p class="subheading">All products</p>
        <div class="div" v-for="product in increaseCounter" :key="product">
          <p class="body-text">Product name: {{ product.productName }}</p>
          <p class="body-text">Product id {{ product.id }}</p>
        </div>
        <!-- <p class="subheading">test last</p>
        <div class="div" v-for="product in getProducts" :key="product">
          <p class="body-text">Product name: {{ product.productName }}</p>
          <p class="body-text">Product id {{ product.id }}</p>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "HomePage",
  // data() {
  //   return {};
  // },

  computed: {
    ...mapGetters([ 'myGettter']),
  },
  methods: {
    ...mapActions([  "increaseCounter"]),
  },
  async mounted() {
    // this.$store.dispatch("getProductsApi")
 
    this.increaseCounter();
  },
};
</script>

<style>
.div {
  margin-top: 20px;
  border: 1px solid white;
}

.someButton {
  padding: 0px 20px;
  background: #ffffff;
  color: rgb(0, 0, 0);
}
</style>