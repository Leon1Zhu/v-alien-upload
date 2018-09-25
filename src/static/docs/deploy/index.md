## 新用户进入时的引导页面

* 目前不需要接口(当用户登录成功，需要向前台返回当前用户是否是新用户)

## 列表页

![平台部署首页](http://otdc3q7z7.bkt.clouddn.com/A2779F15-52A2-4F04-9807-4C2EC565ED6D.png)

1. api/deploy/getIndexTableInfo(获取table数据，支持分页)
 - 传入：
   * userInfo: 用户信息，用于获取该用户的任务列表
   * pageIndex: 当前页码
   * pagelength: 每页长度
 - 返回结果：
   ```javascript
    tableList: [
            {
              taskName: '名称1',
              taskType: '安装',
              taskDescribe: '我是描述',
              createTime: '2016-10-03',
              currentStep: '安装后检查',
              status: '安装中',
            },
            {
              taskName: '名称1',
              taskType: '安装',
              taskDescribe: '我是描述',
              createTime: '2016-10-03',
              currentStep: '安装后检查',
              status: '安装中',
            }
         ]
   ```
 2. api/deploy/searchDeployIndexTableInfo(搜索table中数据接口)
 - 传入：
   * userInfo: 用户信息，用于获取当前用户权限下的任务列表
   * searchInfo: 搜索信息
 - 返回结果：
   ```javascript
    tableList: [
            {
              taskName: '名称1',
              taskType: '安装',
              taskDescribe: '我是描述',
              createTime: '2016-10-03',
              currentStep: '安装后检查',
              status: '安装中',
            },
            {
              taskName: '名称1',
              taskType: '安装',
              taskDescribe: '我是描述',
              createTime: '2016-10-03',
              currentStep: '安装后检查',
              status: '安装中',
            }
         ]// 如果当前用户没有新建完任务，能否有字段表明当前是停留在第几步
   ```
   
## 新建任务流程
1. 新建任务时，所有流程统一在总的taskConfig进行操作，保存的时候保存taskConfig即可
2. 当用户对任务进行修改时，从currentStep中获取当前任务已经进行到第几步，直接跳到该步骤
3. 每一次点击下一步时，都调用保存接口，对taskConfig对象进行保存和刷新
