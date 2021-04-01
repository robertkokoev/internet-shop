<template>
  <v-app>
    <v-app-bar app
               flat
               color="primary"

    >
      <div class="nav-bar">
        <span class="text-h5" style="color: white">Internet-Shop</span>

        <div class="center">
          <router-link to="/catalog">
            <v-btn tile elevation="0">Каталог</v-btn>
          </router-link>

          <router-link to="/account">
            <v-btn tile elevation="0">Личный кабинет</v-btn>
          </router-link>
        </div>

        <div class="right">
          <router-link to="/basket">
            <v-btn tile elevation="0">
              Корзина
              <v-icon class="material-icons-outlined">shopping_cart</v-icon>
            </v-btn>
          </router-link>

          <router-link v-if="true" to="/auth">
            <v-btn tile elevation="0">
              Войти
              <v-icon class="material-icons-outlined">person</v-icon>
            </v-btn>
          </router-link>

          <router-link v-if="false" to="/registration">
            <v-btn tile elevation="0">
              Регистрация
              <v-icon class="material-icons-outlined">person</v-icon>
            </v-btn>
          </router-link>
        </div>
      </div>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style scoped>
.nav-bar * {
  text-decoration: none;
  color: inherit;
}

.nav-bar {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
}

.center {
  justify-self: center;
}

.right {
  justify-self: right;
}
</style>
