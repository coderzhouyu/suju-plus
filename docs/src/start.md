# 快速开始

## 安装

使用 npm 或 yarn 安装。

```bash
npm i @eric-ui --save
```

## 开始使用

### 全局使用

```js
// 引入所有组件
import EricUI from "eric-ui"
// 引入样式
import "eric-ui/dist/style.css"

import App from "./App.vue"
// 全局使用
createApp(App).use(ErElement).mount("#app")
```

```vue
<template>
  <er-button>我是 Button</er-button>
</template>
```

### 按需使用

suju-plus 提供了基于 ES Module 的开箱即用的 Tree Shaking 功能。

```vue
<template>
  <er-button>我是 Button</er-button>
</template>

<script>
import { ErButton } from " er-element"
export default {
  components: { ErButton },
}
</script>
```
