
// 1) Добавить элемент в начало массива
var NumLine = ['Строка', 2, 'Автомобиль', 9, 'Телевизор', 8, 'Лампа', 7,  'Коляска', 3, 8, 'Лампа', 8, 'Лампа', 123n, 22n, true, null, undefined,
	{	name: "bike",
		distance: 50,
		tMinuts: 80
    },
    Symbol
]

NumLine.unshift(1);
console.log(NumLine);

// 2) Добавить элемент в конец массива
var NumLine = ['Строка', 2, 'Автомобиль', 9, 'Телевизор', 8, 'Лампа', 7,  'Коляска', 3, 8, 'Лампа', 8, 'Лампа', 123n, 22n, true, null, undefined,
	{	name: "bike",
		distance: 50,
		tMinuts: 80
    },
    Symbol
]

NumLine.push('Шкаф');
console.log(NumLine);

// 3) Удалить элемент из массива (двумя способами)
var NumLine = ['Строка', 2, 'Автомобиль', 9, 'Телевизор', 8, 'Лампа', 7,  'Коляска', 3, 8, 'Лампа', 8, 'Лампа', 123n, 22n, true, null, undefined,
	{	name: "bike",
		distance: 50,
		tMinuts: 80
    },
    Symbol
]

delete NumLine[0];
NumLine.splice(1, 1);
console.log(NumLine);

// 4) Удалить повторяющиеся значения из массива

var NumLine = ['Строка', 2, 'Автомобиль', 9, 'Телевизор', 8, 'Лампа', 7,  'Коляска', 3, 8, 'Лампа', 8, 'Лампа', 123n, 22n, true, null, undefined,
	{	name: "bike",
		distance: 50,
		tMinuts: 80
    },
    Symbol
]

var newNumLine = [];

function qwe(NumLine) {

for(var i=0; i < NumLine.length; i++) {
    if (newNumLine.indexOf(NumLine[i]) < 0) {
        newNumLine.push(NumLine[i]);
     };
   
};
    return newNumLine;
};

console.log(qwe(NumLine));
// 5) Массив содержит числа и строки. Вывести в консоль все числовые значения больше
//  7. Формат вывода - "индекс тире значение"


for(var i=0; i < NumLine.length; i++){
  if(typeof NumLine[i] === 'number' && NumLine[i] > 7){
    console.log(i + ' - ' + NumLine[i]);
  };
};


// 6) Массив содержит числа и строки. Вывести в консоль все строковые значения массива,
//  длина которых больше 5. Формат вывода - "индекс тире значение"
var stingNumLine = NumLine.filter(function(q) {
    return typeof(q) === 'string' && q.length > 5 ;
});
console.log(stingNumLine);
//////////////////////////////
for(var i=0; i < NumLine.length; i++) {
    if(typeof NumLine[i] === 'string' && NumLine[i].length > 5){
        console.log (i+ ' - ' +NumLine[i]);
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
         if (typeof q[i] === 'number') {
           console.log(q[i]+ ' - This is a number');
         }
         else if (typeof q[i] === 'string') {
           console.log(q[i]+ ' - This is a string');
         }
         else {
           console.log(q[i]+ ' - This is some type');
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
  if(q[i].isHidden = 'false') {
    console.log(q[i].message);
  }
}
// 9) Есть массив объектов, содержащих одно единственное поле title. Это поле является произвольной строкой.
//  Задача на его основе создать новый массив, в который будут помещены эти же объекты с дополнительным
// полем titleUppercased, содержащим строку title, но написанную заглавными буквами

var q = [ {  title: 'test' }, {  title: 'test' }, {  title: 'test' }, {  title: 'test' },
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
    if(arr[i] % 2 === 0) {
        console.log(arr[i]+ ' - Even');
    } else {
        console.log(arr[i]+ ' - Odd');
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




  //12) Есть две функции. Первая принимает число в качестве единственного аргумента и возвращает квадрат 
  // этого числа. Вторая функция принимает первую как аргумент, вызывает её у себя внутри, передав любое число. 
  // Результат вызова кладёт в пустой массив и возвращает этот массив.


function num(fun) {
  return  fun * fun;
};

function num2(calc) {
    var result = [];
    result.push(calc(5));

    return result
}
console.log(num2(num));
