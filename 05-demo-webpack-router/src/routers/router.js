'use strict'

module.exports = {
    '/addUser': {
        component: require('../components/NewUser.vue')
    },
    '/userList': {
        component: require('../components/UserList.vue')
    },
    '/userList/:userName': {
        component: require('../components/UserInfo.vue')
    }
};
