const blue = document.querySelector('.blue');
const green = document.querySelector('.green');
const orange = document.querySelector('.orange');
const body = document.querySelector('body');
const themes = [blue, green, orange];

for (let theme in themes) {
    themes[theme].addEventListener('click', function() {
        let color = event.target.className;
        body.style.background = `var(--${color}-gradient)`;
    })
};
