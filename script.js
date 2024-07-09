/* add mobile container */

const containerDesktop = document.querySelectorAll('.container');
console.log(containerDesktop);

function checkScreenSize() {
    if (window.innerWidth < 485) {
        containerDesktop.forEach(el => el.classList.add('container--mobile'));
    } else {
        containerDesktop.forEach(el =>
            el.classList.remove('container--mobile')
        );
    }
}

window.addEventListener('resize', checkScreenSize);

checkScreenSize();
