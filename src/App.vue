<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-btn>
        <router-link to="/catalog">Каталог</router-link>
      </v-btn>

      <v-btn>
        <router-link to="/account">Личный кабинет</router-link>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
<!--      <registration></registration>-->
<!--      <auth></auth>-->
<!--      <catalog></catalog>-->
<!--      <basket></basket>-->
<!--      <account></account>-->
    </v-main>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';
// import Registration from "./components/Registration";
// import Auth from "./components/HelloWorld";

// import Catalog from "./components/Catalog";
// import Basket from "./components/Basket";
// import Account from "./components/Account";
export default {
  name: 'App',

  components: {
    // Account
    // Basket,
    // Catalog
    // Auth,
    // Registration,
  },

  data: () => ({
    //
  }),
};
</script>
