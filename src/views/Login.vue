<template>
  <div>
    <h3>Inicia sesión</h3>
    <input type="email" placeholder="Correo Electronico" v-model="email">
    <input type="password" placeholder="Contraseña" v-model="password">
  </div>
</template>

<script>
export default {
  name: 'Login',

  data() {
    return {
      email: '',
      password: ''
    }
  }
}
</script>
