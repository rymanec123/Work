
// 1) �������� ������� � ������ �������
var NumLine = ['������', 2, '����������', 9, '���������', 8, '�����', 7,  '�������', 3, 8, '�����', 8, '�����', 123n, 22n, true, null, undefined,
	{	name: "bike",
		distance: 50,
		tMinuts: 80
    },
    Symbol
]

NumLine.unshift(1);
console.log(NumLine);

// 2) �������� ������� � ����� �������
var NumLine = ['������', 2, '����������', 9, '���������', 8, '�����', 7,  '�������', 3, 8, '�����', 8, '�����', 123n, 22n, true, null, undefined,
	{	name: "bike",
		distance: 50,
		tMinuts: 80
    },
    Symbol
]

NumLine.push('����');
console.log(NumLine);

// 3) ������� ������� �� ������� (����� ���������)
var NumLine = ['������', 2, '����������', 9, '���������', 8, '�����', 7,  '�������', 3, 8, '�����', 8, '�����', 123n, 22n, true, null, undefined,
	{	name: "bike",
		distance: 50,
		tMinuts: 80
    },
    Symbol
]

delete NumLine[0];
NumLine.splice(1, 1);
console.log(NumLine);

// 4) ������� ������������� �������� �� �������

var NumLine = ['������', 2, '����������', 9, '���������', 8, '�����', 7,  '�������', 3, 8, '�����', 8, '�����', 123n, 22n, true, null, undefined,
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
// 5) ������ �������� ����� � ������. ������� � ������� ��� �������� �������� ������
//  7. ������ ������ - "������ ���� ��������"


for(var i=0; i < NumLine.length; i++){
  if(typeof NumLine[i] === 'number' && NumLine[i] > 7){
    console.log(i + ' - ' + NumLine[i]);
  };
};


// 6) ������ �������� ����� � ������. ������� � ������� ��� ��������� �������� �������,
//  ����� ������� ������ 5. ������ ������ - "������ ���� ��������"
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

// 7) ������ �������� ��� ��������� ���� ������ � ������������ �������. ������ ���������
//  ������ � ������� ��������� �� ������ ��������. ��������� ����� ��������� ����� "This is a number",
//  ���� ������� ��� - ��� number, "This is a string", ���� ������� ��� - string � "This is some type",
//  ���� ������� ��� �� string � �� number
var q = ['������', 2, '����������', 9, '���������', 8, '�����', 7,  '�������', 3, 8, '�����', 8, '�����', 123n, 22n, true, null, undefined,
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

// 8) ������ �������� ��������� �������� ���������� ����:
// {
//     id: 1,
//     message: 'Test',
//     isHidden: true
// }
// ���� id �������� ������������ �����, message - ������������ �����, isHidden - true ���� false.
//  ������ ����������� ������ �� ������� � ������� message ��� ��������, � ������� isHidden �� true
var q = [{id: 1, message: 'Test', isHidden: true},
         {id: 2, message: 'Test2', isHidden: true},
         {id: 3, message: 'Test3', isHidden: false},
         {id: 4, message: 'Test4', isHidden: false}]
 
for(var i=0; i < q.length; i++) {
  if(q[i].isHidden = 'false') {
    console.log(q[i].message);
  }
}
// 9) ���� ������ ��������, ���������� ���� ������������ ���� title. ��� ���� �������� ������������ �������.
//  ������ �� ��� ������ ������� ����� ������, � ������� ����� �������� ��� �� ������� � ��������������
// ����� titleUppercased, ���������� ������ title, �� ���������� ���������� �������

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

// 10) ���� ������ �����. ������ ��������� ������ � ������� ������ �� ��������, � ������� ���������� ����� 'u'
var arr = ['languages', 'pronunciation', 'supports', 'russian', 'online', 'Free', 'German', 'small ']

for(var i=0; i < arr.length; i++) {
    if(arr[i].indexOf('u') > -1) {
        console.log(arr[i]);
    }
}

// 11) ���� ������ ������������ �����. ������ ��������� ������ � ������� � ������� ��������� �� ������ ��������
//  � ��� ������ ����� ���� �����, ���� ��������
var arr = [5, 3, 4, 7, 9, 12, 2, 14, 8]

for(i=0; i < arr.length; i++) {
    if(arr[i] % 2 === 0) {
        console.log(arr[i]+ ' - Even');
    } else {
        console.log(arr[i]+ ' - Odd');
    };
}
// 12) ���� ��� �������. ������ ��������� ����� � �������� ������������� ��������� � ���������� ������� 
// ����� �����. ������ ������� ��������� ������ ��� ��������, �������� � � ���� ������, ������� ����� �����. 
// ��������� ������ ����� � ������ ������ � ���������� ���� ������.

function num(func) {
    return func ** 2;
 }
 
 function num2(calc) {
   var result = [];
   result.push(calc(7));
   return result
 }
 console.log(num2(num));




  //12) ���� ��� �������. ������ ��������� ����� � �������� ������������� ��������� � ���������� ������� 
  // ����� �����. ������ ������� ��������� ������ ��� ��������, �������� � � ���� ������, ������� ����� �����. 
  // ��������� ������ ����� � ������ ������ � ���������� ���� ������.


function num(fun) {
  return  fun * fun;
};

function num2(calc) {
    var result = [];
    result.push(calc(5));

    return result
}
console.log(num2(num));
