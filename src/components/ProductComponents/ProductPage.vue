<template>
  <div class="product">
    <div class="container">
      <div class="product__wrapper">
        <the-product
          :id="products.id"
          :productCode="products.productCode"
          :img="products.img"
          :productName="products.productName"
          :price="products.price"
          :discount="products.discount"
          :brand="products.brand"
          :waterConsumption="products.waterConsumption"
          :energyEfficiencyClass="products.energyEfficiencyClass"
          :type="products.type"
          :spinSpeed="products.spinSpeed"
          :loadCapacity="products.loadCapacity"
          :noiseLevelCentrifugation="products.noiseLevelCentrifugation"
          :noiseLevelWashing="products.noiseLevelWashing"
          :typeControl="products.typeControl"
          :numberOfPrograms="products.numberOfPrograms"
          :weightInPackage="products.weightInPackage"
          :depth="products.depth"
          :weight="products.weight"
          :color="products.color"
          :countryOfAssembly="products.countryOfAssembly"
          :hidden=showPrices(products)
          :onePrice=showOnePrice(products)
 
          :newPrice="newPrice(products.price, products.discount)"
          :economie="saveMoney( products.price, products.discount)"
          :monthlyPrice="monthlyPrice(products.price)"
        />
      </div>
    </div>
  </div>
</template>

 

<script setup>
import { defineOptions } from "vue";
import TheProduct from "./TheProduct.vue";
import { useProductStore } from "@/stores/product";
import { storeToRefs } from "pinia";
import { onMounted  } from "vue";
import { useRoute } from "vue-router";

 

defineOptions({
  name: "ProductPage",
});
 
const store = useProductStore();
const route = useRoute();
const id = route.params.id
const { products } = storeToRefs(store);
const { getProducts, saveMoney, newPrice , monthlyPrice } = store;

function showPrices(products){
    if(products.discount<  1 || products.discount > 99 ){
    return  true
  }
}
function showOnePrice(products){
    if(products.discount<  1 || products.discount > 99 ){
    return  true
  }
}
 
 
 
 

onMounted(() => {
  getProducts(id);
});



</script>