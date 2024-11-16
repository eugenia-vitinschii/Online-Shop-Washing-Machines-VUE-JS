<template>
  <swiper
    :pagination="{
      type: 'fraction',
    }"
    :navigation="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide>
      <router-link to="/product/A9Paomr">
        <img src="@/assets/img/swiper-home1.jpg" alt="#" />
      </router-link>
    </swiper-slide>
    <swiper-slide>
      <router-link to="/product/Nw8c8Gp">
        <img src="@/assets/img/swiper-home2.jpg" alt="#" />
      </router-link>
    </swiper-slide>
    <swiper-slide>
      <router-link to="/product/GWg3ACA">
        <img src="@/assets/img/swiper-home3.jpg" alt="#" />
      </router-link>
    </swiper-slide>
    <swiper-slide>
      <router-link to="/items">
        <img src="@/assets/img/swiper-home4.jpg" alt="#" />
      </router-link>
    </swiper-slide>
  </swiper>
</template>

 

  <script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination, Navigation],
    };
  },
};
</script>