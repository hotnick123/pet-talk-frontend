import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import './assets/scss/globals.scss';
// import './assets/scss/main.scss';
import './assets/css/main.css';
import './assets/css/login.css';
import './assets/css/signup.css'

createApp(App).use(store).use(router).mount('#app')
