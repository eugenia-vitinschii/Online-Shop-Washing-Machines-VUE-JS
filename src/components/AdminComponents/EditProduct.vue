<template>
  <p class="heading">Edit product</p>
  <table class="edit">
    <tr>
      <th>COD</th>
      <th>Name</th>
      <th>Pret</th>
      <th>Reducere</th>
      <th>Delete</th>
      <th>Update</th>
    </tr>
    <tr v-for="product in getProducts" :key="product.id">
      <td>{{ product.productCode }}</td>
      <td>{{ product.productName }}</td>
      <td>{{ product.price }}</td>
      <td>{{ product.discount }}</td>
      <td>
        <button class="red__button" @click="deleteProduct(product.id)">
          Șterge
        </button>
      </td>
      <td>
        <router-link class="green__button" :to="'/update/' + product.id">
          Redactează
        </router-link>
      </td>
    </tr>
  </table>
  <div class="message" v-show="message">
    <p class="message__text">Product has been delete</p>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
 

export default {
  name: "EditProduct",
  components: {},

  data() {
    return {
      message: false,
      products: {
        id: "",
        productCode: "",
        productName: "",
        price: "",
        discount: "",
      },
    };
  },

  computed: {
    ...mapGetters(["getProducts"]),
  },
  methods: {
    // async deleteProduct(id) {
    //   let result = await axios.delete("http://localhost:3000/products/" + id);
    //   if (result.status == 200) {
    //     this.message = true;
    //     setTimeout(() => {
    //       this.message = false;
    //     }, 1000);
    //     // this.$router.push({ name: "AdminPanel" });
    //     this.loadData();
    //   }
    // },
    ...mapActions(["getProductsApi"]),
  },
  async mounted() {
    // this.$store.dispatch("getProductsApi")
    this.getProductsApi();
  },
};
</script>

<style>
.edit {
  background: #606060;
  padding: 30px;
}

th {
  text-align: left;
  font-weight: bold;

  padding: 15px 5px;
}
td {
  text-align: center;
  padding: 15px 5px;
}
</style>