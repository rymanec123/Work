'use strict';

const aim = document.querySelector('.b-shooter__aim');
const aimImg = document.querySelector('.b-shooter__img-aim');
const ghost = document.querySelector('.b-shooter__img-ghost');
const shooter = document.querySelector('.b-shooter');
const fire = document.querySelector('.b-shooter__img-fire');
const progressBar = document.querySelector('.b-shooter__progress')
const progressIcon = document.getElementsByClassName('b-shooter__progress-icon');
const healthIcon = document.getElementsByClassName('b-shooter__health-icon');
const healthBar = document.querySelector('.b-shooter__health');
const health = document.getElementsByClassName('b-shooter__health-icon');
const shooterGameOver = document.querySelector('.b-shooter__game-over');
const shooterGameOverTitle = document.querySelector('.b-shooter__game-over-title');
const body = document.body;
const delayToReset = 500;
const imgOpacityDelay = delayToReset * 0.4;
let imgOpacityDuration = delayToReset - imgOpacityDelay;
let isGameOver = false;

shooter.addEventListener('click', function(e) {
    if(ghost.style.animationPlayState || isGameOver) {
        return;
    }

    const x1 = e.offsetX - aim.offsetWidth / 2;
    const y1 = e.offsetY - aim.offsetHeight / 2;
    const limitX = shooter.offsetWidth - aim.offsetWidth;
    const limitY = shooter.offsetHeight - aim.offsetHeight;

        if(x1 < 0) {
            x1 = 0;
        }
        else if(x1 > limitX) {
            x1 = limitX;
        }
        if(y1 < 0) {
            y1 = 0;
        }
        else if(y1 > limitY) {
            y1 = limitY;
        }
        
        aim.style.transform ='translate(' + x1 + 'px , ' + y1 + 'px)';
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

    const aimCoords = aimImg.getBoundingClientRect();
    const  ghostCoords = ghost.getBoundingClientRect();
    const aimCenterY = aimCoords.y + aim.offsetHeight / 2;
    const aimCenterX = aimCoords.x + aim.offsetWidth / 2;
    let animaStyle = 'transition-delay:'+ imgOpacityDelay +'ms; transition-duration:'+ imgOpacityDuration +'ms; opacity:0;';
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
    let x = Math.floor(Math.random() * (shooter.offsetWidth - ghost.offsetWidth) + 1);
    let y = Math.floor(Math.random() * (shooter.offsetHeight - ghost.offsetHeight) + 1);

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

const markProgress = () => {
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


const markLifeStatus = () => {
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