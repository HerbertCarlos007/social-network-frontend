import {createRouter, createWebHistory} from 'vue-router'
import LoginComponent from '../components/Login.vue'

const routes = [
    {
        path: '/login', 
        name: 'Login',
        component: LoginComponent
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router