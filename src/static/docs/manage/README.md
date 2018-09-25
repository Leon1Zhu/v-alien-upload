![平台管理](http://otdc3q7z7.bkt.clouddn.com/6A7A4111-69CE-4FA1-AB16-588632D49876.png)
1. api/manage/getIndexInfo(获取平台管理首页信息)
  - 传入：
   userInfo:{} // 当前用户信息
  - 返回结果：
    ```javascript
    indexInfo: { //首页信息对象
      nodesArr: [], // 节点信息
      modulesArr: [], // 模块信息
      hardwareArr: [], // 硬件信息
      usersArr: [], // 用户信息
    } 
    ```

