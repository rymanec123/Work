var aim = document.querySelector('.b-shooter__aim');
var aimImg = document.querySelector('.b-shooter__img-aim');
var shooter = document.querySelector('.b-shooter');

shooter.addEventListener('click', function(e) {
    var x = e.offsetX - aim.offsetWidth / 2;
    var y = e.offsetY - aim.offsetHeight / 2;
    var limitX = shooter.offsetWidth - aim.offsetWidth;
    var limitY = shooter.offsetHeight - aim.offsetHeight;

    if(x < 0) {
        x = 0;
    }
    else if(x > limitX) {
        x = limitX;
    }
    if(y < 0) {
        y = 0;
    }
    else if(y > limitY) {
        y = limitY;
    }
    aim.style.transform ='translate(' + x + 'px , ' + y + 'px)';
});

document.addEventListener('keydown', function(e) {
    if(e.keyCode === 13) {
        aimImg.style.transform = 'scale(0.9)';
    }
});
document.addEventListener('keyup', function(e) {
    if(e.keyCode === 13) {
        aimImg.style.transform = '';
    }
});