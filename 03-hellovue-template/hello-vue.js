'use strict'

var emailREG = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

Vue.config.debug = true;

// 注册 user-list 组件
Vue.component('user-list', {
    template: '#user_list',
    data: function () {
        return {
            users: store.users
        };
    },
    methods: {
        removeUser: function (index) {
            store.users.splice(index, 1);
        }
    }
});
// 注册 new-user 组件
Vue.component('new-user', {
    template: '#new_user',
    data: function () {
        return {
            newUser: store.newUser,
            validation: store.validation
        };
    },
    methods: {
        addUser: function () {
            if (!this.isValid) {
                return;
            }

            store.users.push(Object.assign({}, this.newUser));
            // 置空
            initUser(this.newUser);

        },
        randomUser: function () {
            var name = '';
            for (var i = 0, n = -1; i < 4; i++) {
                while (n < 0 || n > 25) {
                    n = Math.random() * 100;
                }
                name += 'qwertyuioplkjhgfdsazxcvbnm'.charAt(n);
                n = -1;
            }

            this.newUser.name = name;
            this.newUser.email = name + '@gmail.com';
        }
    },
    computed: {
        isValid: function () {
            var validation = this.validation;
            return Object.keys(validation).every(function (key) { return validation[key]; });
        }
    }
});
// 注册 error-msg 组件
Vue.component('error-msg', {
    template: '#error_msg',
    computed: {
        validation: function () {
            store.validation.name = !!store.newUser.name.trim();
            store.validation.email = emailREG.test(store.newUser.email);

            return store.validation;
        }
    }
});

// 启动主程序
var app = new Vue({
    // 顶级节点
    el: '#app'
});
