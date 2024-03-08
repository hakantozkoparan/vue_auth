<template>
    <div>
        <input type="text" v-model="search" class="form-control" placeholder="Search...">

        <table class="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="category in filteredCategories" :key="category.id">
                    <td>{{ category.id }}</td>
                    <td>{{ category.name }}</td>
                    <td>
                        <button class="btn btn-success btn-sm">Düzenle</button>
                        <button class="btn btn-danger btn-sm" @click="deleteCategory(category.id)">Sil</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'Categories',
    data() {
        return {
            roles: '',
            categories: [],
            search: ''
        }
    },
    methods: {
        async deleteCategory(id) {
            try {
                await axios.delete(`https://localhost:44311/api/categories/deletecategory/${id}`);
                this.categories = this.categories.filter(category => category.id !== id);
            } catch (error) {
                console.error("An error occurred while deleting the category:", error);
            }
        }
    },
    computed: {
        filteredCategories() {
            return this.categories.filter(category => {
                return category.name.toLowerCase().includes(this.search.toLowerCase());
            });
        }
    },
    async created() {
        const token = localStorage.getItem('token');
        const userResponse = await axios.get('https://localhost:44311/api/users/me');
        this.roles = userResponse.data.roles;

        if (this.roles.includes('Manager')) {
            const response = await axios.get('https://localhost:44311/api/categories/getcategories');
            this.categories = response.data;
        }
    }
}
</script>