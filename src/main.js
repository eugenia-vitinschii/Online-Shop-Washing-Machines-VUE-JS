 
import {createPinia} from 'pinia';

import { createApp } from 'vue';

import App from './App.vue';
import router from './components/routes';




createApp(App).use(createPinia()).use(router).mount('#app')


 