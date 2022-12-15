import { createWebHistory, createRouter } from 'vue-router';

import Home from "../views/Home.vue";
import Catalog from "../views/Catalog.vue";
import BookPage from "../views/BookPage.vue";
import Account from "../views/Account.vue";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/Home.vue')
    },
    {
        path: '/catalog',
        name: 'Catalog',
        component: () => import('../views/Catalog.vue')
    },
    {
        path: '/book',
        name: 'Book',
        component: () => import('../views/BookPage.vue')
    },
    {
        path: '/account',
        name: 'Account',
        component: () => import('../views/Account.vue')
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('../views/NotFound.vue')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;