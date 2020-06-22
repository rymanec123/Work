'use strict'
const requestForUsers = function(seccess, error, typeUsers) {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://randomuser.me/api/?results=3' +typeUsers);

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

const conteiner = document.querySelector('.conteiner')
let arrMale;
let arrFemale;

function createList() {

    return document.createElement('ul');
}

const errorHandler = errorObj  => console.log(errorObj);
function arrUnion() {
    if(Array.isArray(arrMale) && Array.isArray(arrFemale)) {
        const arrUsers = [...arrMale, ...arrFemale];
        const ul = createList();
   
        function createListItem(firstName, lastName, picture) {
            const li = document.createElement('li');
            const img = document.createElement('img');
            const div = document.createElement('div');
            const divText = document.createElement('div');

            divText.innerText = `${firstName} ${lastName}`;

            img.setAttribute('src', picture);
            div.setAttribute('class', 'div_img');
            divText.setAttribute('class', 'div_name');

            div.appendChild(img)
            li.appendChild(div);
            li.appendChild(divText)

            return li;
        }
     
        for(let i = 0; i < arrUsers.length; i++) {
          const li = createListItem(arrUsers[i].name.first, arrUsers[i].name.last, arrUsers[i].picture.large);

          ul.appendChild(li); 
        }
        conteiner.appendChild(ul);
    }
}

requestForUsers(function(male) {
    arrMale = male.results;
    arrUnion();
}, errorHandler, '&gender=male');

requestForUsers(function(female) {
    arrFemale = female.results;
    arrUnion();
}, errorHandler, '&gender=female');


