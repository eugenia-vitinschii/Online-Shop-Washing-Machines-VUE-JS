<template>
 <p>Products id{{ getProducts}}</p>

        <!-- <tr>
          <td class="small-text">{{ month }}</td>
          <td class="small-text">{{prepayment}}</td>
          <td class="small-text"></td>
          <td class="small-text">{{paymentAmount}}</td>
        </tr> -->

</template>

<script>


import { mapGetters } from 'vuex';
export default {
name:'PaymentComponent',
inject:['monthlyPayment','price'],
data(){
return{
   count: 0
}
},
computed: {
    ...mapGetters([
      "getProducts",
    ]),
  },
  async mounted(){
    this.$store.dispatch("getProductsApi")
  }

}
</script>

<style>

</style>