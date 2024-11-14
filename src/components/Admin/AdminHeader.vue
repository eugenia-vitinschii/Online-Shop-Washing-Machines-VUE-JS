<template>
   <div class="panel">
     <div class="container">
       <div class="panel__wrapper">
         <div class="panel__nav">
           <div class="panel__buttons">
             <router-link class="custom__button" to="/add-product"> Add Product </router-link>
             <router-link class="custom__button" to="/edit-product"> Edit Product </router-link>
           </div>
            <div class="panel__user">
             <div class="panel__user-img">
               <img src="@/assets/img/user.jpg" alt="The user" />
             </div>
             <p>Admin</p>
           </div>
         </div>
 
       </div>
     </div>
   </div>
 </template>
  
  <script setup>
 import { defineOptions } from 'vue';
 defineOptions({
  name: "AdminPanel",
 })
 
 </script>
  
 