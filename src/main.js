import { createApp } from 'vue'
import { loadSlim } from "@tsparticles/slim";
import { createRouter, createWebHistory } from "vue-router";

import Particles from "@tsparticles/vue3";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import '@fortawesome/fontawesome-free/css/all.css'

import App from './App.vue'
import HomePage from "@/components/HomePage.vue";
import GamePage from "@/components/GamePage.vue";

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path: '/', component: HomePage},
		{ path: '/game-name', component: GamePage}
	],
});

const app = createApp(App).use(Particles, {
    init: async engine => {
        await loadSlim(engine)
    }
})

app.use(router);

app.mount('#app');