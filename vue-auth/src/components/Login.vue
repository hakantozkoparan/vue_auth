<template>
    <form @submit.prevent="handleSubmit">
        <div v-if="error" class="alert alert-danger" role="alert">
            {{ error }}
        </div>
        <h3>Login</h3>

        <div class="form-group">
            <label>Email</label>
            <input type="email" class="form-control" placeholder="Enter email" v-model="email" />
        </div>

        <div class="form-group">
            <label>Password</label>
            <input type="password" class="form-control" placeholder="Enter password" v-model="password" />
        </div>

        <div class="form-group">
            <button class="btn btn-primary btn-block">Login</button>
        </div>

        <p class="forgot-password text-right">
            <router-link to="forgot">Forgot Password?</router-link>
        </p>


    </form>
</template>


<script>
import axios from 'axios';

export default {
    name: 'Login',
    data() {
        return {
            email: '',
            password: '',
            error: ''
        }
    },
    methods: {
    handleSubmit() {
        axios.post('https://localhost:44311/api/users/login', {
            email: this.email,
            password: this.password
        })
        .then(response => {
            localStorage.setItem('token', response.data.accessToken);
            this.$store.dispatch('me', response.data.accessToken)
                .then(() => {
                    this.$router.push('/home');
                })
                .catch(() => {
                    this.error = 'Bir hata oluştu!'
                });
        })
        .catch(() => {
            this.error = 'Email veya Şifre Hatalı!'
        });
    }
}
}
</script>