<template>
  <div class="main-grid">
    <div style="position: relative">
      <div class="filters-grid">
        Цена
        <div class="row">
          <v-text-field outlined label="От"></v-text-field>
          <v-text-field outlined label="До"></v-text-field>
        </div>

        Сортировка
        <div class="row">
          <v-btn elevation="0">Цена</v-btn>
          <v-btn elevation="0">Название</v-btn>
        </div>
      </div>
    </div>

    <div class="cards-grid">
      <v-card outlined v-for="item in goods" v-bind:key="item.name">
        <v-card-title>{{ item.name }}</v-card-title>
        <v-card-subtitle>{{ item.price }}р.</v-card-subtitle>
        <v-img :src="item.photo" contain height="200px"></v-img>
        <v-card-text>{{ item.description }}</v-card-text>
        <v-card-actions>
          <v-btn outlined color="primary">
            В корзину
            <v-icon>add_shopping_cart</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: 'Catalog',
  data: () => ({
    goods: []
  }),
  methods: {
    async getGoods() {
      const ref = await firebase.database().ref('goods').once('value');

      this.goods = ref.val();
      console.log(this.goods);
    }
  },
  created() {
    this.getGoods();
  }
}
</script>

<style scoped>
.main-grid {
  display: grid;
  grid-template-columns: 400px 1fr;
  grid-gap: 30px;
  padding: 1rem;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 1rem;
}

.filters-grid {
  position: fixed;
  padding: 1rem;
  display: grid;
  grid-gap: 10px;
  align-content: center;
}

.row {
  display: flex;
  grid-gap: 5px;
  align-items: center;
}
</style>
