'use strict'

var emailREG = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/


var app = new Vue({
    // 顶级节点
    el: '#app',
    // 绑定在节点上的数据对象
    data: {
        users: [
            {
                name: 'test', email: 'test@gmail.com'
            }
        ],
        newUser: {
            name: '',
            email: ''
        }
    },
    // 计算属性：为了避免大段的表达式逻辑出现在模板中
    computed: {
        validation: function () {
            return {
                name: !!this.newUser.name.trim(),
                email: emailREG.test(this.newUser.email)
            };
        },
        isValid: function () {
            var validation = this.validation;
            return Object.keys(validation).every(function (key) { return validation[key]; });
        }
    },
    // 自定义实例方法
    methods: {
        addUser: function () {
            if (!this.isValid) {
                return;
            }

            this.users.push(this.newUser);
            // 置空
            this.newUser = {
                name: '', email: ''
            };
        },
        removeUser: function (index) {
            this.users.splice(index, 1);
        }
    }
});
