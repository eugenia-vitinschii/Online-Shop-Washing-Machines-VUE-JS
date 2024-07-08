<template>
 <p>form product</p>
 <div class="form__wrapper">
   <form action="" class="form__form">
        <p>Informatia pentru card</p>
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
        <p>Informația despre produs</p>
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
        <p>Caracteristici</p>
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
        <p>Dimensiuni</p>
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
        <p>Informaţii generale</p>
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
        <the-button
          @click="getProduct()"
        >
          Salveaza
        </the-button>
      </form>
 </div>

</template>

<script>
export default {
 name: "ProductForm",
 props: {
 
 },
};
</script>

<style lang="scss">
</style>