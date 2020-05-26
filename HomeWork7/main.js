// 1) Создайте массив произвольных значений. Скопируйте массив таким образом, чтобы изменение копии не мутировало оригинал.
var arr = ['Строка', 2, 'Автомобиль', 9, 'Телевизор', 8, 'Лампа', 7,  'Коляска', 3, 8, 'Лампа', 8, 'Лампа', 123n, 22n, true, null, undefined,
{	name: "bike",
    distance: 50,
    tMinuts: 80
},
Symbol
];

var copArr = arr.slice();

console.log(copArr);

// 2) Создайте объект с произвольными свойствами. Скопируйте объект таким образом, чтобы изменение копии не мутировало оригинал.
var obj = {	name: "bike",
distance: 50,
tMinuts: 80
};
var newObj = {};

for (var key in obj) {
  newObj[key] = obj[key];
}

// 3) Напишите функцию printSquareRoot, которая принимает два аргумента: число и функцию. Внутри себя printSquareRoot вызывает
//  пришедшую из аргумента функцию, передав ей пришедшее из аргумента число. В свою очередь вызванная функция должна выводить
//   в консоль квадратный корень полученного числа.
function printSquareRoot(func, num) {
    func(num);
  }
  
  printSquareRoot(function (x) {
    console.log(Math.sqrt(x));
  }, 9);
// 4) Внутри функции имеется пустой массив. Организуйте замыкание по аналогии со счётчиком, чтобы пустой массив наполнялся из 
// аргументов вызова. Напишите проверку на количество элементов. Если в массиве их станет пять, а новый пришедший аргумент должен
//  быть шестым, то массив очищается, и начинает наполняться заново (агрумент текущего вызова станет нулевым элементом, следующего - первым и т.д.).
function outer() {
    var arr = [];
     
     return function inner(arg) {
       if(arr.length < 5) {
         arr.push(arg);
       }
       else {
         arr.length = 0;
         arr.push(arg)
       }
       console.log(arr);
     }
   }
  
  var result = outer();
  
  result('1');
  result('2');
  result('3');
  result('4');
  result('5');
  result('6');
  result('7');
  result('8');
// 5) Добавьте элемент button в html и привяжите к нему событие клик, которое будет считать количество нажатий и выводить
//  его в текст кнопки. Количество нажатий должно сохраняться в замыкании.


window.load = function() {
  var btn = document.querySelector('button');
  count = 0;
   btn.addEventListener('click', function() {
        count++;
        btn.innerHTML = 'счёт нажатий: ' + count;
        })
}
