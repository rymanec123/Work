var aim = document.querySelector('.b-shooter__aim');
var aimImg = document.querySelector('.b-shooter__img-aim');
var ghost = document.querySelector('.b-shooter__img-ghost');
var shooter = document.querySelector('.b-shooter');
var body = document.body;

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

body.addEventListener('keydown', function(e) {
    if(e.keyCode === 32) {
        e.preventDefault();
        aimImg.style.transform = 'scale(0.9)';
    }
});
document.addEventListener('keyup', function(e) {
    var locationY = aimImg.getBoundingClientRect().y;
    var locationX = aimImg.getBoundingClientRect().x;
    if(e.keyCode === 32) {
        var aimCenterY = locationY - aim.offsetHeight / 2;
        var aimCenterX = locationX -  aim.offsetWidth / 2;
        aimImg.style.transform = '';

        console.log(aimCenterX, '|', aimCenterY);
    }
});

function setRandomCoords() {
    var x = Math.floor(Math.random() * (shooter.offsetWidth - ghost.offsetWidth));
    var y = Math.floor(Math.random() * (shooter.offsetHeight - ghost.offsetHeight));

    ghost.style.left = x + 'px';
    ghost.style.top = y + 'px';
};
setInterval(function() {
    if(ghost.style.display === 'none') {
        ghost.style.display = ''; 
    }
    setRandomCoords();
}, 3000);