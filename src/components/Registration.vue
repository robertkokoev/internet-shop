<template>
  <div class="main-grid">
    <h1 class="text-md-h3">Регистрация</h1>
    <v-text-field label="Имя" outlined></v-text-field>
    <v-text-field label="Почта" outlined></v-text-field>
    <v-text-field label="Пароль" outlined></v-text-field>
    <v-checkbox label="Согласие на обработку данных"></v-checkbox>
    <v-btn color="primary">Зарегистрироваться</v-btn>
  </div>
</template>

<script>
export default {
  name: 'Registration',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-grid {
  display: grid;
  justify-content: center;
  align-content: center;
  height: 80%;
  grid-auto-columns: minmax(300px, 500px);
}
</style>
