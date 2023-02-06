const blue = document.getElementById('blue');
const green = document.getElementById('green');
const orange = document.getElementById('orange');
const body = document.querySelector('body');
const createAccount = document.getElementById('create-account');
const style = document.querySelector('style')
const input = document.querySelectorAll('input');
const validation = document.querySelectorAll('.validation');
const themes = [blue, green, orange];

// counts characters only
function countCharacters(str) {
    return str.replace(/\s/g, '').length;
};

// style according to theme
for (let theme in themes) {
    let color = themes[theme]; // blue, green & orange HTML circle buttons
    color.addEventListener('click', function() {
        body.style.background = `var(--${color.id}-gradient)`; //color.id is simply 'blue', 'green'...
        createAccount.style.backgroundColor = `var(--${color.id}-solid)`;

        // remove previous button theme borders
        for (let i = 0; i < themes.length; i++) {
            themes[i].classList.remove('theme-border'); 
        };

        // add current circle button theme border
        color.classList.add('theme-border');
    });
};

// validate first name
let firstName = input[0];
let firstNameValidation = validation[0];
firstName.addEventListener('blur', function() { 
    if (countCharacters(firstName.value) >= 1) { // has atleast one character
        firstNameValidation.innerHTML = '';
        firstName.style.borderColor = 'green';
        
    } else { // is left blank
        firstNameValidation.innerHTML = 'Name is required';
        firstNameValidation.style.color = 'red';
        firstName.style.borderColor = 'red';

        // after the error text is shown, the moment a user presses a key it disappears
        firstName.addEventListener('input', function() {
            firstNameValidation.innerHTML = '';
            firstName.style.borderColor = 'green';
        });
    };
});


// validate last name
let lastName = input[1];
let lastNameValidation = validation[1];
lastName.addEventListener('blur', function() { 
    if (countCharacters(lastName.value) >= 1) { // has atleast one character
        lastNameValidation.innerHTML = '';
        lastName.style.borderColor = 'green';
        
    } else { // is left blank
        lastNameValidation.innerHTML = 'Last name is required';
        lastNameValidation.style.color = 'red';
        lastName.style.borderColor = 'red';

        // after the error text is shown, the moment a user presses a key it disappears
        lastName.addEventListener('input', function() {
            lastNameValidation.innerHTML = '';
            lastName.style.borderColor = 'green';
        });
    };
});


