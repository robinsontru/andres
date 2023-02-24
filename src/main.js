import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
createApp(App).use(router).mount('#app')
