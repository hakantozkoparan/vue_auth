<template>
  <div id="app">
    <!-- <Nav :me="me"/> -->
    <Nav/>
    <div class="auth-wrapper">
      <div class="auth-inner">
        <!-- <router-view :me="me"/> -->
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from './components/Nav.vue'
import axios from 'axios'

export default {
  name: 'App',
  components: {
    Nav
  },
  data() {
        return {
            //name: ''
            me: null
        }
    },
    async created(){
        const response = await axios.get('https://localhost:44311/api/users/me'); 
        // this.name = response.data.name;
        // this.me = response.data; bunu kullanacağın zaman nav ve router view içerisinde me propu olur
        this.$store.dispatch('me', response.data);
    }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Fira+Sans:400,500,600,700,800');
  *{
    box-sizing:border-box;
  }

    body{
      background: #1C8EF9 !important;
      min-height: 100vh;
      display: flex;
      font-weight: 400;
      font-family: 'Fira Sans', sans-serif;
    }

    h1,h2,h3,h4,h5,h6,label,span{
      font-weight: 500;
      font-family:'Fira Sans', sans-serif;
    }

    body,html, #app, #root, .auth-wrapper{
      width: 100%;
      height: 100%;
    }

    #app{
      text-align: center;
    }

    .navbar-light {
      background-color: #fff !important;
      box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
    }

    .auth-wrapper{
      display: flex;
      justify-content: center;
      flex-direction: column;
      text-align: left;
    }

    .auth-inner{
      width: 450px;
      margin: auto;
      background: #ffffff;
      box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
      padding: 40px 55px 45px 55px;
      border-radius: 15px;
      transition: all .3s;
    }
    .form-group{
      margin-bottom: 10px;
    }

    .auth-wrapper .form-control:focus{
      border-color: #167bff;
      box-shadow: none;
    }

    .auth-wrapper h3 {
      text-align: center;
      margin: 0;
      line-height: 1;
      padding-bottom: 20px;
    }
    
    .forgot-password a{
      color: #167bff;
    }

    .forgot-password, .forgot-password a{
      text-align: right;
      font-size: 13px;
      padding-top: 10px;
      color: #7f7d7d;
      margin: 0;
    }

    .custom-control-label{
      font-weight: 400;
    }

</style>