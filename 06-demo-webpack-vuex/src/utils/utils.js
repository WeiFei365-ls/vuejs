'use strict'

function initUser (user) {
    var u = { name: '', email: '' };

    user && (user.name = u.name, user.email = u.email);

    return user || u;
}

export { initUser }
