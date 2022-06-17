import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

//引入store
import store from "./store/index";

// 引入boostrap
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { BootstrapVue } from "bootstrap-vue";
Vue.use(BootstrapVue);

new Vue({
	render: (h) => h(App),
	store,
}).$mount("#app");
