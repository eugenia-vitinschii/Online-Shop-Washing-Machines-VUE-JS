<template>
  <admin-header />

  <div class="add">
    <div class="container">
      <div class="add__title">
        <p class="heading">Adauga produs nou:{{ postProducts.productName }}</p>
      </div>
      <div class="add__content">
        <form action="" class="add__form">
          <!-- select product type -->
          <select
            name="productType"
            id="productType"
            v-model="postProducts.productType"
          >
            <option value="Mășină de splălat rufe">
              Mășină de splălat rufe
            </option>
            <option value="Frigider">Firgider</option>
            <option value="Mășină de splălat vase">
              Mășină de splălat vase
            </option>
            <option value="Aragaz">Aragaz</option>
            <option value="Cuptor cu microunde">Cuptor cu microunde</option>
          </select>
          <p class="heading">{{ postProducts.productType }}</p>
          <!-- general caracteristic for all type of items -->
          <div class="add__items" v-show="postProducts.productType != ''">
            <p class="heading">Date generale</p>
             <!-- characteristics about product -->
            <div class="add__items-info">
              <the-input
                :label="'Introduceți id'"
                :placeholder="'Introduceți id'"
                v-model.trim:value="postProducts.id"
              />
              <the-input
                :label="'Introduceți COD'"
                :placeholder="'DMB383292PP'"
                v-model:value.trim="postProducts.general.productCode"
              />
              <the-input
                :label="'Introduceți url pentru imagine'"
                :placeholder="'//http'"
                v-model:value.trim="postProducts.general.img"
              />
              <the-input
                :label="'Introduceți denumirea pentru produs'"
                :placeholder="'Mașină de spălat frontală Indesit'"
                v-model:value.trim="postProducts.general.productName"
              />
              <the-input
                :label="'Introduceți prețul produsului'"
                :placeholder="'4999'"
                v-model:value.trim="postProducts.general.price"
              />
              <the-input
                :label="'Introduceți procentul de reducere ( fără %)'"
                :placeholder="'17'"
                v-model:value.trim="postProducts.general.discount"
              />
              <the-input
                :label="'Introduceți denumirea brandului pentru produs'"
                :placeholder="'Indesit'"
                v-model:value.trim="postProducts.general.brand"
              />
            </div>
             <p class="heading">Informația despre produs </p>
            <!-- characteristics for 'Mășină de splălat rufe' -->
            <div
              class="add__items-mds"
              v-if="postProducts.productType === 'Mășină de splălat rufe'"
            >
              <the-input
                :label="'Consum de apă în program, l/ciclu'"
                :placeholder="'20'"
                v-model:value.trim="postProducts.washer.waterConsumption"
              />
              <the-input
                :label="'Clasa de eficienţă energetică'"
                :placeholder="'A++ / E (EU standard)'"
                v-model:value.trim="postProducts.washer.energyEfficiencyClass"
              />
              <the-input
                :label="'Tip mașină de spălat'"
                :placeholder="'cu încărcare frontală'"
                v-model:value.trim="postProducts.washer.type"
              />
              <the-input
                :label="'Viteza maximă de centrifugare, rpm'"
                :placeholder="'1000'"
                v-model:value.trim="postProducts.washer.spinSpeed"
              />
              <the-input
                :label="'Capacitate de încărcare, kg'"
                :placeholder="'5'"
                v-model:value.trim="postProducts.washer.loadCapacity"
              />
              <p class="heading">Caracteristici</p>
              <the-input
                :label="'Nivel de zgomot pentru centrifugare, dB'"
                :placeholder="'76'"
                v-model:value.trim="
                  postProducts.washer.noiseLevelCentrifugation
                "
              />
              <the-input
                :label="'Diapazonul nivelului de zgomot la spălare, dB'"
                :placeholder="'56-60'"
                v-model:value.trim="postProducts.washer.noiseLevelWashing"
              />
              <the-input
                :label="'Tip control'"
                :placeholder="'electronic'"
                v-model:value.trim="postProducts.washer.typeControl"
              />
              <the-input
                :label="'Numărul de programe'"
                :placeholder="'16'"
                v-model:value.trim="postProducts.washer.numberOfPrograms"
              />
            </div>
            <div class="add__items-refr" v-if="postProducts.productType === 'Frigider'">
              <the-input
                :label="'refrigerator.tdata'"
                :placeholder="' alb'"
                v-model:value.trim="postProducts.refrigerator.data"
              />

<the-input
                :label="'refrigerator.test'"
                :placeholder="' alb'"
                v-model:value.trim="postProducts.refrigerator.test"
              />
 
            </div>
            <!-- characteristics about guarantee -->
            <div class="add__items-general">
              <p class="heading">Informaţii generale</p>
              <the-input
                :label="'Culoare'"
                :placeholder="' alb'"
                v-model:value.trim="postProducts.guarantee.color"
              />
              <the-input
                :label="'Ţara de asamblare'"
                :placeholder="'Polonia'"
                v-model:value.trim="postProducts.guarantee.countryOfAssembly"
              />
              <the-input
                :label="'Garanţie, luni'"
                :placeholder="'36'"
                v-model:value.trim="postProducts.guarantee.guarantee"
              />
            </div>
            <!-- characteristics about sizes -->
            <div class="add__items-size">
              <p class="heading">Dimensiuni și greutate</p>
              <the-input
                :label="'Înălţime, cm'"
                :placeholder="'263'"
                v-model:value.trim="postProducts.size.height"
              />
              <the-input
                :label="'Lăţime, cm'"
                :placeholder="'263'"
                v-model:value.trim="postProducts.size.width"
              />
              <the-input
                :label="'Adâncime, cm'"
                :placeholder="'263'"
                v-model:value.trim="postProducts.size.depth"
              />
              <the-input
                :label="'Greutate în ambalaj, kg'"
                :placeholder="'263'"
                v-model:value.trim="postProducts.size.weight"
              />
            </div>
          </div>
          <the-button class="green__button" @click.prevent="addPostData()">
            Salvează
          </the-button>
          <the-button class="red__button" @click="goBack()">Acasă</the-button>
        </form>
      </div>
    </div>
  </div>
</template>
 
  

<script setup>
//vue
import { defineOptions, ref } from "vue";
// componets
import TheInput from "@/components/TheInput.vue";
import TheButton from "@/components/TheButton.vue";
import AdminHeader from "@/components/Admin/AdminHeader.vue";

// store
import { useProductStore } from "@/stores/product";

defineOptions({
  name: "AddProductView",
});

const store = useProductStore();
const { createProduct } = store;

const postProducts = ref({
  id: "",
  productType: "",
  size: {
    height: "",
    width: "",
    depth: "",
    weight: "",
  },
  general: {
    productCode: "",
    img: "",
    productName: "",
    price: "",
    discount: "",
    brand: "",
  },
  guarantee: {
    color: "",
    countryOfAssembly: "",
    guarantee: "",
  },
  washer: {
    waterConsumption: "",
    energyEfficiencyClass: "",
    type: "",
    spinSpeed: "",
    loadCapacity: "",
    noiseLevelCentrifugation: "",
    noiseLevelWashing: "",
    typeControl: "",
    numberOfPrograms: "",
  },
  refrigerator:{
    data: '',
    test: ''
  }
});

const addPostData = () => {
  createProduct(postProducts.value);
  postProducts.value.id = "";
  (postProducts.value.size = {
    height: "",
    width: "",
    depth: "",
    weight: "",
  }),
    (postProducts.value.general = {
      productCode: "",
      img: "",
      productName: "",
      price: "",
      discount: "",
      brand: "",
    }),
    (postProducts.value.guarantee = {
      color: "",
      countryOfAssembly: "",
      guarantee: "",
    }),
    (postProducts.value.washer = {
      waterConsumption: "",
      energyEfficiencyClass: "",
      type: "",
      spinSpeed: "",
      loadCapacity: "",
      noiseLevelCentrifugation: "",
      noiseLevelWashing: "",
      typeControl: "",
      numberOfPrograms: "",
    });
     (postProducts.value.refrigerator={
    data: '',
    test: ''
  });
};
</script>

