const blue = document.getElementById('blue');
const green = document.getElementById('green');
const orange = document.getElementById('orange');
const body = document.querySelector('body');
const themes = [blue, green, orange];

for (let theme in themes) {
    let color = themes[theme]; // blue, green, orange HTML divs
    color.addEventListener('click', function() {
        body.style.background = `var(--${color.id}-gradient)`; //color.id is simply a string

        // remove previous borders
        for (let i = 0; i < themes.length; i++) {
            themes[i].classList.remove('theme-border'); 
        };

        color.classList.add('theme-border');
    })
};
