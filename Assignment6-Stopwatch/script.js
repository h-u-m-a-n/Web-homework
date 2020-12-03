const startBt = document.querySelector('.start');
const stopBt = document.querySelector('.stop');
const resetBt = document.querySelector('.reset');

const s = document.querySelector('.seconds');
const m = document.querySelector('.minutes');
const h = document.querySelector('.hours');

let timer;
function addSec() {
    let sec = parseInt(s.textContent);
    sec++;
    if(sec === 60){
        let min = parseInt(m.textContent);
        min++;
        if(min === 60){
            let hours = parseInt(h.textContent);
            hours++;
            if(hours === 100)
                hours = 0;
            
            h.textContent = ((hours<10)?'0':'')+ hours;
            min = 0;
        }
        m.textContent = ((min<10)?'0':'')+min;
        sec=0;
    }
    s.textContent = ((sec<10)?'0':'') + sec;

}

function start() {
    stop();
    timer = setInterval(addSec, 1);
}

function stop() {
    clearInterval(timer);
}

function reset() {
    stop();
    s.textContent = '00';
    m.textContent = '00';
    h.textContent = '00';
}

startBt.addEventListener('click', start);
stopBt.addEventListener('click', stop);
resetBt.addEventListener('click', reset);