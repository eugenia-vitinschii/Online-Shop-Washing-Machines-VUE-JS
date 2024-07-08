<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__wrapper">
        <div class="footer__links">
          <ul>
            <li>
              <a href="link">Lorem</a>
            </li>
          </ul>
        </div>
       
        <div class="footer__info">
          <p>Info</p>
          <p>Info</p>
          <p>Info</p>
          <p>Info</p>

        </div>
         <div class="footer__logo">
          <router-link to="/">
            <img src="@/assets/img/logo.jpg" alt="The Logo" />
          </router-link>
        </div>
      </div>
    </div>
  </footer>
</template>


<script>
export default {
  name: "TheFooter",
  data() {
    return {};
  },
};
</script>

<style lang="scss">
.footer {
  background: $violet;
  &__wrapper {
   display: flex;
   justify-content: space-between;
  }
  &__links {
  }
  &__logo {
   width: 150px;
   height: 150px;
   img{
      width: 100%;
   }
  }
  &__info {
  }
}
</style>
