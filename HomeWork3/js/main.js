var el = document.body;
var btn = document.getElementsByClassName('l-tasks__btn_toggle')[0];

var clickHandler = function(){
  el.classList.toggle('_color-schemie-light');
}
btn.addEventListener('click',clickHandler);

var btn2 = document.getElementsByClassName('l-tasks__btn_remove')[0];
var span = document.getElementsByClassName('l-tasks__span');
var removeSpan = function(){

     if(document.body.classList.contains('_color-schemie-light')){

      span[9].remove('l-tasks__span'); 
  
     }
     else{
      span[0].remove('l-tasks__span');
     }
     btn2.removeEventListener('click',removeSpan);
    }
    btn2.addEventListener('click',removeSpan);


var result = function(num) {
  
  if( typeof num ==='number' && num % 2==0){
    document.getElementsByClassName('l-tasks__item-text')[0].textContent ='This is a number: '+ num +'even';
  }
  else
    if(typeof num ==='number' && num % 2!==0){
     document.getElementsByClassName('l-tasks__item-text')[0].textContent ='This is a number:'+' ' + num +'odd';
  } 
    else {
     document.getElementsByClassName('l-tasks__item-text')[0].textContent ='This is not a number';
   };
   
  };
  result(4);
  