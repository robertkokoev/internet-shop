<template>
  <div class="main-grid">
    <h1 class="text-md-h3">Авторизация</h1>
    <v-text-field label="Почта" outlined></v-text-field>
    <v-text-field label="Пароль" outlined></v-text-field>
    <v-btn color="primary">Войти</v-btn>
  </div>
</template>

<script>
export default {
  name: 'Auth'
}
</script>

<style scoped>
.main-grid {
  display: grid;
  justify-content: center;
  align-content: center;
  height: 80%;
  grid-auto-columns: minmax(300px, 500px);
}
</style>
