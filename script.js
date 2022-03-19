const form = document.getElementById('form');
const username = document.getElementById('Username');
const email = document.getElementById('email');
const password = document.getElementById('Password');
const repassword = document.getElementById('Repassword');

function error(input, message) {
    input.className = 'form-control is-invalid';
    const div = input.nextElementSibling;
    div.innerText = message;
    div.className = 'invalid-feedback';
}

function success(input) {
    input.className = 'form-control is-valid';
}

function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   
    if(re.test(input.value)) {
        success(input);
    } else {
        error(input, 'Üzgünüz Hatalı bir mail adresi girdiniz!');
    }
}

function checkRequired(inputs) {
    inputs.forEach(function(input) {
        if(input.value === '') {
            error(input, `${input.id} Parola Eşleşmiyor!`);
        } else {
            success(input);
        }
    });  
}

function checkLength(input, min, max) {
    if (input.value.length < min) {
        error(input, `${input.id} En az ${min} karakter olmalıdır!`);
    }else if (input.value.length > max) {
        error(input, `${input.id} En fazla ${max} karakter olmalıdır!`);
    }else {
        success(input);
    }
}

function checkPasswords(input1,input2) {
    if(input1.value !== input2.value) {
        error(input2, 'Üzgünüm Parolalarınız eşleşmiyor!');
    }
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    checkRequired([username,email,password,repassword,]);
    checkEmail(email);
    checkLength(username,7,15);
    checkLength(password,7,12);
    checkPasswords(password,repassword);

});