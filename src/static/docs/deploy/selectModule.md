![选择模块](http://otdc3q7z7.bkt.clouddn.com/selectModule.png)
2. api/deploy/newtask/selectedComponent/getComponents(获取系统的模块以及组件信息)、
 - 传入：
 
 - 返回结果：
   ```javascript
    modulesInfo: [ // 模块信息
      {
        ...,
        componentsInfo: [], // 组件信息 ，应包含是否具有必配项和是否已配置
      },
    ] 
   ```
2. 保存直接调用api/deploy/newtask/saveTaskConfig
