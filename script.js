/* add mobile container */

const containerDesktop = document.querySelectorAll('.container');

function checkScreenSize() {
    if (window.innerWidth < 485) {
        containerDesktop.forEach(el => {
            if (el.classList.contains('container--lg')) {
                el.classList.remove('container--mobile');
            } else {
                el.classList.add('container--mobile');
            }
        });
    } else {
        containerDesktop.forEach(el =>
            el.classList.remove('container--mobile')
        );
    }
}

window.addEventListener('resize', checkScreenSize);

checkScreenSize();
/* end */

/*set form timer */
let hours = 23;
let minutes = 59;
let seconds = 59;

const hoursElement = document.querySelector('.form__hours');
const minutesElement = document.querySelector('.form__minutes');
const secondsElement = document.querySelector('.form__seconds');

function updateTimer() {
    seconds--;
    if (seconds < 0) {
        seconds = 59;
        minutes--;
    }
    if (minutes < 0) {
        minutes = 59;
        hours--;
    }

    // Обновление значений на странице
    hoursElement.textContent = hours < 10 ? '0' + hours : hours;
    minutesElement.textContent = minutes < 10 ? '0' + minutes : minutes;
    secondsElement.textContent = seconds < 10 ? '0' + seconds : seconds;

    // Проверка на окончание времени
    if (hours === 0 && minutes === 0 && seconds === 0) {
        clearInterval(timerInterval);
        alert('Время истекло!');
    }
}

const timerInterval = setInterval(updateTimer, 1000);
/* end */

/* set product count */
const currentNumber = document.querySelector('#counter');

const randomNumber = () => {
    currentNumber.textContent = Math.round(
        Math.random() * currentNumber.textContent
    );

    if (currentNumber.textContent <= 2) {
        currentNumber.textContent = 53;
    }
};

const formBtn = document
    .querySelector('.form__btn')
    .addEventListener('click', e => e.preventDefault());

setInterval(randomNumber, 3000);
/* end */
