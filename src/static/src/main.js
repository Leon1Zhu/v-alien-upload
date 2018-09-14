// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
// import 'iview/dist/styles/iview.css';
import iView from 'iview';
import App from './App';
import store from './store/index';
import router from './router';
import './Interceptor/index';
import './styles/reset.css';
import './styles/resetIview.less';
import './styles/styles.less';

Vue.use(iView);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});


Vue.prototype.pushRouter = (to, query) => {
  router.push({ path: to, query });
};
