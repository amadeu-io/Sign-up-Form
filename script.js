const blue = document.getElementById('blue');
const green = document.getElementById('green');
const orange = document.getElementById('orange');
const body = document.querySelector('body');
const createAccount = document.getElementById('create-account');
const themes = [blue, green, orange];

for (let theme in themes) {
    let color = themes[theme]; // blue, green & orange HTML circle buttons
    color.addEventListener('click', function() {
        body.style.background = `var(--${color.id}-gradient)`; //color.id is simply 'blue', 'green'...
        createAccount.style.backgroundColor = `var(--${color.id}-solid)`;

        // remove previous circle button's borders
        for (let i = 0; i < themes.length; i++) {
            themes[i].classList.remove('theme-border'); 
        };

        color.classList.add('theme-border');
    })
};
