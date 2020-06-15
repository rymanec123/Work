'use strict'
import {requestForUsers, requestForCountries} from './arr&STime.js';
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

requestForUsers(function(x) {
  requestForCountries(function(y) {
    const userCountryArr = x.map(item => {
    const {country} = y.find(elem => elem.userId === item.id);

    return {...item, country}
    });
          
    const ul = createList();
   
    function createListItem({fistName, lastName, country}) {
      const li = document.createElement('li');

      li.innerText = `First Name: ${fistName} 
                       Last Name: ${lastName} 
                       Country: ${country}`;

        return li;
    }
 
    for(let i = 0; i < userCountryArr.length; i++) {
      const li = createListItem(userCountryArr[i]);
      
      ul.appendChild(li); 
    }

  document.body.appendChild(ul);
  });
});



  
  

