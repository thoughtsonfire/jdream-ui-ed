# collapse

## 基本用法

用css控制的过渡动画组件

:::demo
```vue
<template>
  <div>

    <a @click="show = !show">切换</a>
    <jd-collapse :show="show" :transition="transition">
        <div style="height: 200px;width: 100px;background-color: red; overflow: scroll;">
          <p>1111111111111111</p>
          <p>1111111111111111</p>
          <p>1111111111111111</p>
          <p>1111111111111111</p>
          <p>1111111111111111</p>
          <p>1111111111111111</p>
          <p>1111111111111111</p>
          <p>1111111111111111</p>
          <p>1111111111111111</p>
          <p>1111111111111111</p>
          <p>1111111111111111</p>
          <p>1111111111111111</p>
          <p>1111111111111111</p>
          <p>1111111111111111</p>
          <p>1111111111111111</p>
          <p>1111111111111111</p>
          <p>1111111111111111</p>
          <p>1111111111111111</p>
          <p>1111111111111111</p>
          <p>1111111111111111</p>
          <p>1111111111111111</p>
          <p>1111111111111111</p>
          <p>1111111111111111</p>
          <p>1111111111111111</p>
          <p>1111111111111111</p>
          <p>1111111111111111</p>
          <p>1111111111111111</p>
          <p>1111111111111111</p>
        </div>
    </jd-collapse>
  </div>
</template>
 
<script> 
export default {
  data() {
    return {
      show: false,
      transition:'height .5s linear'
    }
  },
}
</script>
```
:::

## 参数

|  参数  |  说明  |  类型    |  默认值  |  可选值  |
|:------:|:------:|:--------:|:--------:|:--------:|
|  show  |控制显示和隐藏|Boolean|true|true/false|
|transition|过渡的属性|String|"height .5s linear"|-|
