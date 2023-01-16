import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    routes: [{
            path: '/',
            redirect: '/Editor'
        },
        {
            path: '/Home',
            component: () =>
                import ('@/components/Home.vue'),
            name: 'Home'
        },
        {
            path: '/Main',
            component: () =>
                import ('@/components/Main.vue'),
            name: 'Main'
        },
        {
            path: '/Editor',
            component: () =>
                import ('@/components/Editor.vue'),
            name: 'Editor'
        },

    ],
    history: createWebHistory()
})
export default router;