<template>
  <div class="grid">
    <v-card>
      <v-card-title>{{ name }}</v-card-title>
      <v-card-subtitle>{{ email }}</v-card-subtitle>
    </v-card>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: 'Account',
  data: () => ({
    name: '',
    email: ''
  }),
  created() {
    firebase.auth().onAuthStateChanged(user => {
      this.email = user.email;
      this.name = user.displayName;
    })
  }
}
</script>

<style>
.grid {
  display: grid;
  justify-content: center;
  padding: 1rem;
}
</style>
