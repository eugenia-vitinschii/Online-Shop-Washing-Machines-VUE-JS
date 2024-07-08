<template>
  <!--Product item for products page -->
  <div class="item__item">
    <div class="item__top">
      <div class="item__logo">
        <p class="brand">{{ brand }}</p>
      </div>
      <!-- labels for dicsount products -->
      <div class="item_labels">
           <div class="item__label" :class="{ visible: hugeSaleLabel }">
        <img src="@/assets/img/sale.jpg" alt="oops!" />
      </div>
      <div class="item__label" :class="{ visible: dicountLabel }">
        <img src="@/assets/img/discount.jpg" alt="oops!" />
      </div>
      </div>
   
    </div>
    <!--Img and title links -->
    <div class="item__links">
      <router-link :to="'/product/' + id">
        <div class="item__img">
          <img :src="img" alt="no img" />
        </div>
      </router-link>
      <router-link :to="'/product/' + id">
        <p class="body-text">Mățină de spălat {{ productName }}</p>
      </router-link>
    </div>
    <!-- Prices blocks -->
    <div class="item__price">
      <div class="item__price-value">
        <p class="small-text price" :class="{ oneprice: visible }">
          {{ price }} lei
        </p>
        <p class="body-text red" :class="{ hidden: hidden }">
          <span class="bold">{{ newPrice }} lei</span>
        </p>
      </div>
      <div class="item__price-value">
        <p class="small-text" :class="{ hidden: hidden }">
          Reducere <span class="bold">{{ discount }}%</span>
        </p>
        <p class="small-text" :class="{ hidden: hidden }">
          Economie <span class="bold">{{ economie }}lei </span>
        </p>
      </div>
    </div>
    <!-- Add to card & Favorite -->
    <div class="item__buttons">
      <button @click="$emit('addToCard')">
        <svg id="card" class="" viewBox="0 0 576 512">
          <path
            d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"
          />
        </svg>
      </button>
      <button
        class="heart"
        @click="$emit('addToFavorite')"
        :class="{ redHeart: redHeart }"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          id="heart"
          width="30px"
          height="30px"
          background="#fff"
        >
          <path
            d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z"
          ></path>
        </svg>
      </button>
    </div>
  </div>
</template>


<script>
export default {
  components: {},
  name: "TheItem",
  // data() {
  //   return {};
  // },
  props: {
    id: {
      type: String,
    },
    img: {
      type: String,
    },
    productName: {
      type: String,
    },
    price: {
      type: String,
    },
    brand: {
      type: String,
    },
    labelImg: {
      type: String,
    },
    discount: {
      type: String,
    },
    label: {
      type: String,
    },
    economie: {
      type: String,
    },
    newPrice: {
      type: String,
    },
    hidden: {
      type: Boolean,
      default: false,
    },
    hugeSaleLabel: {
      type: Boolean,
      default: false,
    },
    dicountLabel: {
      type: Boolean,
      default: false,
    },
    redHeart: {
      type: Boolean,
      default: false,
    },
    linkOpen: {
      type: Function,
    },
  },
};
</script>


<style lang="scss">
.item {
  &__item{
    background: $white;
    border: 2px solid #ffffff;
    box-shadow: 2px 2px 10px #f5f4f7;
  }
  &__item,
  .spaces {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 210px;
    max-width: 250px;
    min-width: 150px;
    flex: 1 1 200px;

    border-radius: 5px;

    margin: 10px;
  }
  &__top {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 10px 10px;
    align-items: center;
    height: 50px;
  }
  &__logo {
    height: 25px;
    img {
      height: 100%;
    }
  }
  &__labels{
   background: #000;
  }
  &__label {
    height: 35px;
    display: none;
    img {
      border-radius: 50%;
      height: 100%;
    }
  }

  &__label-txt {
    text-align: center;
    color: red;
  }
  &__links {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__img {
    align-self: center;
    width: 150px;
    overflow: hidden;

    img {
      width: 100%;
    }
  }
  &__price {
    display: flex;
    justify-content: space-between;
  }
  &__price-value {
  }
  &__buttons {
  }
}

.price {
  text-decoration: line-through;
  color: $light-green;
}

.new-price {
  font-size: 20px;
  color: rgb(189, 30, 30);
}
.new-price,
.discount,
.saving {
}
.discount {
}
.saving {
}
.bold {
  font-weight: bold;
}

.visible {
  display: block;
}
.brand{
  color: blue;
}
.oneprice {
  text-decoration: none;
  font-size: 20px;
  font-weight: bold;
}
button {
  background: $white;
}
#card {
  fill: $green;
  height: 30px;
  width: 30px;
}
#card:hover {
  fill: blue;
  height: 30px;
  width: 30px;
}
#heart {
  fill: rgb(154, 5, 5);
}
.getFavorite {
  fill: red;
}
.heart {
  background: white;
}
.heart:hover {
  background: rgb(61, 59, 59);
}
.spaces {
  height: 1px;
  padding: 1px;
  background: transparent;
  border: 0px solid transparent;
}
</style>