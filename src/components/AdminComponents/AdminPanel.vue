<template>
  <div class="panel">
    <div class="container">
      <div class="panel__wrapper">
        <div class="panel__nav">
         
          <div class="panel__buttons">
            <button
            class="custom__button"
              v-for="button in buttons"
              :key="button"
              @click="currentButton = button"
            >
              {{ button }}
            </button>
          </div>


           <div class="panel__user">
            <div class="panel__user-img">
              <img src="@/assets/img/user.jpg" alt="The user" />
            </div>
            <p>HI User7777!</p>
          </div>
        </div>

        
        <div class="panel__content">
          <KeepAlive>
            <component :is="currentButton"></component>
        </KeepAlive>
        </div>
      </div>
    </div>
  </div>
</template>
 
 <script>

import AddProduct from './AddProduct.vue';
import EditProduct from './EditProduct.vue';


export default {
  name: "AdminPanel",

  components: {AddProduct,  EditProduct},
  data() {
    return {
      currentButton: "",
      buttons: ["AddProduct", "EditProduct"],
    } 
  } 
};
</script>
 
 <style lang="scss">

.panel {
&__wrapper {
}
&__nav {

  display: flex;
  justify-content: space-between;
  align-items: center;
  background: $violet;
  padding: 10px;
}
&__buttons {
}
 
&__user {

}
&__user-img {
  width: 30px;
  height: 30px;
  margin-bottom: 5px;
  img{
    width: 100%;
    border-radius: 50%;
    border: 1px solid $dark-green;
  }
}
&__content {
}

}


</style>