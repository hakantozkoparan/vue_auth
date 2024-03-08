<template>
    <div>
        <h3 v-if="loading">Loading...</h3>
        <h3 v-else-if="me">Merhaba, {{ me.name }} {{ me.surname }}</h3>
        <h3 v-else>Giriş yapmanız gerekmektedir!</h3>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'Home',
        data() {
            return {
                loading: true,
                me: null
            }
        },
        created() {
            axios.get('https://localhost:44311/api/users/me', {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            })
            .then(response => {
                this.me = response.data;
            })
            .catch(error => {
                console.error(error);
            })
            .finally(() => {
                this.loading = false;
            });
        }
    }
</script>