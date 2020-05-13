var earth = document.querySelector('img');
var univers = document.querySelector('div');


univers.addEventListener('click', function(e) {
    var x = e.offsetX - earth.offsetWidth / 2 - 100;
    var y = e.offsetY - earth.offsetHeight / 2 - 150;
    var target = e.target;

    if(earth.style.display !== 'none' && e.target.tagName === 'DIV') {

    if(x < -100) {
        x = -100;
    }
    else if(x > 600) {
        x = 600;
    }
    if(y < -150) {
        y = -150;
    }
    else if(y > 300) {
        y = 300;
    }

    earth.style.transform ='translate(' + x + 'px , ' + y + 'px)';
    console.log(earth.style.transform);
    }

    if (target.tagName ==='IMG') {
        earth.style.display = 'none';
    }
    else {
        earth.style.display = '';
    }
    console.log(target.tagName);

});

