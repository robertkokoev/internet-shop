import Vue from 'vue'
import VueRouter from "vue-router";
import App from './App.vue'
import vuetify from './plugins/vuetify';
import Catalog from "./components/Catalog";
import Registration from "./components/Registration";
import Account from "./components/Account";
import Basket from "./components/Basket";
import Auth from "./components/Auth";
import firebase from "firebase";

Vue.config.productionTip = false
Vue.use(VueRouter);

const routes = [
  { path: '/catalog', component: Catalog },
  { path: '/registration', component: Registration },
  { path: '/account', component: Account },
  { path: '/basket', component: Basket },
  { path: '/auth', component: Auth },
];

const router = new VueRouter({
  routes
})

new Vue({
  vuetify,
  router,
  render: h => h(App),
  created() {
    const firebaseConfig = {
      apiKey: "AIzaSyD2EcxoR3x85JKU3hFIcLj49VhgptsTaCQ",
      authDomain: "internet-shop-aed5a.firebaseapp.com",
      databaseURL: "https://internet-shop-aed5a-default-rtdb.firebaseio.com",
      projectId: "internet-shop-aed5a",
      storageBucket: "internet-shop-aed5a.appspot.com",
      messagingSenderId: "952967709046",
      appId: "1:952967709046:web:59dabe7a665a12eee53a57"
    };

    firebase.initializeApp(firebaseConfig);
  }
}).$mount('#app')
