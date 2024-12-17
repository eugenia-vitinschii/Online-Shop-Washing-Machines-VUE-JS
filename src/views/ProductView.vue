<template>
<!-- product view -->
  <div class="product">
    <div class="container">
      <div class="product__wrapper">
        <!-- product component -->
        <the-product
          :id="products.id"
          :productCode="products.productCode"
          :productName="products.productName"
          :productType="products.productType"
          :img="products.img"
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
          :hidden="showPrices(products)"
          :onePrice="showOnePrice(products)"
          :newPrice="newPrice(products.price, products.discount)"
          :economie="saveMoney( products.price, products.discount)"
          :monthlyPrice="monthlyPrice(products.price)"
        />
      </div>
    </div>
  </div>
</template>

 

<script setup>
//components
import TheProduct from "@/sections/TheProduct.vue";
//vue
import { defineOptions } from "vue";
import { onMounted  } from "vue";
import { useRoute } from "vue-router";
//store
import { useProductStore } from "@/stores/product";
import { storeToRefs } from "pinia";

defineOptions({
  name: "ProductView",
});
 
//pinia
const store = useProductStore();
const route = useRoute();
const id = route.params.id
const { products } = storeToRefs(store);
const { getProducts, saveMoney, newPrice , monthlyPrice } = store;


//functions
function showPrices(products){
    if(Number(products.discount)<  1 || Number(products.discount) > 99 ){
    return  true
  }
}
function showOnePrice(products){
    if(Number(products.discount)<  1 || Number(products.discount) > 99 ){
    return  true
  }
}
 
//hooks
onMounted(() => {
  getProducts(id);
});

</script>