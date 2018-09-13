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
static
├──build & config // 主要存放构建相关的配置文件
├──src // 代码文件目录
│   ├── api // 主要存放项目接口请求部分
│   ├── assets // 存放一些页面中使用的静态资源
│   ├── components // 组件目录，主要存放一些通用的组件
│   ├── http // 对http请求的封装操作
│   ├── router // vue-router目录
│   ├── store // store vuex目录
│   ├── styles // css文件目录，这里推荐将css文件脱离.vue文件，单独写
│   ├── util // 项目中的一些工具类的封装
│   ├── views // 界面目录，主要存放项目的界面代码
│   ├── App.vue // 界面主入口
│   ├── filter.js // 全局的过滤函数，使用Vue.filter()定义
│   └── main.js // 工程主入口
├──.eslintrc.js // eslint配置文件
├──.postcssrc.js // postcss配置文件
├──index.html // 单页面主页
└──package.json // 项目依赖包等配置文件


