var colors = [];
var obj = {
    field1: 'test1',
    field2: 'test2',
    field3: ['#00bcd4', ' #ffc107', '#2196f3'],
    field4: 'test4',
    field5: 'test5'
  };
var body = document.body;
var buttonColor = document.querySelector('button');
var counter;

buttonColor.addEventListener('click', function(e) {
   if (!colors.length) {
    for (var prop in obj) {
      if(Array.isArray(obj[prop])) {
        colors = obj[prop];
      }
    }
  }

  counter = Math.floor(Math.random() * (colors.length));
  body.style.backgroundColor = colors[counter];
  });

  document.addEventListener('keydown', function(e) {
    if(e.keyCode === 39) {
      if (counter === colors.length-1) {
        counter = 0;
        }
        else if (counter >= 0) {
        counter++;
        } 
        else {
            alert('Достаньте массив цветов!');
          }
    } 
     else if(e.keyCode === 37) {
       if(counter === 0) {
          counter =  colors.length-1;
        }
        else if(counter <= colors.length-1) {
          counter--;
        }
        else {
            alert('Достаньте массив цветов!');
          }
      }
    body.style.backgroundColor = colors[counter];
  });