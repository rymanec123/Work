'use strict'

const requestForUsers = function(seccess, error, typeUsers) {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', typeUsers);

    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4) {
            if(xhr.status >= 200 && xhr.status < 300) {
                seccess(JSON.parse(xhr.response));
            }
            else {
                error({
                    code: xhr.status,
                    message: xhr.responseText
                });
            }
        }
    }
    xhr.send();
}

const errorHandler = errorObj  => console.log(errorObj);

requestForUsers(function(male) {
    console.log(male);
}, errorHandler, 'https://randomuser.me/api/?results=3&gender=male');

requestForUsers(function(female) {
    console.log(female);
}, errorHandler, 'https://randomuser.me/api/?results=3&gender=female');


