<template>
  <div class="item">
    <div class="container">
      <div class="item__wrapper">
        <the-item
          v-for="product in addToCard"
          :key="product.id"
          :id="product.id"
          :brand="product.brand"
          :img="product.img"
          :productName="product.productName"
          :price="product.price"
          :newPrice="newPrice(product)"
          :discount="product.discount"
          :label="product.label"
          :economie="eco(product)"
          :dicountLabel="dicountLabel(product)"
          :hugeSaleLabel="hugeSaleLabel(product)"
        />
        <div class="spaces"></div>
        <div class="spaces"></div>
        <div class="spaces"></div>
        <div class="spaces"></div>
        <div class="spaces"></div>
        <div class="spaces"></div>
        <div class="spaces"></div>
        <div class="spaces"></div>
        <div class="spaces"></div>
        <div class="spaces"></div>
        <div class="spaces"></div>
        <div class="spaces"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import TheItem from "../ProductComponents/TheItem.vue";

export default {
  components: { TheItem },
  name: "ItemsPage",
  data() {
    return {
      number: 40,
      products: [],
      favorite: [],
      card: [],
    };
  },

  methods: {
    ...mapActions(['addToCard']),

    eco(product) {
      let newPrice = Math.floor(
        product.price -
          (product.price - (product.price * product.discount) / 100)
      );
      return newPrice;
    },
    newPrice(product) {
      let eco = Math.floor(
        product.price - (product.price * product.discount) / 100
      );

      return eco;
    },
    dicountLabel(product) {
      let discount = product.discount;
      if (discount < 100 || discount > 10) {
        return true;
      }
    },
    hugeSaleLabel(product) {
      let discount = product.discount;
      if (discount < 0 || discount < 0) {
        return true;
      }
    },
  },

  computed: {
    ...mapGetters(["getCard"]),
  },

  async mounted() {
    // this.$store.dispatch("getProductsApi")
    this.addToCard;
  },
};
</script>

<style lang="scss">
.item__wrapper {
  display: flex;
  flex-wrap: wrap;
}
</style>