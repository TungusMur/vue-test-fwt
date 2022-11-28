import { createApp } from 'vue';
import App from '@/App.vue';
import store from './store';
import router from './router';
import getCookie from './func/getCookie';
import setCookie from './func/setCookie';

const themeValue = getCookie('theme');

if (themeValue !== 'light' && themeValue !== 'dark') {
  setCookie('theme', 'light');
}

createApp(App).use(store).use(router).mount('#app');
