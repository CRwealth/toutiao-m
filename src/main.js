import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from "./store/index";
import "./styles/index.less";

import Vant from "vant";
import "vant/lib/index.css";

Vue.use(Vant);
// 加载全局样式

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
