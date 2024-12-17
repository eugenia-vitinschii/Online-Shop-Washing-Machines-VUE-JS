<template>
  <p class="heading">Brand page {{brand}}</p>

  <div class="brand">
    <div class="container">
      <div class="brand__wrapper">
        <div class="brand__items item__wrapper">
          <the-item 
           v-for="product in getItemsByBrand(brand)"
            :key="product.id"
            :id="product.id"
            :brand="product.brand"
            :img="product.img"
            :productName="product.productName"
            :productType="product.productType"
            :price="product.price"
            :discount="product.discount"
            :labfel="product.label"
            :newPrice="newPrice(product.price, product.discount)"
            :economie="saveMoney(product.price, product.discount)"
            :monthlyPrice="monthlyPrice(product.price)"
            :hidden="showPrices(product.discount)"
            :onePrice="showOnePrice(product.discount)"
            :dicountLabel="dicountLabel(product.discount)"
            :hugeSaleLabel="hugeSaleLabel(product.discount)"
            @addToCard="addProductCard(product)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineOptions, onMounted } from "vue";
import { useRoute } from "vue-router";

//components
import TheItem from "@/sections/TheItem.vue"

//pinia
import { useProductStore } from "@/stores/product"
import { storeToRefs } from "pinia";


defineOptions({
  name: "BrandView"
});


const store = useProductStore();

const { getItemsByBrand } = storeToRefs(store);
const route = useRoute();
const brand = route.params.brand;

const {
  fetchProducts,
  addToCart,
  saveMoney,
  newPrice,
  monthlyPrice,
  dicountLabel,
  hugeSaleLabel,
  showPrices,
  showOnePrice,
} = store;
// add product to cart
function addProductCard(product) {
  addToCart({
    id: product.id,
    productCode: product.productCode,
    productName: product.productName,
    price: product.price,
    discount: product.discount,
    img: product.img,
    brand: product.brand,
  });
}


//hooks
onMounted(() => {
  fetchProducts();
});
</script>

<style>

</style>