'use strict'
import {request, request2} from './arr&STime.js';
// Есть два массива: в первом содержится информация об имени пользователя, во втором - о стране.
//  Сделайте два setTimeout, которые предоставляют эти массивы. Получите сначала массив users, затем массив countries.
//   Когда оба массива получены, сопоставьте страну с пользователям с помощью id и создайте новый массив,
//    который будет содержать объекты такого вида:
//   {
//     id: ...,
//     fistName: ...,
//     lastName: ...,
//     country: ...
//   }

// Создайте список пользователей в html на основе данных из нового массива. 
// В каждом элементе списка покажите firstName, lastName и country конкретного пользователя.

// Разбейте получившийся js-код на два модуля.
function createList() {

  return document.createElement('ul');
}
function createListItem(text) {

  const li = document.createElement('li');
  li.innerText = text;
  
  return li;
}

request(function(x) {
  request2(function(y) {

    const userCountryArr = x.map(item => {

    const {country} = y.find(elem => elem.userId === item.id);

    return {...item, country}
    });
    
    const ul = createList();
    document.body.appendChild(ul);

    function outeList(i, arg) {

      const li = createListItem(`First Name: ${arg[i].fistName} 
                                 Last Name: ${arg[i].lastName} 
                                 Country: ${arg[i].country}`);
       
      ul.appendChild(li);
    }
     for(let i = 0; i < userCountryArr.length; i++) {
      outeList(i, userCountryArr);
    }
  });
});

// request(function(x) {
//   request2(function(y) {
//     let userCountryArr = x.reduce(function(acc, item) {
//       for(let i=0; i < y.length; i++) {
//         if(y[i].userId === item.id) {
//           item.country = y[i].country;
//           acc.push(item);
//         }
//       }
//       return acc;
//     }, []);
//   });
// });


  
  
