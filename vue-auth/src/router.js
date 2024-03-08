import { createRouter, createWebHistory } from 'vue-router'
import Login from './components/Login.vue'
import Home from './components/Home.vue'
import Register from './components/Register.vue'
import kategori from './components/kategori.vue'
import Forgot from './components/Forgot.vue'


const routes = [
    {
        path: '/login',
        name: 'Login',
        component: Login
    }, {
        path: '/kategori',
        name: 'kategori',
        component: kategori
    },
    {
        path: '/Home',
        name: 'Home',
        component: Home
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
      path:'/Forgot',
      name:'Forgot',
      component: Forgot
    }
]

const router = createRouter({
    history: createWebHistory('/'),
    routes
});

// bu kod ile giriş yapmayan kullanıcıları requiresAuth olan sayfalardan uzaklaştırıyoruz ve login sayfasına yönlendiriyoruz
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
      const token = localStorage.getItem('accessToken');
      if (!token) {
        next('/login');
      } else {
        next();
      }
    } else {
      next();
    }
});

export default router;