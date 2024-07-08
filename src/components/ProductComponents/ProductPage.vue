<template>
  <div class="product">
    <div class="container">
      <div class="product__wrapper">
 <p>Full</p>

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
          :newPrice="newPrice()"
          :economie="eco()"
          :monthlyPayment="products.price"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

import TheProduct from './TheProduct.vue';
export default {
  components: { TheProduct },
  name: "ProductPage",
  data() {
    return {
      products: {
        id: '',
        productCode: '',
        img: '',
        productName: '',
        price: '',
        discount: '',
        brand: '',
        waterConsumption: '',
        energyEfficiencyClass: '',
        type:'',
        spinSpeed:'',
        loadCapacity: '',
        noiseLevelCentrifugation: '',
        noiseLevelWashing: '',
        typeControl: '',
        numberOfPrograms: '',
        weightInPackage: '',
        depth: '',
        weight: '',
        color:'',
        countryOfAssembly:'',
        guarantee: '',
      },
    };
  },
  provide() {
    return {

    
    };
  },
 
  methods: {

  async Createuyuy() {
    const product = await axios.get(
      "http://localhost:3000/products/" + this.$route.params.id
    );
    this.products = product.data;
  },

    eco() {
      let newPrice =
        this.products.price -
        (this.products.price -
          (this.products.price * this.products.discount) / 100);
      return newPrice;
    },
    newPrice() {
      let eco = 
        this.products.price -
        (this.products.price * this.products.discount) / 100;

      return eco;
    }
  },
mounted(){
  this.Createuyuy()
}

 
};
</script>

<style>
.iii {
  color: white;
  font-size: 30px;
}
</style>