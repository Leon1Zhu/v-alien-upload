/**
 * @Author: liang.zhu
 * @Date: 2018/9/14 上午11:00
 */
const index = () => import('@/views/manage/index/index.vue');

const manageRouter = [
  { path: '/manageIndex', component: index, name: '平台管理', meta: { level: 0 } },
];

export default manageRouter;
