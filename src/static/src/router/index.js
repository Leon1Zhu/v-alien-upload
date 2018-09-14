import Vue from 'vue';
import Router from 'vue-router';
import deployRouter from './deploy';
import manageRouter from './manage';

Vue.use(Router);


// const main = () => import('@/App.vue');

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   component: main,
    // },
  ].concat(deployRouter, manageRouter),
});
