<template>
    <ul class="errors">
        <li v-show="!validation.name">Name cannot be empty.</li>
        <li v-show="!validation.email">Please provide a valid email address.</li>
    </ul>
</template>

<script>
var store = require('../store/store.js').store;

var emailREG = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default {
    name: 'ErrorMsg',
    computed: {
        validation: function () {
            store.validation.name = !!store.newUser.name.trim();
            store.validation.email = emailREG.test(store.newUser.email);

            return store.validation;
        }
    }
};
</script>


<style>
.errors {
  color: #f00;
  min-height: 36px;
}
</style>
