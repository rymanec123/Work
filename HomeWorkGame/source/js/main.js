var aim = document.querySelector('.b-shooter__aim');
var aimImg = document.querySelector('.b-shooter__img-aim');
var ghost = document.querySelector('.b-shooter__img-ghost');
var shooter = document.querySelector('.b-shooter');
var fire = document.querySelector('.b-shooter__img-fire');
var progressBar = document.querySelector('.b-shooter__progress')
var progressIcon = document.getElementsByClassName('b-shooter__progress-icon');
var healthIcon = document.getElementsByClassName('b-shooter__health-icon');
var healthBar = document.querySelector('.b-shooter__health');
var health = document.getElementsByClassName('b-shooter__health-icon');
var shooterGameOver = document.querySelector('.b-shooter__game-over');
var shooterGameOverTitle = document.querySelector('.b-shooter__game-over-title');
var body = document.body;
var delayToReset = 500;
var imgOpacityDelay = delayToReset * 0.4;
var imgOpacityDuration = delayToReset - imgOpacityDelay;
var isGameOver = false;

shooter.addEventListener('click', function(e) {
    if(ghost.style.animationPlayState || isGameOver) {
        return;
    }

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
    if (e.keyCode === 13 && isGameOver) {
        reset();
    }

    if(e.keyCode !== 32 || isGameOver) {
        return
    }

    var aimCoords = aimImg.getBoundingClientRect();
    var  ghostCoords = ghost.getBoundingClientRect();
    var aimCenterY = aimCoords.y + aim.offsetHeight / 2;
    var aimCenterX = aimCoords.x + aim.offsetWidth / 2;
    var animaStyle = 'transition-delay:'+ imgOpacityDelay +'ms; transition-duration:'+ imgOpacityDuration +'ms; opacity:0;';
    aimImg.style.transform = '';

    if (aimCenterX > ghostCoords.left + 20
        && aimCenterX < ghostCoords.right - 20
        && aimCenterY > ghostCoords.top + 20
        && aimCenterY < ghostCoords.bottom - 20
        ) {
            fire.style.cssText = 'visibility: visible;'+ animaStyle;
            ghost.style.cssText += animaStyle +'animation-play-state: paused;';
            aimImg.style.display = 'none';

            setTimeout(function() {
                if(isGameOver) {
                    dropTheCurtain(true);
                } else {
                    fire.removeAttribute('style');
                    ghost.removeAttribute('style');
                    ghost.style.display = 'none';
                    aimImg.style.display = '';
                }
            }, delayToReset);

            markProgress();
    }
});

function setRandomCoords() {
    var x = Math.floor(Math.random() * (shooter.offsetWidth - ghost.offsetWidth) + 1);
    var y = Math.floor(Math.random() * (shooter.offsetHeight - ghost.offsetHeight) + 1);

    ghost.style.left = x + 'px';
    ghost.style.top = y + 'px';
};

setInterval(function() {
    if (ghost.style.animationPlayState ==='paused') {

        return
    } 
    
    if(ghost.style.display === 'none') {
        ghost.style.display = ''; 
        setRandomCoords();

    } else {
        setRandomCoords();
        markLifeStatus();
    }
}, 3000);

markProgress = () => {
    for (let i = 0; i < progressIcon.length; i++) {
        if (!progressIcon[i].classList.contains('_hitTheGhost')) {
            progressIcon[i].classList.add('_hitTheGhost');

            if (i === progressIcon.length-1) {
                isGameOver = true;
            };

        break;
        }
    }
};

function dropTheCurtain (isWin) {
    if(isWin) {
        shooter.classList.add('_win');
        shooterGameOverTitle.innerText = 'You Win';
        healthBar.style.display = 'none';
        progressBar.style.display = 'none';
      
    }  else {
        shooter.classList.add('_lose');
        shooterGameOverTitle.innerText = 'You Lose';
        ghost.removeAttribute('style');
        healthBar.style.display = 'none';
        progressBar.style.display = 'none';
        aimImg.style.display = 'none';
    }
}

markLifeStatus = () => {
    if (healthBar.classList.contains('_flashingHealthBar')) {
        isGameOver = true;
        dropTheCurtain(false)

        return;
    }
  
    for (let i = 0; i < health.length; i++) {
        if (!health[i].classList.contains('_healthLost')) {
            health[i].classList.add('_healthLost');
  
            if (i === health.length - 1) {
                healthBar.classList.add('_flashingHealthBar');
            }
  
        break;
        }
    }
}

function reset() {
    isGameOver = false;
    healthBar.classList.remove('_flashingHealthBar');
    shooter.classList.remove('_win');
    shooter.classList.remove('_lose');
    ghost.removeAttribute('style');
    ghost.style.display = ('none');
    fire.removeAttribute('style');
    aimImg.removeAttribute('style');
    healthBar.style.display = '';
    progressBar.style.display = '';
    aimImg.style.display = '';
  
    for (let i = 0; i < progressIcon.length; i++) {
      if (progressIcon[i].classList.contains('_hitTheGhost')) {
          progressIcon[i].classList.remove('_hitTheGhost');
      };
    };
  
    for (let i = 0; i < health.length; i++) {
        if (health[i].classList.contains('_healthLost')) {
            health[i].classList.remove('_healthLost');
        };
    };
  }