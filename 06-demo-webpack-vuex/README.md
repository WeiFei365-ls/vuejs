# 06-demo-webpack-vuex

> A Vue.js project

> webpack + vue-loader + vuex

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

## 关键知识点

* [vue-cli](https://github.com/vuejs/vue-cli)
* [vuex](http://vuex.vuejs.org/zh-cn/index.html)

## description

> 项目结构基于 [vue-cli](https://github.com/vuejs/vue-cli) 自动生成；并加入了 Flux 状态模式架构 vuex 的使用；

> vuex 插件的使用，简化了大型应用中状态的管理；


## more

#### vuex

* 实例化：

    ```js
    import Vuex ftom 'vuex';

    const store = new Vuex.Store({
            state: {},
            actions: {
                name1: 'NAME1',
                name2: function (store, args) { this.dispatch('NAME', args); }
            },
            mutations: {
                NAME: function (state, args) { /*....*/}
            }
        });
    ```

* 访问 state： ```store.state.**```；需要注意的是，在建立组件内部属性与 store 中的 state 属性关系时，组件内部的属性必须是只读的 **计算属性** （而不是 data），比如：

    ```js
    import store from './store';

    export default {
        computed: {
            message: function () { return store.state.message; }
        }
    };
    ```

* 触发状态更新：
    * 使用 dispatch：```store.dispatch('NAME', args)```
    * [推荐]使用 action：```store.actions.name(args)```

    > mutation handler 中的逻辑都应该是同步的，异步的逻辑都应该放在 actions 中；
    > 通常推荐用 ```store.actions.name(args)``` 来触发 mutation；

* 一个简单的 demo 实现：[数据流](http://vuex.vuejs.org/zh-cn/data-flow.html)

* 应用 vuex 的项目结构推荐：[应用结构](http://vuex.vuejs.org/zh-cn/structure.html)

* ***在 store.actions.- 中去调用其他的 store.actions.-，而不是调用 store.dispatch() 来触发其他的更新；也就是说在 store.actions.- 中可用的 dispatch 只是当前的 name，不要出现其他 dispatch 的 name***

* ***mutations 中的逻辑应该尽量简单、解耦，复杂、组合的逻辑放到 actions 中***

* ***在处理表单的状态更新时需要特殊处理；***


## issues

* 组件 transition


For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
