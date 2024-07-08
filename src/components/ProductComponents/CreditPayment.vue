<template>



<button @click="incriment">+</button>
   <table>
        <tr>
          <th>Termen luni</th>
          <th>Avans</th>
          <th>PLata lunara</th>
          <th>Total</th>
        </tr>
        <tr>
          <td>3</td>
          <td class="small-text">0</td>
          <td class="small-text">plataLunara</td>
          <td class="small-text">total</td>
        </tr>
        <tr>
          <td>6</td>
          <td class="small-text">0</td>
          <td class="small-text">plataLunara</td>
          <td class="small-text">total</td>
        </tr>
  </table>
 </template>
 
 <script>


 export default {
    name: "CreditPayment",
    inject:[ 'price', 'priceArr'],
   data() {
     return {
      count: 0
     };
   },
 props:{
 },
 methods:{

}
 }
 </script>
 
 <style>
 
 </style>