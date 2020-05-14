var imgEarth = document.querySelector('.b-universe__img');
var univers = document.querySelector('.b-universe');
var limitX = univers.offsetWidth - imgEarth.offsetWidth;
var limitY = univers.offsetHeight - imgEarth.offsetHeight;

univers.addEventListener('click', function(e) {
    var x = e.offsetX - imgEarth.offsetWidth / 2;
    var y = e.offsetY - imgEarth.offsetHeight / 2;
    var target = e.target;

    if  (imgEarth.style.display === 'none') {
        return imgEarth.style.display = '';
    }
    if (target.tagName.toLowerCase() ==='img') {
        return imgEarth.style.display = 'none';
    }

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

    imgEarth.style.transform ='translate(' + x + 'px , ' + y + 'px)';
});

