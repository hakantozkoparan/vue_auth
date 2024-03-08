<template>
  <nav class="navbar navbar-expand navbar-light fixed-top">
      <div class="container">
          <router-link to="/" class="navbar-brand">Vue Auth</router-link>
          <div class="collapse navbar-collapse">
              <ul class="navbar-nav ml-auto" v-if="!me">
                  <li class="nav-item">
                      <router-link to="/login" class="nav-link">Login</router-link>
                  </li>
                  <li class="nav-item">
                      <router-link to="/register" class="nav-link">Sign Up</router-link>
                  </li>
              </ul>
              <ul class="navbar-nav ml-auto" v-if="me">
                  <li class="nav-item">
                      <router-link to="/home" class="nav-link">Home</router-link>
                  </li>
                  <li class="nav-item">
                      <router-link to="/kategori" class="nav-link">Kategoriler</router-link>
                  </li>
                  <li class="nav-item">
                      <a href="javascript:void(0)" class="nav-link" @click="handleClick">Logout</a>
                  </li>
              </ul>
          </div>
      </div>
  </nav>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'Nav',
  created() {
      const token = localStorage.getItem('token');
      if (token) {
          this.$store.dispatch('me', token);
      }
  },
  methods:{
      handleClick(){
          localStorage.removeItem('token');
          this.$store.dispatch('me', null)
              .then(() => {
                  this.$router.push('/login');
              })
              .catch(error => {
                  console.error('Error during logout:', error);
              });
      }
  },
  computed: {
      ...mapGetters(['me'])
  }
}
</script>