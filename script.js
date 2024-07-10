/* add mobile container */

const containerDesktop = document.querySelectorAll('.container');
console.log(containerDesktop);

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

/* form timer */
// Установка начальных значений времени
let hours = 23;
let minutes = 59;
let seconds = 59;

// Получение элементов для отображения времени
const hoursElement = document.querySelector('.form__hours');
const minutesElement = document.querySelector('.form__minutes');
const secondsElement = document.querySelector('.form__seconds');

// Функция для обновления таймера
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

// Запуск таймера
const timerInterval = setInterval(updateTimer, 1000);

let originalString = document.querySelector('.form__attention').textContent;
console.log(originalString);
let numbers = originalString.match(/\d+/g); // Находим все числа в строке

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function updateString() {
    let randomIndex = getRandomInt(0, numbers.length - 1);
    let randomNumber = getRandomInt(1, 53); // Генерируем случайное число от 10 до 99
    let newString = originalString.replace(numbers[randomIndex], randomNumber);
    console.log(newString);
}

setInterval(updateString, getRandomInt(1000, 5000)); // Вызываем функцию updateString с рандомным интервалом от 1 до 5 мин
