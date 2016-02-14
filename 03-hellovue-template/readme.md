# 最简单的传统模式 vue 的小案例（基于模板/组件引擎）

## 关键知识点

* [组件](http://cn.vuejs.org/guide/components.html)
* [深入响应式原理](http://cn.vuejs.org/guide/reactivity.html)

**多说两句：**

 * 引入 store 用于存储多组件共享的数据；
 * 每个组件内的 data 实际是对 store 中对应数据的引用，不能写成直接引用 store，这里是关键；对 store 中数据的共同引用/观察，才能保证状态的同步：newUser 改变时，validation 随之改变；
