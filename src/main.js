import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './routers';
import svgIcon from './components/svg-icon.vue';
import VueCookies from 'vue-cookies';
import store from './plugins/store';
import Vuelidate from 'vuelidate';

Vue.config.productionTip = false;

Vue.component('svg-icon', svgIcon);
Vue.use(VueCookies);
Vue.use(Vuelidate);

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app');
