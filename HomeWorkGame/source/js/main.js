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
    var aimCoords = aimImg.getBoundingClientRect();
    var ghostLeft = ghost.getBoundingClientRect().left + 20;
    var ghostRight = ghost.getBoundingClientRect().right - 20;
    var ghostTop = ghost.getBoundingClientRect().top + 20;
    var ghostBot = ghost.getBoundingClientRect().bottom - 20;
    if(e.keyCode === 32) {
        var aimCenterY = aimCoords.y + aim.offsetHeight / 2;
        var aimCenterX = aimCoords.x + aim.offsetWidth / 2;
        aimImg.style.transform = '';

        console.log(aimCenterX, '|', aimCenterY);
    }
    if (aimCenterX > ghostLeft && aimCenterX < ghostRight 
        && aimCenterY > ghostTop && aimCenterY < ghostBot) {
            fire.setAttribute('style','visibility: visible; transition-delay:'+ imgOpacityDelay +'ms; transition-duration:'+ imgOpacityDuration +'ms; opacity:0;');
            // ghost.setAttribute('style','transition-delay:'+ imgOpacityDelay +'ms; transition-duration:'+ imgOpacityDuration +'ms; opacity:0;');
            ghost.style.transitionDelay = imgOpacityDelay +'ms';
            ghost.style.transitionDuration = imgOpacityDuration +'ms';
            ghost.style.opacity = '0';
            aimImg.style.display = 'none';
            setTimeout(function() {
                ghost.style.transitionDelay = '';
                ghost.style.transitionDuration = '';
                ghost.style.opacity = '';
                ghost.style.display = 'none';
                fire.removeAttribute('style');
                aimImg.style.display = '';
            }, delayToReset);
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
        if(!ghost.style.opacity) {
            setRandomCoords();
    }
}, 3000);