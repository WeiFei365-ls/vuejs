<template>
    <form id="form" v-on:submit.prevent="addUser">
        <input name="name" :value="newUser.name" @input="updateInput" placeholder="name">
        <input name="email" :value="newUser.email" @input="updateInput" placeholder="name@domain.com">
        <input type="submit" value="Add User">
        <input type="button" value="Random User" v-on:click="randomUser">
    </form>
</template>

<script>
var store = require('../store/index.js');

export default {
    name: 'NewUser',
    methods: {
        addUser: function () {
            if (!this.isValid) {
                return;
            }

            store.actions.add();
        },
        updateInput: function (event) {
            store.actions.update_input(event.target.name, event.target.value);
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
            
            store.actions.update_input('name', name);
            store.actions.update_input('email', name + '@gmail.com');
        }
    },
    computed: {
        newUser: function () {
            return {
                name: store.state.newUser.name,
                email: store.state.newUser.email
            };
        },
        isValid: function () {
            var validation = store.state.validation;
            return Object.keys(validation).every(function (key) { return validation[key]; });
        }
    }
};
</script>
