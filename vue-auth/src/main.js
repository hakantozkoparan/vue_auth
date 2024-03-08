import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import store from './store' // vuex.js dosyanızın adını store.js olarak değiştirdim

// axios.defaults.baseURL = 'https://localhost:44311/api/';
axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token'); // kodu tekrar tekrar yazmamak için headersta tutuyoruz

const app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app');