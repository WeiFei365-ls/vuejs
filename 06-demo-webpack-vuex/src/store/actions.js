'use strict'

var MUTATION_TYPES = require('./mutation-types.js');

var actions = {};

actions[MUTATION_TYPES.ADD.toLowerCase()] = function (store, user) {
    store.dispatch(MUTATION_TYPES.ADD, user);

    store.actions.init_user();
};

actions[MUTATION_TYPES.REMOVE.toLowerCase()] = function (store) {
    var n = store.state.userCount;
    store.dispatch(MUTATION_TYPES.REMOVE);
    console.log('user count: ', n, ' --> ', store.state.userCount);
};

actions[MUTATION_TYPES.INIT_USER.toLowerCase()] = function (store) {
    store.dispatch(MUTATION_TYPES.INIT_USER);

    store.actions.update_input('name', store.state.newUser.name);
    store.actions.update_input('email', store.state.newUser.email);
};

actions[MUTATION_TYPES.UPDATE_INPUT.toLowerCase()] = MUTATION_TYPES.UPDATE_INPUT;


module.exports = actions;
