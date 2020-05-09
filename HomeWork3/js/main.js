var el = document.body;
var btn = document.getElementsByClassName('l-tasks__btn _toggle')[0];
var btn2 = document.getElementsByClassName('l-tasks__btn _remove')[0];
var span = document.getElementsByClassName('l-tasks__span');
var itemText = document.getElementsByClassName('l-tasks__item-text')[0];

var clickHandler = function(){
  el.classList.toggle('_color-schemie-light');
}
btn.addEventListener('click',clickHandler);


var removeSpan = function() {

  if(el.classList.contains('_color-schemie-light')) {
  span[9].remove(); 
    }
  else {
  span[0].remove();
  }
  btn2.removeEventListener('click',removeSpan);
}
btn2.addEventListener('click',removeSpan);


(function(num) {
  var type = ' odd';

  if(typeof num !== "number") {
    return itemText.textContent ='This is not a number';
  }
  else if(typeof num % 2 === 0) {
    type = ' even';
  }
  itemText.textContent ='This is a number: '+ num + type;
}(3));
