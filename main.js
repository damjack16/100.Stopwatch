const startBtn = document.querySelector('.main');
const resetBtn = document.querySelector('.reset');
const div = document.querySelector('.time div');

let time = 0;
let active = false;
let minute = 0;

const start = () => {
    if (active == false) {
        active = !active;
        startBtn.textContent = "Pauza";
        indexInterval = setInterval(timer, 10)
    } else {
        active = !active;
        startBtn.textContent = "Start"
        clearInterval(indexInterval);
    }

}

const timer = () => {
    if (time < 6000) {
        time++;
        div.textContent = `${minute}:${((time) / 100).toFixed(2)}`;
        if (time < 1000) {
            div.textContent = `${minute}:0${((time) / 100).toFixed(2)}`;
        }
    } else if (time % 6000 === 0) {
        time = 0;
        minute++;
        time++;
        div.textContent = `${minute}:${((time) / 100).toFixed(2)}`;
    }


}

const reset = () => {
    if (active === false) {
        time = 0;
        minute = 0;
        div.textContent = "---";
    }
}


startBtn.addEventListener('click', start);
resetBtn.addEventListener('click', reset);