import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './routers';
import svgIcon from './components/svg-icon.vue';

Vue.config.productionTip = false;

Vue.component('svg-icon', svgIcon);

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app');
