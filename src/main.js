import { createApp } from 'vue'
import Particles from "@tsparticles/vue3";
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css';
import { loadSlim } from "@tsparticles/slim";

createApp(App).use(Particles, {
    init: async engine => {
        await loadSlim(engine)
    }
}).mount('#app')
