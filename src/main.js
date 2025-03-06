import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';  // Import the router


createApp(App)
  .use(router)  // Use the router in the Vue application
  .use(createPinia())  
  .mount('#app');
