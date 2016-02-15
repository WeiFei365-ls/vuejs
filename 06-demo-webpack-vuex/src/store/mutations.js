'use strict'

import { initUser } from '../utils/utils.js';

var MUTATION_TYPES = require('./mutation-types.js');

var emailREG = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

var mutations = {};

mutations[MUTATION_TYPES.ADD] = function (state) {
    state.userCount++;

    state.users.push(Object.assign({}, state.newUser));
};

mutations[MUTATION_TYPES.REMOVE] = function (state, index) {
    state.userCount > 0 && state.userCount--;

    state.users.splice(index, 1);
};

mutations[MUTATION_TYPES.INIT_USER] = function (state) {
    initUser(state.newUser);
};

mutations[MUTATION_TYPES.UPDATE_INPUT] = function (state, name, value) {
    if (typeof state.newUser[name] != 'string') {
        return;
    }
    
    state.newUser[name] = value;
    state.validation[name] = name == 'name' ? !!value : emailREG.test(value);
};

module.exports = mutations;
