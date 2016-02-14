<template>
    <ul>
        <li class="user" v-for="user in users">
            <span>[{{$index + 1}}]: {{user.name}} - {{user.email}}</span>
            <button v-on:click="removeUser($index)">X</button>
        </li>
    </ul>
</template>

<script>
    var store = require('../store/store.js').store;

    export default {
        name: 'UserList',
        data: function () {
            return {
                users: store.users
            };
        },
        methods: {
            removeUser: function (index) {
                this.users.splice(index, 1);
            }
        }
    };
</script>

<style>
.user {
  height: 30px;
  line-height: 30px;
  padding: 10px;
  border-top: 1px solid #eee;
  overflow: hidden;
  transition: all .25s ease;
}

.user:last-child {
  border-bottom: 1px solid #eee;
}
</style>
