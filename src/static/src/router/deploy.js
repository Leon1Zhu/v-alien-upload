/**
 * @Author: liang.zhu
 * @Date: 2018/9/14 上午11:00
 */
// 部署任务主页
const index = () => import('@/views/deploy/index/index.vue');
// 没有部署任务界面
const noDeployPage = () => import('@/views/deploy/noDeployInfoPage/noDeployInfoPage.vue');
// 新建任务页面
const newTask = () => import('@/views/deploy/newTask/newTask.vue');
// 新建任务，主机配置
const hostConfiguration = () => import('@/views/deploy/newTask/hostConfiguration/hostConfiguration.vue');
// 选择模块界面
const selectModule = () => import('@/views/deploy/newTask/selectModule/selectModule.vue');
// 选择组件界面
const selectComponent = () => import('@/views/deploy/newTask/selectComponent/selectComponent.vue');

const deployRouter = [
  { path: '/deployIndex', component: index, name: '平台部署', meta: { level: 0 } },
  { path: '/noDeployPage', component: noDeployPage, name: '平台部署流程', meta: { level: 0 } },
  {
    path: '/newTask',
    component: newTask,
    children: [
      {
        path: '/',
        component: hostConfiguration,
        name: '主机配置',
      },
      {
        path: 'selectModule',
        component: selectModule,
        name: '选择模块',
      },
      {
        path: 'selectComponent',
        component: selectComponent,
        name: '选择组件',
      },
    ],
    name: '新建任务',
    meta: { level: 1 },
  },
];

export default deployRouter;
