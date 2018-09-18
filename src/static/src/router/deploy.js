/**
 * @Author: liang.zhu
 * @Date: 2018/9/14 上午11:00
 */
const index = () => import('@/views/deploy/index/index.vue');
const noDeployPage = () => import('@/views/deploy/noDeployInfoPage/noDeployInfoPage.vue');
const newTask = () => import('@/views/deploy/newTask/newTask.vue');


const deployRouter = [
  { path: '/deployIndex', component: index, name: '平台部署', meta: { level: 0 } },
  { path: '/noDeployPage', component: noDeployPage, name: '平台部署流程', meta: { level: 0 } },
  { path: '/newTask', component: newTask, name: '新建任务', meta: { level: 1 } },
];

export default deployRouter;
