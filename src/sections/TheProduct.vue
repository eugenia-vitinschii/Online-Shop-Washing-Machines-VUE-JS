<template>
  <div class="product__item">
    <!-- Short info about product -->
    <div class="product__short">
      <!-- Img -->
      <div class="product__img">
        <img :src="img" alt="no img" />
      </div>
      <div class="product__prices">
        <!-- Wrapper for Discount & Credit prices -->
        <div class="product__promo">
          <p class="heading"> Mășină de spălat {{productName }}</p>
          <!-- Discount  Price -->
          <div class="product__price">
            <div class="product__price-value">
              <p class="small-text price" :class="{ oneprice: onePrice }">
                Preț {{ price }} lei
              </p>
              <p class="body-text red" :class="{ hidden: hidden }">
              Preț nou {{ newPrice }} lei
              </p>
            </div>
            <div class="product__price-value" :class="{ hidden: hidden }">
              <p class="body-text-red">
                Reducere <span class="bold">{{ discount }}%</span>
              </p>
              <p class="small-text">
                Economie <span class="bold">{{ economie }}lei! </span>
              </p>
            </div>
          </div>
          <div class="product__credit">
            <p class="body-text">
              De la <span class="bold">{{ monthlyPrice }} lei </span> /lunar
            </p>
          </div>
        </div>
        <!-- Price credit  -->
        <div class="product__credit">
          <the-button
            v-for="item in testCredit"
            :key="item"
            :class="['custom__button', { active: currentTab === item.tab }]"
            @click="currentTab = item.tab"
          >
            {{ item.name }}
          </the-button>
          
          <component :is="currentTab" />
        </div>
        <the-delivery/>
      </div>
    </div>
    <div class="product__decription">
      <table class="product__decription-table">
        <tr>
          <th>Informația despre produs</th>
          <th></th>
        </tr>
        <tr>
          <td>Brand</td>
          <td class="small-text">{{ brand }}</td>
        </tr>
        <tr>
          <td>Consum de apă în program, l/ciclu</td>
          <td>{{ waterConsumption }}</td>
        </tr>
        <tr>
          <td>Clasa de eficienţă energetică</td>
          <td>{{ energyEfficiencyClass }}</td>
        </tr>
        <tr>
          <td>Tip mașină de spălat</td>
          <td>{{ type }}</td>
        </tr>
        <tr>
          <td>Viteza maximă de centrifugare, rpm</td>
          <td>{{ spinSpeed }}</td>
        </tr>
        <tr>
          <td>Capacitate de încărcare, kg</td>
          <td>{{ loadCapacity }}</td>
        </tr>
        <tr>
          <th>Caracteristici</th>
          <th></th>
        </tr>
        <tr>
          <td>Nivel de zgomot pentru centrifugare, dB</td>
          <td>{{ noiseLevelCentrifugation }}</td>
        </tr>
        <tr>
          <td>Diapazonul nivelului de zgomot la spălare, dB</td>
          <td>{{ noiseLevelWashing }}</td>
        </tr>
        <tr>
          <td>Tip control</td>
          <td>{{ typeControl }}</td>
        </tr>
        <tr>
          <td>Numărul de programe</td>
          <td>{{ numberOfPrograms }}</td>
        </tr>        
      </table>
      <table class="product__decription-table">
        <tr>
          <th>Dimensiuni</th>
          <th></th>
        </tr>
        <tr>
          <td>Greutate în ambalaj, kg</td>
          <td>{{ weightInPackage }}</td>
        </tr>
        <tr>
          <td>Adâncime, cm</td>
          <td>{{ depth }}</td>
        </tr>
        <tr>
          <td>Greutate, kg</td>
          <td>{{ weight }}</td>
        </tr>
        <tr>
          <th>Informaţii generale</th>
          <th></th>
        </tr>
        <tr>
          <td>Culoare</td>
          <td>{{ color }}</td>
        </tr>
        <tr>
          <td>Ţara de asamblare</td>
          <td>{{ countryOfAssembly }}</td>
        </tr>
        <tr>
          <td>Garanţie, luni</td>
          <td>{{ guarantee }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>
 

<script setup>
//vue
import { defineOptions, defineProps, ref } from "vue";
//components
import TheButton from "../components/TheButton.vue";
import InstallmentPayment from "./InstallmentPayment.vue";
import CreditPayment from "./CreditPayment.vue";
import TheDelivery from "./TheDelivery.vue"


defineOptions({
  name: "TheProduct",
});

const currentTab = ref("InstallmentPayment");

const testCredit = [
  {
    tab: InstallmentPayment,
    name: "În rate",
  },
  {
    tab: CreditPayment,
    name: "Credit",
  },
];

defineProps({
  test:{
    type: String,
  },
  id: {
    type: String,
  },
  productCode: {
    type: String,
  },
  img: {
    type: String,
  },
  productName: {
    type: String,
  },
  price: {
    type: Number,
    default: 0,
  },
  discount: {
    type: Number,
    default: 0,
  },
  brand: {
    type: String,
  },
  waterConsumption: {
    type: String,
  },
  energyEfficiencyClass: {
    type: String,
  },
  type: {
    type: String,
  },
  spinSpeed: {
    type: String,
  },
  loadCapacity: {
    type: String,
  },
  noiseLevelCentrifugation: {
    type: String,
  },
  noiseLevelWashing: {
    type: String,
  },
  typeControl: {
    type: String,
  },
  numberOfPrograms: {
    type: String,
  },
  weightInPackage: {
    type: String,
  },
  depth: {
    type: String,
  },
  weight: {
    type: String,
  },
  color: {
    type: String,
  },
  countryOfAssembly: {
    type: String,
  },
  guarantee: {
    type: String,
  },
  newPrice: {
    type: Number,
  },
  economie: {
    type: Number,
    default: null,
  },
  totalCreditPrice: {
    type: Number,
    default: null,
  },
  hidden: {
    type: Boolean,
    default: false,
  },
  onePrice: {
    type: Boolean,
    default: false,
  },
  monthlyPrice: {
    type: Number,
    default: null,
  }
});
</script>




