   
![主机配置](http://otdc3q7z7.bkt.clouddn.com/hostConfig.png)
1. api/deploy/newtask/hostConfig/testLink(用于对用户添加的主机进行连接测试)
- 传入：
   * userInfo:{} // 用户信息
   * testHostInfo: {} // 主机配置信息
- 返回结果：
   ```javascript
   testResult: true, // 测试结果
   errorMessgae : '', // 测试信息，用于报错的时候对用户进行提示
   ```
2. api/deploy/newtask/saveTaskConfig(用于对用户添加的主机配置信息进行保存)
- 传入：
   * userInfo: {} // 用户信息
   * taskConfig: {} // 任务、主机配置信息
- 返回结果：
   ```javascript
   saveResult: true, // 测试结果
   ```
