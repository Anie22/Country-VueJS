import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons' // Import the needed icon styles

library.add(fas); // Add the icon style to the library
const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon); // Vue 3 component registration
app.use(router);
app.mount('#app');
