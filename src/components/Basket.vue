<template>
  <div class="main-grid">
    <div class="cards-grid">
      <v-card outlined v-for="item in [1,2,3,4,5,6,7,8,9]" v-bind:key="item">
        <v-card-title>Название {{ item }}</v-card-title>
        <v-card-subtitle>19 999р.</v-card-subtitle>
        <v-img height="200px"></v-img>
        <v-card-text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias, dolore hic necessitatibus
          quod voluptate? Consequatur facere magni pariatur rerum.
        </v-card-text>
        <v-card-actions>
          <v-btn outlined color="primary">
            В корзину
            <v-icon>add_shopping_cart</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>

    <div style="position: relative">
      <div class="buy-card">
        <v-card>
          <v-card-title>32 300р.</v-card-title>
          <v-card-actions>
            <v-btn outlined color="primary">
              Оформить
            </v-btn>
          </v-card-actions>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Basket'
}
</script>

<style scoped>
.main-grid {
  display: grid;
  grid-template-columns: 1fr 400px;
  grid-gap: 30px;
  padding: 1rem;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 1rem;
}

.buy-card {
  position: fixed;
  padding: 1rem;
  display: grid;
  grid-gap: 10px;
  align-content: center;
  width: 300px;
}
</style>
