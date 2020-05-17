var body = document.body;
var form = document.querySelector('.form');
var but = document.querySelector('button');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    var emailValue = e.target.elements.email.value;
    var passValue = e.target.elements.password.value;

    if(!emailValue || !passValue) {
        alert('Поля не дожны быть пустыми!');
    }
    else if(passValue.length < 10) {
        alert('Пароль не менее 10-ти символов')
    }
});

but.addEventListener('click', function(e) {
    e.stopPropagation();
});

body.addEventListener('click', function(e) {
    e.stopImmediatePropagation();
    console.log('body_1');
});
body.addEventListener('click', function(e) {
    console.log('body_2');
});
body.addEventListener('click', function(e) {
    console.log('body_3');
});