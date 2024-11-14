<template>
  <p class="body-text">Cumpără {{ products.productName }} în rate: </p>
  <p class="body-text-red">Dobândă: 0% </p>
  <table class="credit__table">
    <tr>
      <th>Termen luni</th>
      <th>Avans</th>
      <th>Lunar</th>
      <th>Total</th>
    </tr>
    <tr v-for="item in months" :key="item.id">
      <td>{{ item.month }}</td>
      <td>{{installmentPay(item.avans)}}</td>
      <td class="small-text">{{ getMonthlyPrice(item.month) }} lei/lunar</td>
      <td class="small-text"> {{ products.price }} lei</td>
    </tr>
  </table>
</template>


<script setup>
//vue
import { defineOptions, onMounted } from "vue";
import { useRoute } from "vue-router";
//store
import { useProductStore } from "@/stores/product";
import { storeToRefs } from "pinia";

defineOptions({
  name: "InstallmentPayment",
});

const store = useProductStore();

const { getProducts } = store;

const { products } = storeToRefs(store);

const route = useRoute();

const id = route.params.id;

const months = [
{ id: 2, month: 2, avans: 0 },
  { id: 3, month: 3,avans: 0},
  { id: 6, month: 6, avans: 30, },
  { id: 9, month: 9,avans:40},
  { id: 10, month: 10,avans:50 },

];

let price = products.value.price;

let installmentPrice; 

function installmentPay(avans){
  if(avans == 0){
    return 0
  }
  installmentPrice = Math.round(+price - (price * avans) / 100);
  return installmentPrice;
}




let monhlyPrice;
function getMonthlyPrice(month) {
  monhlyPrice = Math.round((+products.value.price -installmentPrice) / month);
  return monhlyPrice;
}
onMounted(() => {
  getProducts(id);
});
</script>