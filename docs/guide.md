# 指南

## 安装

```sh
npm i jdream-ui
```

## 引入

### 整体引入
在main.js中
```js 
import Vue from 'vue'
import jdreamUI from 'jdream-ui/lib/index.umd.js'
import "jdream-ui/lib/index.css"
Vue.use(jdreamUI)
```
### 单个引入
在main.js中
```js 
import Vue from 'vue'
import {jdCollapse} from 'jdream-ui/lib/index.umd.js'
import "jdream-ui/lib/index.css"
Vue.use(jdCollapse)
```
## 使用

- 在vue文件中无需再引入和注册组件，直接使用即可
- 具体用法参考组件说明
