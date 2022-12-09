import { createWebHistory, createRouter } from 'vue-router';

import Home from "../views/Home.vue";
import Catalog from "../views/Catalog.vue";
import BookPage from "../views/BookPage.vue";
import Account from "../views/Account.vue";

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
    {
        path: '/account',
        name: 'Account',
        component: Account
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;