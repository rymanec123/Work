'use strict'
// 1) Сделайте функцию, которая получает имя пользователя и выводит на экран 'Hello, Имя'. 
//  Если имя не передано, функция должна выводить 'Hello, %username%'. 
function aler(name = '%username%') {
    alert(`Hello, ${name}`);
  }
  aler()

// 2) Есть маcсив объектов с информацией о населённых пунктах
// Задача на его основе сделать объект с двумя полями usа  и europe, где значением каждого поля станет массив строк,
//  содержащий релевантные названия городов.
const arr1 = [
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
let obj = arr1.reduce(function(acc, item) {
  item.country === 'USA' ? acc.usa.push(item.city) : acc.europe.push(item.city)

  return acc;
}, {usa: [], europe: []});

console.log(obj);
// 3) Найдите минимальный элемент произвольного массива чисел используя Math и синтаксис es5. Найдите максимальный
//  элемент того же массива, используя Math и синтаксис es6.
const arr2 = [1, 2, 4, 100, 300, -10, -50, 0];

const  min = Math.min.apply(null, arr2);

console.log(min);
//--------------------
const  max = Math.max(...arr2);

console.log(max);
// 4) Напишите функцию, которая принимает два аргумента и возвращает их сумму, затем каррируйте эту функцию до одного аргумента.
function sum(arg, arg2) {
  return arg + arg2
};
const corrSum = sum.bind(null, 2);

console.log(corrSum(3));
// 5) Реализуйте чейн. Вначале задаётся число, затем выполняются арифметические действия, в конце результат выводится в консоль
// setNum(10).plus(7).minus(2).showNum() // 10 + 7 - 2
function setNum(arg) {
  let result = arg;
  return {
    plus(arg2) {
      result += arg2;
      
      return this;
    },
    minus(arg3) {
      result -= arg3;
      
      return this;
    },
    showNum() {
      console.log(result); 
    }
  };
} 
console.log(setNum(10).plus(7).minus(2).showNum());
// 6) Выполните деструктурирующее присваивание переменным полей объекта, полученного в пункте 2.
const {usa: cityUsa, europe: cityEu} = obj;

console.log(cityUsa, cityEu);
// 7) "Натравите" метод printInfo из obj на obj1.
const obj2 = {
  fistName: 'Yura',
  lastName: 'Alekseyev',
  job: 'web developer',
  
  printInfo: function() {
    console.log(`${this.fistName} ${this.lastName} works as ${this.job}.`)
  }
};

const obj1 = {
  fistName: 'John',
  lastName: 'Kalligan',
  job: 'musician'
};
obj2.printInfo.call(obj1);

console.log(obj1);
