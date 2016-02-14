'use strict'

function initUser (user) {
    var u = { name: '', email: '' };

    user && (user.name = u.name, user.email = u.email);

    return user || u;
}

var store = {
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
