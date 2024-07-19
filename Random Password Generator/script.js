const passwordBox = document.querySelector("#password");

const lengthPass = 15;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase ="abcdefghijklmnopqrstuvwxyz";
const number = "0123456789"
const symbol = "!@#$$%^&*(){}:_+=-[]|/,.`~";

const allChars = upperCase + lowerCase + number + symbol;

function createPassword() {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while(lengthPass > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    passwordBox.value = password;
    //save password to localStorage 
    saveData(); 
}

function copyPassword () { 
    passwordBox.select();
    navigator.clipboard.writeText(passwordBox.value);
}

// save password to localStorage 
function saveData() {
    localStorage.setItem("password", passwordBox.value);
}

// show password from localStorage
function showData() {
    const savedPassword = localStorage.getItem("password");
    if(savedPassword) {
        passwordBox.value = savedPassword;
    }
}

// call showData when the page loads
// window.addEventListener("load", showData);
showData();

// // Optional: Generate a new password when the page loads if there's no saved password
// window.addEventListener('load', () => {
//     if (!localStorage.getItem("password")) {
//         createPassword();
//     }
// });
