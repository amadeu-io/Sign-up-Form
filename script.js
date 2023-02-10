// counts characters only
function countCharacters(str) {
    return str.replace(/\s/g, '').length;
};

// list of some weak passwords
const commonPasswords = [
    "password",
    "123456",
    "qwerty",
    "admin",
    "letmein",
    "welcome",
    "monkey",
    "abc123",
    "111111",
    "password1",
    "1234",
    "sunshine",
    "iloveyou",
    "princess",
    "admin123",
    "welcome1",
    "dragon",
    "password12",
    "password123456"
];

// returns a strenght score for a password
function checkPasswordStrength(password) {
    let strength = 0;
    if (commonPasswords.includes(password)) {
        return 'Weak';
    } if (password.length < 8) {
        return 'Weak';
    } if (password.length >= 12) {
         strength += 1;
    } if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
        strength += 1;
    } if (password.match(/([0-9])/)) {
        strength += 1;
    } if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) {
        strength += 1;
    } if (password.match(/(.*[!,%,&,@,#,$,^,*,?,_,~].*[!,%,&,@,#,$,^,*,?,_,~])/)) {
        strength += 1;
    };
    
    if (strength < 2) {
        return "Weak";
    } else if (strength == 2) {
        return "Mild";
    } else {
        return "Strong";
    };
};

const blue = document.getElementById('blue');
const green = document.getElementById('green');
const orange = document.getElementById('orange');
const body = document.querySelector('body');
const createAccount = document.getElementById('create-account');
const style = document.querySelector('style')
const input = document.querySelectorAll('input');
const validation = document.querySelectorAll('.validation');
const themes = [blue, green, orange];
  

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

// validate email
let email = input[2];
let emailValidation = validation[2];
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
email.addEventListener('blur', function() { 

    // once blur happens, positive feedback appears in real time
    email.addEventListener('input', function() {
        if (emailRegex.test(email.value)) {
            emailValidation.innerHTML = '';
            email.style.borderColor = 'green';
        } else {
            emailValidation.innerHTML = '';
            email.style.borderColor = '';
        };
    });

    if (emailRegex.test(email.value)) {
        emailValidation.innerHTML = '';
        email.style.borderColor = 'green';
    } else {
        emailValidation.innerHTML = 'Enter a valid email'
        email.style.borderColor = 'red';
    };
});

// validate phone
let phone = input[3];
let phoneValidation = validation[3];
const phoneRegex = /^[\+\-\d]+$/;
phone.addEventListener('blur', function() {

    // once blur happens, positive feedback appears in real time
    phone.addEventListener('input', function() {
        if (phoneRegex.test(phone.value) && phone.value.length > 7) {
            phoneValidation.innerHTML = '';
            phone.style.borderColor = 'green';
        } else {
            phoneValidation.innerHTML = '';
            phone.style.borderColor = '';
        };
    });

    if (phoneRegex.test(phone.value) && phone.value.length > 7) {
        phoneValidation.innerHTML = '';
        phone.style.borderColor = 'green';
    } else {
        phoneValidation.innerHTML = 'Enter a valid phone number'
        phone.style.borderColor = 'red';
    };
})

// password strenght
let password = input[4];
let passwordValidation = validation[4];
password.addEventListener('input', function() {    
    passwordValidation.innerHTML = `Strenght: ${checkPasswordStrength(password.value)}`;

    // default style
    passwordValidation.style.color = 'black';   
    password.style.borderColor = 'black';

    // don't show message when there are no typed characters
    if (password.value == 0) {
        passwordValidation.innerHTML = '';
    };
});

password.addEventListener('blur', function() {
    if (checkPasswordStrength(password.value) == 'Weak') { // weak password
        password.style.borderColor = 'red';
        passwordValidation.style.color = 'red';
        passwordValidation.innerHTML = 'Strength: Weak';
    } else { // mild or strong password
        password.style.borderColor = 'green';
    };
});

// matching passwords
let passwordMatch = input[5];
let passwordMatchValidation = validation[5];
passwordMatch.addEventListener('input', function() { // don't reveal information while typing
        passwordMatch.style.borderColor = '';
        passwordMatchValidation.innerHTML = '';
});

passwordMatch.addEventListener('blur', function() {
    if (checkPasswordStrength(password.value) == 'Weak') { // if password is weak, always show red border
        passwordMatch.style.borderColor = 'red';
        passwordMatchValidation.innerHTML = '';
    } else if (passwordMatch.value == password.value) {
        passwordMatch.style.borderColor = 'green';
        passwordMatchValidation.innerHTML = '';
    } else {
        passwordMatch.style.borderColor = 'red';
        passwordMatchValidation.style.color = 'red';
        passwordMatchValidation.innerHTML = 'Passwords do not match';
    }
});