
// 1) Добавить элемент в начало массива
var numLine = ['Строка', 2, 'Автомобиль', 9, 'Телевизор', 8, 'Лампа', 7,  'Коляска', 3, 8, 'Лампа', 8, 'Лампа', 123n, 22n, true, null, undefined,
	{	name: "bike",
		distance: 50,
		tMinuts: 80
    },
    Symbol
]

numLine.unshift(1);
console.log(numLine);

// 2) Добавить элемент в конец массива
var numLine = ['Строка', 2, 'Автомобиль', 9, 'Телевизор', 8, 'Лампа', 7,  'Коляска', 3, 8, 'Лампа', 8, 'Лампа', 123n, 22n, true, null, undefined,
	{	name: "bike",
		distance: 50,
		tMinuts: 80
    },
    Symbol
]

numLine.push('Шкаф');
console.log(numLine);

// 3) Удалить элемент из массива (двумя способами)
var numLine = ['Строка', 2, 'Автомобиль', 9, 'Телевизор', 8, 'Лампа', 7,  'Коляска', 3, 8, 'Лампа', 8, 'Лампа', 123n, 22n, true, null, undefined,
	{	name: "bike",
		distance: 50,
		tMinuts: 80
    },
    Symbol
]

delete numLine[0];
numLine.splice(1, 1);
console.log(numLine);

// 4) Удалить повторяющиеся значения из массива

var numLine = ['Строка', 2, 'Автомобиль', 9, 'Телевизор', 8, 'Лампа', 7,  'Коляска', 3, 8, 'Лампа', 8, 'Лампа', 123n, 22n, true, null, undefined,
	{	name: "bike",
		distance: 50,
		tMinuts: 80
    },
    Symbol
]

var newnumLine = [];

function qwe(numLine) {

for(var i=0; i < numLine.length; i++) {
    if (newnumLine.indexOf(numLine[i]) < 0) {
        newnumLine.push(numLine[i]);
     };
   
};
    return newnumLine;
};

console.log(qwe(numLine));
// 5) Массив содержит числа и строки. Вывести в консоль все числовые значения больше
//  7. Формат вывода - "индекс тире значение"


for(var i=0; i < numLine.length; i++){
  if(typeof numLine[i] === 'number' && numLine[i] > 7){
    console.log(i + ' - ' + numLine[i]);
  };
};


// 6) Массив содержит числа и строки. Вывести в консоль все строковые значения массива,
//  длина которых больше 5. Формат вывода - "индекс тире значение"
for(var i=0; i < numLine.length; i++) {
    if(typeof numLine[i] === 'string' && numLine[i].length > 5){
        console.log (i+ ' - ' +numLine[i]);
    };
};

// 7) Массив содержит все возможные типы данных в произвольном порядке. Задача перебрать
//  массив и вывести сообщение на каждую итерацию. Сообщение будет содержать текст "This is a number",
//  если текущий тип - это number, "This is a string", если текущий тип - string и "This is some type",
//  если текущий тип не string и не number
var q = ['Строка', 2, 'Автомобиль', 9, 'Телевизор', 8, 'Лампа', 7,  'Коляска', 3, 8, 'Лампа', 8, 'Лампа', 123n, 22n, true, null, undefined,
	{	name: "bike",
		distance: 50,
		tMinuts: 80
    },
    Symbol
         ]

 for(var i=0; i < q.length; i++) {
     var arr = q[i];
         if (typeof arr === 'number') {
           console.log(arr+ ' - This is a number');
         }
         else if (typeof arr === 'string') {
           console.log(arr+ ' - This is a string');
         }
         else {
           console.log(arr+ ' - This is some type');
         }
}

// 8) Массив содержит несколько объектов следующего вида:
// {
//     id: 1,
//     message: 'Test',
//     isHidden: true
// }
// Поле id содержит произвольную цифру, message - произвольный текст, isHidden - true либо false.
//  Задача пробежаться циклом по массиву и вывести message тех объектов, у которых isHidden не true
var q = [{id: 1, message: 'Test', isHidden: true},
         {id: 2, message: 'Test2', isHidden: true},
         {id: 3, message: 'Test3', isHidden: false},
         {id: 4, message: 'Test4', isHidden: false}]
 
for(var i=0; i < q.length; i++) {
  if(!q[i].isHidden) {
    console.log(q[i].message);
  }
}
// 9) Есть массив объектов, содержащих одно единственное поле title. Это поле является произвольной строкой.
//  Задача на его основе создать новый массив, в который будут помещены эти же объекты с дополнительным
// полем titleUppercased, содержащим строку title, но написанную заглавными буквами

var array = [ {  title: 'test' }, {  title: 'test' }, {  title: 'test' }, {  title: 'test' },
            {  title: 'test' }, {  title: 'test' }];
var newArray = []; 

for (var i=0; i < array.length; i++) {
  newArray[i] = {
    title: array[i].title,
    titleUppercased: array[i].title.toUpperCase()
  };
}
console.log(newArray);

// 10) Есть массив строк. Задача перебрать массив и вывести только те элементы, в которых содержится буква 'u'
var arr = ['languages', 'pronunciation', 'supports', 'russian', 'online', 'Free', 'German', 'small ']

for(var i=0; i < arr.length; i++) {
    if(arr[i].indexOf('u') > -1) {
        console.log(arr[i]);
    }
}

// 11) Есть массив произвольных чисел. Задача перебрать массив и вывести в консоль сообщение на каждую итерацию
//  о том чётное перед нами число, либо нечётное
var arr = [5, 3, 4, 7, 9, 12, 2, 14, 8]

for(i=0; i < arr.length; i++) {
    var ar = arr[i]
    if(ar % 2 === 0) {
        console.log(ar+ ' - Even');
    } else {
        console.log(ar+ ' - Odd');
    };
}
// 12) Есть две функции. Первая принимает число в качестве единственного аргумента и возвращает квадрат 
// этого числа. Вторая функция принимает первую как аргумент, вызывает её у себя внутри, передав любое число. 
// Результат вызова кладёт в пустой массив и возвращает этот массив.

function num(func) {
    return func ** 2;
 }
 
 function num2(calc) {
   var result = [];
   result.push(calc(7));
   return result
 }
 console.log(num2(num));