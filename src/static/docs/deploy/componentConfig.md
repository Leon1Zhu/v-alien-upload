![组件配置](http://otdc3q7z7.bkt.clouddn.com/componentConfig.png)
1. api/deploy/newtask/componentConfig/getComponentConfig(获取单个组件的配置)
- 传入：
   * userInfo: {} // 用户信息
   * componentId: '' // 需要获取详细配置信息的组件id
- 返回结果：
   ```javascript
   componentConfig: {}, // 组件配置信息，其中配置需要按必配、高级、一般、进行分类
   ```
2. 保存直接调用api/deploy/newtask/saveTaskConfig
