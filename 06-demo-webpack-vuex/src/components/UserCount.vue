<template>
    <div class="user-count">
        <b>User Count:</b> {{userCount}}
    </div>
</template>

<script>
var store = require('../store/index.js');

export default {
    name: 'UserCount',
    computed: {
        userCount: function () {
            return store.state.userCount
        }
    }
}

</script>

<style>
.user-count {
    font-size: 22px;
    color: #555;
    min-height: 50px;
    line-height: 50px;
}
</style>
