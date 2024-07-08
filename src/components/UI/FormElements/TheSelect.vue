<template>
   <div class="input__wrapper">
     <label >{{ label }}</label>
     <input
     type="select"
       :value="value"
       @input="$emit('update:value', $event.target.value)"
       :placeholder="placeholder"
     />
   </div>
 </template>
    
    <script>
 export default {
   name: "TheInput",
   data() {},
   props: {
    value: {
     type: String,
       defaul: "",
     },
     label: {
       type: String,
       default: "",
     },
 
     placeholder:{
       type: String,
       default: "text",
     }
   },
 };
 </script>
 
 
 <style lang="scss">
 
 </style>