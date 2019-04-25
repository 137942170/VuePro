# pro

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

├── App.vue                         // APP入口文件
|
├── api                             // 接口调用工具文件夹
|
│   └── index.js                    // 接口调用工具
|
├── components                      // 组件文件夹，目前为空
|
├── config                          // 项目配置文件夹
|
│   └── index.js                    // 项目配置文件
|
├── frame                           // 子路由文件夹
|
│   └── frame.vue                   // 默认子路由文件
|
├── main.js                         // 项目配置文件
|
├── page                                // 我们的页面组件文件夹
|
│   ├── content.vue             // 准备些 cnodejs 的内容页面
|
│   └── index.vue                   // 准备些 cnodejs 的列表页面
|
├── router                          // 路由配置文件夹
|
│   └── index.js                    // 路由配置文件
|
├── style                           // scss 样式存放目录
|
│   ├── base                        // 基础样式存放目录
|
│   ├── scss                        // 页面样式文件夹
|
│   │   ├── _content.scss       // 内容页面样式文件
│   │   └── _index.scss     // 列表样式文件
│   └── style.scss              // 主样式文件
└── utils                           // 常用工具文件夹
    └── index.js                    // 常用工具文件
