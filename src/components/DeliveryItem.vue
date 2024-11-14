.<template>
  <div class="delivery__item">
    <div class="delivery__img">
      <img :src="img" alt="Not found" />
    </div>
    <div class="delivery__text">
      <p class="subheading">{{ name }}</p>
      <p class="small-text">{{ body }}</p>
    </div>
  </div>
</template>

<script setup>
import { defineOptions } from "vue";
import { defineProps } from "vue";

defineOptions({
  name: "DeliveryItem",
});

defineProps({
  img: {
    type: String,
  },
  id: {
    type: String,
  },
  name: {
    type: String,
  },
  body: {
    type: String,
  },
});
</script>