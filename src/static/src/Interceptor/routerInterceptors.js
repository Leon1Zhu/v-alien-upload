/**
 * @Author: liang.zhu
 * @Date: 2018/9/14 上午11:18
 */
import router from '../router/index';
import store from '../store/index';

router.beforeEach((to, from, next) => {
  console.log(to);
  const level = to.meta.level;
  if (!isNaN(level)) {
    store.dispatch('setAddBreadCrumb', { meta: to.meta, url: to.path, name: to.name, query: to.query });
  }
  next();
});
