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
      <v-card outlined v-for="item in [1,2,3,4,5,6,7,8,9]" v-bind:key="item">
        <v-card-title>Название {{ item }}</v-card-title>
        <v-card-subtitle>19 999р.</v-card-subtitle>
        <v-img height="200px"></v-img>
        <v-card-text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias, dolore hic necessitatibus quod voluptate? Consequatur facere magni pariatur rerum.</v-card-text>
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
export default {
  name: 'Catalog'
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
  grid-template-columns: repeat(5, 1fr);
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
