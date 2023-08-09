// Elementos do cronômetro
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
const centisecondsElement = document.getElementById('centiseconds');

// Variáveis do cronômetro
let intervalId;
let centiseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;

// Função para atualizar o cronômetro
function updateCronometro() {
    centiseconds++;
    if (centiseconds > 99) {
        centiseconds = 0;
        seconds++;
        if (seconds > 59) {
            seconds = 0;
            minutes++;
            if (minutes > 59) {
                minutes = 0;
                hours++;
            }
        }
    }

    // Atualiza os elementos no DOM
    centisecondsElement.textContent = centiseconds.toString().padStart(2, '0');
    secondsElement.textContent = seconds.toString().padStart(2, '0');
    minutesElement.textContent = minutes.toString().padStart(2, '0');
    hoursElement.textContent = hours.toString().padStart(2, '0');
}

// Função para iniciar o cronômetro
function startCronometro() {
    intervalId = setInterval(updateCronometro, 10);
    startBtn.disabled = true;
    stopBtn.disabled = false;
    resetBtn.disabled = true;
}

// Função para parar o cronômetro
function stopCronometro() {
    clearInterval(intervalId);
    startBtn.disabled = false;
    stopBtn.disabled = true;
    resetBtn.disabled = false;
}

// Função para zerar o cronômetro
function resetCronometro() {
    clearInterval(intervalId);
    centiseconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;

    // Atualiza os elementos no DOM
    centisecondsElement.textContent = '00';
    secondsElement.textContent = '00';
    minutesElement.textContent = '00';
    hoursElement.textContent = '00';

    startBtn.disabled = false;
    stopBtn.disabled = true;
    resetBtn.disabled = true;
}

// Associar funções aos botões
const startBtn = document.getElementById('startBtn');
startBtn.addEventListener('click', startCronometro);

const stopBtn = document.getElementById('stopBtn');
stopBtn.addEventListener('click', stopCronometro);
stopBtn.disabled = true;

const resetBtn = document.getElementById('resetBtn');
resetBtn.addEventListener('click', resetCronometro);
resetBtn.disabled = true;
