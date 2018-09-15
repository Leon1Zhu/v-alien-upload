/**
 * @Author: liang.zhu
 * @Date: 2018/9/14 上午11:00
 */
const index = () => import('@/views/deploy/index/index.vue');
const noDeployPage = () => import('@/views/deploy/noDeployInfoPage/noDeployInfoPage.vue');


const deployRouter = [
  { path: '/deployIndex', component: index, name: '平台管理', meta: { level: 0 } },
  { path: '/noDeployPage', component: noDeployPage, name: '平台部署流程', meta: { level: 0 } },
];

export default deployRouter;
