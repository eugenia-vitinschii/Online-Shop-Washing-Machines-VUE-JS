<template>
 <payment-component/>
  <table>
        <tr>
          <th>Termen (luni)</th>
          <th>Avans (lei)</th>
          <th>Plata lunara</th>
          <th>Total (lei) </th>
        </tr>

  </table>

</template>

<script>
import PaymentComponent from './PaymentComponent.vue';

 
export default {
  components: {PaymentComponent   },
   name: "InstallmentPayment",
 
 
  data() {
    return {
   
    };
  },
  methods:{
 
  }
 
}
</script>

<style>

</style>