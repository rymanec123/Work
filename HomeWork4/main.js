var earth = document.querySelector('.b-universe__img');
var univers = document.querySelector('.b-universe');

univers.addEventListener('click', function(e) {
    var x = e.offsetX - earth.offsetWidth / 2;
    var y = e.offsetY - earth.offsetHeight / 2;
    var target = e.target;

    if(earth.style.display !== 'none' && e.target.tagName === 'DIV') {

        if(x < 0) {
            x = 0;
        }
        else if(x > 700) {
            x = 700;
        }
        if(y < 0) {
            y = 0;
        }
        else if(y > 450) {
            y = 450;
        }
        console.log(x, y)

        earth.style.transform ='translate(' + x + 'px , ' + y + 'px)';
    }

    if (target.tagName ==='IMG') {
       return earth.style.display = 'none';
    }
    else {
        earth.style.display = '';
    }
});

