<template>
    <form @submit.prevent="handleSubmit">
        <h3>Sign Up</h3>

        <div class="form-group">
            <label>Username</label>
            <input type="text" class="form-control" placeholder="First name" v-model="username" />
        </div>

        <div class="form-group">
            <label>First Name</label>
            <input type="text" class="form-control" placeholder="First name" v-model="name" />
        </div>

        <div class="form-group">
            <label>Last Name</label>
            <input type="text" class="form-control" placeholder="Last name" v-model="surname" />
        </div>

        <div class="form-group">
            <label>Email address</label>
            <input type="email" class="form-control" placeholder="Enter email" v-model="email"/>
        </div>

        <div class="form-group">
            <label>Password</label>
            <input type="password" class="form-control" placeholder="Enter password" v-model="password"/>
        </div>
        <button class="btn btn-primary btn-block">Sign Up</button>

    </form>

</template>

<script>
import axios from 'axios';

    export default {
        name: "Register",
        data(){
            return{
                name:'',
                surname:'',
                email:'',
                password:'',
                username:''
            }
        },
        methods: {
            async handleSubmit(){
                const response = await axios.post('users/register',{
                    name:this.name,
                    surname:this.surname,
                    email:this.email,
                    password:this.password,
                    username:this.username
                });
                
                this.$router.push('/login');


            }
        }
    }
</script>