//selecionando os elementos
let digitalElement = document.querySelector('.digital');

let sElement = document.querySelector('.p_s');
let mElement = document.querySelector('.p_m')
let hElement = document.querySelector('.p_h')

//function principal de atualizção das hpras
function updateClock(){
    //relógio digital
    let now = new Date();

    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`


    //relogio analógico
    let sDeg = (360 /60) * second;
    let mDeg = (360 /60) * minute;
    //let hDeg = (360 /12) * hour;

    sElement.style.transform = `rotate(${sDeg}deg)`;
    mElement.style.transform = `rotate(${mDeg}deg)`;
    hElement.style.transform = `rotate(${quarterHour(hour, minute)}deg)`;
};

function fixZero(time){
    return time < 10 ? `0${time}` : time;
}

//function q faz o ponteiros de horas mudar de 15 em 15 minutes e não só de uma hora pra outra diretamente
function quarterHour(hour, minute) {
    let hDeg = ((360 / 12) * hour);
   
    let Quarter;
    if(minute >= 15 && minute < 30) {
        Quarter = hDeg + 7.5;
    } else if(minute >= 30 && minute < 45) {
        Quarter = hDeg + 15;
    } else if(minute >= 45) {
        Quarter = hDeg + 22.5;
    } else {
        Quarter = hDeg;
    }
    return Quarter;
};

//chamada da function
setInterval(updateClock, 1000);

//chama a funçao uma primeira vez não fazendo q o usurairo espere 1 segundo pra atualizar o relógio
updateClock();