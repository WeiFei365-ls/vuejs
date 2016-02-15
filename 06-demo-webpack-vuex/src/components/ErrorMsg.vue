<template>
    <ul class="errors">
        <li v-show="!validation.name">Name cannot be empty.</li>
        <li v-show="!validation.email">Please provide a valid email address.</li>
    </ul>
</template>

<script>
var store = require('../store/index.js');

export default {
    name: 'ErrorMsg',
    computed: {
        validation: function () {
            return {
                name: store.state.validation.name,
                email: store.state.validation.email
            };
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
