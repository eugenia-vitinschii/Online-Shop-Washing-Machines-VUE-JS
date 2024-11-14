 
import {createPinia} from 'pinia';

import { createApp } from 'vue';

import App from './App.vue';
import router from './router/routes';




createApp(App).use(createPinia()).use(router).mount('#app')


 