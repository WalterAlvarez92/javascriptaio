const ball = document.getElementById('ball');
document.addEventListener('keydown', handleKeyPress);
let posistion = 0;

function handleKeyPress(e) 
{
    if (e.code === 'ArrowLeft') {
        posistion = posistion - 10;
    }

    if (e.code === 'ArrowRight') {
        posistion = posistion + 10;
    }

  

    if (posistion < 0) {
        posistion = 0;
    }
    refresh();
}

function refresh() {
    ball.style.left = posistion + 'px';
}