import Vue from 'vue'
import VueRouter from "vue-router";
import App from './App.vue'
import vuetify from './plugins/vuetify';
import Catalog from "./components/Catalog";
import Registration from "./components/Registration";
import Account from "./components/Account";

Vue.config.productionTip = false
Vue.use(VueRouter);

const routes = [
  { path: '/catalog', component: Catalog },
  { path: '/registration', component: Registration },
  { path: '/account', component: Account },
];

const router = new VueRouter({
  routes
})

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
