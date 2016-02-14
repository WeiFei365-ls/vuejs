<template>
    <div id="app">
        <h1>05 - demo-webpack-router</h1>
        <div class="menu">
            <div class="menu-item">
                <a :href="'#/addUser'">Add User</a>
            </div>
            <div class="menu-item">
                <a :href="'#/userList'">User List</a>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
var UserList = require('./components/UserList.vue');
var NewUser = require('./components/NewUser.vue');

export default {
    // 注册组件（局部）
    components: { UserList, NewUser }
}

</script>

<style>
body {
  font-family: Helvetica, Arial, sans-serif;
}

ul {
  padding: 0;
}

.v-enter, .v-leave {
  height: 0;
  padding-top: 0;
  padding-bottom: 0;
  border-top-width: 0;
  border-bottom-width: 0;
}

.menu {
    width: 100%;
    min-height: 50px;
    border-bottom: 1px dashed #999;
    margin-bottom: 10px;
}
.menu .menu-item {
    float: left;
    padding: 10px 20px;
    cursor: pointer;
    color: #999;
}
.menu .menu-item:hover {
    color: #333;
}
</style>
