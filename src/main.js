import { createApp } from 'vue'
import PrimeVue from 'primevue/config';
import {createRouter, createWebHistory} from "vue-router";

import {ACCESS_TOKEN_LOCAL_STORAGE_NAME, App} from '@/features/app';
import {SignInPage, SignUpPage} from "@/features/auth";
import {routes} from "@/features/routing";
import {ChatsPage} from "@/features/chats";
import {store} from "@/features/store";


const app = createApp(App);

const routesArr = [
    {
        path: '/',
        redirect: () => {
            if (localStorage.getItem(ACCESS_TOKEN_LOCAL_STORAGE_NAME)) {
                return { path: routes.chats };
            } else {
                return { path: routes.signIn };
            }
        }
    },
    { path: routes.signIn, component: SignInPage },
    { path: routes.signUp, component: SignUpPage },
    { path: '/chats', component: ChatsPage }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routesArr,
})

app.use(router);

app.use(PrimeVue);

app.use(store);

app.mount('#app')

