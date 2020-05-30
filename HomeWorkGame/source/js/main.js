var aim = document.querySelector('.b-shooter__aim');
var aimImg = document.querySelector('.b-shooter__img-aim');
var ghost = document.querySelector('.b-shooter__img-ghost');
var shooter = document.querySelector('.b-shooter');
var fire = document.querySelector('.b-shooter__img-fire');
var body = document.body;
var delayToReset = 500;
var imgOpacityDelay = delayToReset * 0.4;
var imgOpacityDuration = delayToReset - imgOpacityDelay;

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

body.addEventListener('keyup', function(e) {
    if(e.keyCode === 32) {
        var aimCoords = aimImg.getBoundingClientRect();
        var ghostLeft = ghost.getBoundingClientRect().left + 20;
        var ghostRight = ghost.getBoundingClientRect().right - 20;
        var ghostTop = ghost.getBoundingClientRect().top + 20;
        var ghostBot = ghost.getBoundingClientRect().bottom - 20;
        var aimCenterY = aimCoords.y + aim.offsetHeight / 2;
        var aimCenterX = aimCoords.x + aim.offsetWidth / 2;
        var animaStyle = 'transition-delay:'+ imgOpacityDelay +'ms; transition-duration:'+ imgOpacityDuration +'ms; opacity:0;';
        aimImg.style.transform = '';

        if (aimCenterX > ghostLeft
            && aimCenterX < ghostRight 
            && aimCenterY > ghostTop 
            && aimCenterY < ghostBot
            ) {
                fire.style.cssText = 'visibility: visible;'+ animaStyle;
                ghost.style.cssText += animaStyle;
                aimImg.style.display = 'none';
                setTimeout(function() {
                    fire.removeAttribute('style');
                    ghost.removeAttribute('style');
                    ghost.style.display = 'none';
                    aimImg.style.display = '';
                   }, delayToReset);
        }
    }
});

function setRandomCoords() {
    var x = Math.floor(Math.random() * (shooter.offsetWidth - ghost.offsetWidth) + 1);
    var y = Math.floor(Math.random() * (shooter.offsetHeight - ghost.offsetHeight) + 1);

    ghost.style.left = x + 'px';
    ghost.style.top = y + 'px';
};

setInterval(function() {
        if(ghost.style.display === 'none') {
        ghost.style.display = ''; 
    }
        setRandomCoords();
}, 3000);