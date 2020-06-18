'use strict'

const realRequest = function(seccess, seccess2, error) {
    const xhr = new XMLHttpRequest();
    const xhr2 = new XMLHttpRequest();

    xhr2.open('GET', 'https://randomuser.me/api/?results=3&gender=female');

    xhr2.onreadystatechange = function() {
        if(xhr2.readyState === 4) {
            if(xhr2.status >= 200 && xhr2.status < 300) {
                seccess2(xhr2.response);
            }
            else {
                error();
            }
        }
    }
    xhr2.send();

    xhr.open('GET', 'https://randomuser.me/api/?results=3&gender=male');

    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4) {
            if(xhr.status >= 200 && xhr.status < 300) {
                seccess(xhr.response);
            }
            else {
                error();
            }
        }
    }
    xhr.send();
}

realRequest(function(male) {
    console.log(JSON.parse(male));
}, function(female) {
    console.log(JSON.parse(female));
}, function(err) {
    console.log('error')
});

