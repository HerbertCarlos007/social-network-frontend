import {createRouter, createWebHistory} from 'vue-router'
import LoginComponent from '../components/Login.vue'
import HomeView from '../views/Home.vue'
const routes = [
    {
        path: '/', 
        name: 'Login',
        component: LoginComponent,
    },

    {
        path: '/home',
        name: 'Home',
        component: HomeView,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router