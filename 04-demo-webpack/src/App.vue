<template>
  <div id="app">
    <new-user></new-user>
    <error-msg></error-msg>
    <user-list></user-list>
  </div>
</template>

<script>
var UserList = require('./components/UserList.vue');
var NewUser = require('./components/NewUser.vue');
var ErrorMsg = require('./components/ErrorMsg.vue');

export default {
    // 注册组件（局部）
    components: { UserList, NewUser, ErrorMsg }
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
</style>
