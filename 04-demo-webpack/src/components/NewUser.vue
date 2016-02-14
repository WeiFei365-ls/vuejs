<template>
    <form id="form" v-on:submit.prevent="addUser">
        <input v-model="newUser.name" placeholder="name">
        <input v-model="newUser.email" placeholder="name@domain.com">
        <input type="submit" value="Add User">
        <input type="button" value="Random User" v-on:click="randomUser">
    </form>
</template>

<script>
var storeObj = require('../store/store.js');
var store = storeObj.store;
var initUser = storeObj.initUser;

export default {
    name: 'NewUser',
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
};
</script>
