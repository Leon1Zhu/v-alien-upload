/**
 * @Author: liang.zhu
 * @Date: 2018/9/22 下午11:15
 */
module.exports = {
  base: '/skyManage-api-list/',
  title: 'skyManage接口文档',
  port:8888,
  themeConfig: {
    repo: 'SkyManager/SkyManager',
    sidebar: [
      {
        title: '说明',
        collapsable: false,
        children: [
          ['/', '使用说明'],
        ]
      },
      {
        title: '平台部署接口',
        collapsable: false,
        children: [
          ['deploy/', '平台部署首页' ],
          ['deploy/newTask', '新建任务' ],
        ]
      },
      {
        title: '平台管理接口',
        collapsable: false,
        children: [
          ['manage/', '平台管理首页' ],
        ]
      },
      {
        title: '接口更新说明',
        collapsable: false,
        children: [
          '/update/'
        ]
      },
    ],
  }
}
