# skymanage-page

> skyManage Project

## 构建捕捉

``` bash
# 安装依赖
npm install

# 本地启动
npm run dev

# 项目打包
npm run build
```

## 目录结构

### build & config
* 主要存放构建相关的配置文件

### src

#### api
* 存放当前项目的接口请求

#### assets
* 存放资源文件

#### common
* 用来存放一些通用的配置，比如全局css，一些通用的组件

    ##### css
    * 存放全局css
    
    ##### vue
    * 存放一些通用的组件

#### components
* 主要用来存放业务组件

#### http
* 存放http的相关封装和切面拦截

#### router
* vue-router组件

#### store
* vuex组件

#### styles
* 存放css样式

#### util
* 工具类

#### main.js & App.vue
* 项目的入口文件和界面

#### filter
* 全局的过滤方法写在这里
