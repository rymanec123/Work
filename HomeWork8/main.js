'use strict'
// 1) Сделайте функцию, которая получает имя пользователя и выводит на экран 'Hello, Имя'. 
//  Если имя не передано, функция должна выводить 'Hello, %username%'. 
function aler(name) {
    if(typeof name === 'undefined') {
      name = '%username%';
    }
    alert(`Hello, ${name}`);
    
  }
  
  aler()

// 2) Есть маcсив объектов с информацией о населённых пунктах
// Задача на его основе сделать объект с двумя полями usа  и europe, где значением каждого поля станет массив строк,
//  содержащий релевантные названия городов.
const arr = [
  {
    city: 'New York',
    country: 'USA'
  },
  {
    city: 'Paris',
    country: 'France'
  },
  {
    city: 'San Francisco',
    country: 'USA'
  },
  {
    city: 'Minsk',
    country: 'Belarus'
  }
];
let obj = arr.reduce(function(acc, item) {
  if(item.country === 'USA') {
    acc.usa.push(item.city);
  } else {
    acc.europe.push(item.city);
  }

  return acc;
}, {usa: [], europe: []});
// 3) Найдите минимальный элемент произвольного массива чисел используя Math и синтаксис es5. Найдите максимальный
//  элемент того же массива, используя Math и синтаксис es6.
let arr = [1, 2, 4, 100, 300, -10, -50, 0];

let min = Math.min.apply(null, arr);
//--------------------
let max = Math.max(...arr);
// 4) Напишите функцию, которая принимает два аргумента и возвращает их сумму, затем каррируйте эту функцию до одного аргумента.
function sum(arg, arg2) {
  return arg + arg2
};
let corrSum = sum.bind(null, 2);
console.log(corrSum(3));

// 5) Реализуйте чейн. Вначале задаётся число, затем выполняются арифметические действия, в конце результат выводится в консоль
// setNum(10).plus(7).minus(2).showNum() // 10 + 7 - 2


// 6) Выполните деструктурирующее присваивание переменным полей объекта, полученного в пункте 2.


// 7) "Натравите" метод printInfo из obj на obj1.

// const obj = {
//   fistName: 'Yura',
//   lastName: 'Alekseyev',
//   job: 'web developer',
  
//   printInfo: function() {
//     console.log(`${this.fistName} ${this.lastName} works as ${this.job}.`)
//   }
// };

// const obj1 = {
//   fistName: 'John',
//   lastName: 'Kalligan',
//   job: 'musician'
// };
