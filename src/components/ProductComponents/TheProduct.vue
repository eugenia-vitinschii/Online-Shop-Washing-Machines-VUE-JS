<template>
  <div class="product__item">
    <!-- Short info about product -->
    <div class="product__short">
      <!-- Img -->

      <div class="product__img">
        <img :src="img" alt="no img"/>
      </div>
      <div class="product__prices">
        <!-- Wrapper for Discount & Credit prices -->
        <div class="product__promo">
          <!-- Discount  Price -->
          <div class="product__price">
            <div class="product__price-value">
              <p class="small-text price" :class="{ oneprice: hidden }">
                {{ price }} lei
              </p>
              <p class="body-text red" :class="{ hidden: hidden }">
                <span class="bold">{{ newPrice }} lei</span>
              </p>
            </div>
            <div class="product__price-value">
              <p class="small-text" :class="{ hidden: hidden }">
                Reducere <span class="bold">{{ discount }}%</span>
              </p>
              <p class="small-text" :class="{ hidden: hidden }">
                Economie <span class="bold">{{ economie }}lei </span>
              </p>
            </div>
          </div>
        </div>
        <!-- Price credit  -->
        <div class="product__credit">
          <the-button v-for="tab in tabs" :key="tab" @click="currentTab = tab">
            {{ credits }}
          </the-button>
          <component :is="currentTab" />
        </div>
      </div>
    </div>
    <div class="product__decription">
      <p class="subheading"></p>
      <table>
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
 
 <script>
import TheButton from "../UI/UiElements/TheButton.vue";
import CreditPayment from "./CreditPayment.vue";
import InstallmentPayment from "./InstallmentPayment.vue";
export default {
  components: { TheButton, CreditPayment, InstallmentPayment },
  name: "TheProduct",

  // provide(){
  //   return {
  //     price: this.getPrice(),
  //     priceArr:this.getPricet(),
  //   }
  // },
  data() {
    return {
      credits: {
        credit: 'credit',
        avans:' avans'
      },
      hidden: false,
      currentTab: "",
      tabs: ["InstallmentPayment", "CreditPayment"],
    };
  },

  props: {
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
  },
  methods: {
    //   getPrice(){
    //     const price =  Number(this.price)
    //  return price
    //   },
    //   getPricet(){
    //     const price = Number(this.newPrice)
    //  return price
    //   },
  },
};
</script>
 
 <style lang="scss">
.product {
  background: #ffffff;
  &__item {
  }
  &__short {
    display: flex;
    justify-content: space-around;
  }
  &__img {
  }
  &__prices {
  }
  &__promo {
    width: 600px;
  }
  &-short-promo {
  }
  &__decription {
  }
}
</style>