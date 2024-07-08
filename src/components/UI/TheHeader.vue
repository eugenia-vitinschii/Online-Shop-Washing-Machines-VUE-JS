<template>
  <div class="header">
    <div class="container">
      <div class="header__wrapper">
        <div class="header__content">
          <div class="header__logo">
            <router-link to="/">
              <img src="@/assets/img/logo.jpg" alt="The Logo" />
            </router-link>
          </div>
          <nav class="header__links">
            <ul>
              <li>
                <router-link class="header__link" to="/admin-panel">Admin</router-link>
              </li>
              <li>
                <router-link class="header__link" to="/">Acasă</router-link>
              </li>
              <li>
                <router-link class="header__link" to="/items">Produse</router-link>
              </li>
              <li>
                <router-link class="header__link" to="/card">Coș</router-link>
              </li>
              <li>
                <router-link class="header__link" to="/favorite">Favorite</router-link>
              </li>
              <li>
                <router-link class="header__link" to="/info">Termeni și condiții</router-link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "TheHeader",
  data() {
    return{}
  },
};
</script>

<style lang="scss">
.header {
  background: $violet;
  margin-top: -100px;
  margin-bottom: 50px;
  &__content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  &__logo {
    width: 150px;
    height: 75px;
    img {
      width: 100%;
    }
  }
  &__links {
    width: 600px;
    ul {
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>