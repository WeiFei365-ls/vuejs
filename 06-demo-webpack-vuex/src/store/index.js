'use strict'

import Vue from 'vue';
import Vuex from 'vuex';

import { initUser } from '../utils/utils.js';

var mutations = require('./mutations.js');
var actions = require('./actions.js');

var state = {
    userCount: 1,
    users: [
        {
            name: 'test', email: 'test@gmail.com'
        }
    ],
    validation: {
        name: false,
        email: false
    },
    newUser: initUser()
};

Vue.use(Vuex);

module.exports = new Vuex.Store({
    strict: true,
    state, mutations, actions
});
