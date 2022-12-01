import { createWebHistory, createRouter } from 'vue-router';

import Home from "../views/Home.vue";
import Catalog from "../views/Catalog.vue";
import BookPage from "../views/BookPage.vue";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/catalog',
        name: 'Catalog',
        component: Catalog
    },
    {
        path: '/book',
        name: 'Book',
        component: BookPage
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;