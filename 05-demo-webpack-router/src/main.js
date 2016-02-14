import Vue from 'vue'
var VueRouter = require('vue-router');

import App from './App.vue'
var router = require('./routers/router.js');

Vue.use(VueRouter);

var vueRouter = new VueRouter();

vueRouter.map(router);

vueRouter.start(App, '#app');
