<template>
  <div class="add">
    <div class="add__title">
      <p class="heading">Adauga produs nou: {{products.productName}}</p>
    </div>
    <div class="add__content">
      <form action="" class="add__form">
        <p class="subheading">Date generale</p>
        <the-input
          :label="'Introduceți id'"
          :placeholder="'Introduceți id'"
          v-model:value="products.id"
        />
        <the-input
          :label="'Introduceți COD'"
          :placeholder="'DMB383292PP'"
          v-model:value="products.productCode"
        />
        <the-input
          :label="'Introduceți url pentru imagine'"
          :placeholder="'//http'"
          v-model:value="products.img"
        />
        <the-input
          :label="'Introduceți denumirea pentru produs'"
          :placeholder="'Mașină de spălat frontală Indesit'"
          v-model:value="products.productName"
        />
        <the-input
          :label="'Introduceți prețul produsului'"
          :placeholder="'4999'"
          v-model:value="products.price"
        />
        <the-input
          :label="'Introduceți procentul de reducere ( fără %)'"
          :placeholder="'17'"
          v-model:value="products.discount"
        />
        <p class="subheading">Informația despre produs</p>
        <the-input
          :label="'Introduceți denumirea brandului pentru produs'"
          :placeholder="'Indesit'"
          v-model:value="products.brand"
        />
        <the-input
          :label="'Consum de apă în program, l/ciclu'"
          :placeholder="'20'"
          v-model:value="products.waterConsumption"
        />
        <the-input
          :label="'Clasa de eficienţă energetică'"
          :placeholder="'A++ / E (EU standard)'"
          v-model:value="products.energyEfficiencyClass"
        />
        <the-input
          :label="'Tip mașină de spălat'"
          :placeholder="'cu încărcare frontală'"
          v-model:value="products.type"
        />
        <the-input
          :label="'Viteza maximă de centrifugare, rpm'"
          :placeholder="'1000'"
          v-model:value="products.spinSpeed"
        />
        <the-input
          :label="'Capacitate de încărcare, kg'"
          :placeholder="'5'"
          v-model:value="products.loadCapacity"
        />
        <p class="subheading">Caracteristici</p>
        <the-input
          :label="'Nivel de zgomot pentru centrifugare, dB'"
          :placeholder="'76'"
          v-model:value="products.noiseLevelCentrifugation"
        />
        <the-input
          :label="'Diapazonul nivelului de zgomot la spălare, dB'"
          :placeholder="'56-60'"
          v-model:value="products.noiseLevelWashing"
        />
        <the-input
          :label="'Tip control'"
          :placeholder="'electronic'"
          v-model:value="products.typeControl"
        />
        <the-input
          :label="'Numărul de programe'"
          :placeholder="'16'"
          v-model:value="products.numberOfPrograms"
        />
        <p class="subheading">Dimensiuni</p>
        <the-input
          :label="'Greutate în ambalaj, kg'"
          :placeholder="'63'"
          v-model:value="products.weightInPackage"
        />
        <the-input
          :label="'Adâncime, cm'"
          :placeholder="'43'"
          v-model:value="products.depth"
        />
        <the-input
          :label="'Greutate, kg'"
          :placeholder="'61'"
          v-model:value="products.weight"
        />
        <p class="subheading">Informaţii generale</p>
        <the-input
          :label="'Culoare'"
          :placeholder="' alb'"
          v-model:value="products.color"
        />
        <the-input
          :label="'Ţara de asamblare'"
          :placeholder="'Polonia'"
          v-model:value="products.countryOfAssembly"
        />
        <the-input
          :label="'Garanţie, luni'"
          :placeholder="'36'"
          v-model:value="products.guarantee"
        />
        <the-button @click="getProduct()"> Salveaza </the-button>
        <the-button @click="goBack()">Acasa</the-button>
 
      </form>
    </div>
  </div>
  <div class="message" v-show="message">
    <p class="message__text">Product has been added</p>
  </div>
</template>
 
 <script>
import axios from "axios";

import TheInput from "../UI/FormElements/TheInput.vue";
import TheButton from "../UI/UiElements/TheButton.vue";
export default {
  components: { TheInput, TheButton },
  name: "AddProduct",
  data() {
    return {
      message: false,
      products: {
        id: "",
        productCode: "",
        img: "",
        productName: "",
        price: "",
        discount: "",
        brand: "",
        waterConsumption: "",
        energyEfficiencyClass: "",
        type: "",
        spinSpeed: "",
        loadCapacity: "",
        noiseLevelCentrifugation: "",
        noiseLevelWashing: "",
        typeControl: "",
        numberOfPrograms: "",
        weightInPackage: "",
        depth: "",
        weight: "",
        color: "",
        countryOfAssembly: "",
        guarantee: "",
      },
    };
  },
  methods: {
    goBack(){
      this.$router.push({ name: "AdminPanel" });
    },
    async getProduct() {
      let result = await axios.post("http://localhost:3000/products", {
        id: this.products.id,
        productCode: this.products.productCode,
        img: this.products.img,
        productName: this.products.productName,
        price: this.products.price,
        discount: this.products.discount,
        brand: this.products.brand,
        waterConsumption: this.products.waterConsumption,
        energyEfficiencyClass: this.products.energyEfficiencyClass,
        type: this.products.type,
        spinSpeed: this.products.spinSpeed,
        loadCapacity: this.products.loadCapacity,
        noiseLevelCentrifugation: this.products.noiseLevelCentrifugation,
        noiseLevelWashing: this.products.noiseLevelWashing,
        typeControl: this.products.typeControl,
        numberOfPrograms: this.products.numberOfPrograms,
        weightInPackage: this.products.weightInPackage,
        depth: this.products.depth,
        weight: this.products.weight,
        color: this.products.color,
        countryOfAssembly: this.products.countryOfAssembly,
        guarantee: this.products.guarantee,
      });
      if (result.status == 200) {
         this.$router.push({ name: "HomePage" });
       }
    },
  },
};
</script>
 
<style lang="scss">


.add__form {
 
  width: 650px;
  background: #ffffff;
  margin: 20px 10px;
  padding: 20px 20px;
}
.message {
  width: 100%;
  height:  100%;
  background: green;
bottom: 0;
 left: 0;
  position: absolute;
 &__text {
    padding: 10px 5px;
    color: white;
    text-align: center;
    margin-top: 30%;
  }
}
</style>