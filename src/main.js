import "bootstrap/dist/css/bootstrap.min.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/css/main.scss";

createApp(App).use(store).use(router).mount("#app");

import "bootstrap/dist/js/bootstrap.js";
