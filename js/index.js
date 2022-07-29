"use strict";
/********** DOM ELEMENTS **********/
const body = document.querySelector('body');
const passwordInput = document.querySelector('.password');
const face = document.querySelector('.animation');
const pupils = document.querySelectorAll('.pupil');
const mouth = document.querySelector('.mouth');
const leftEyebrow = document.querySelector('.left-eyebrow');
const rightEyebrow = document.querySelector('.right-eyebrow');
const uppercasesText = document.querySelector('.uppercasesCheckText');
const lowercasesText = document.querySelector('.lowercasesCheckText');
const numbersCasesText = document.querySelector('.numbersCheckText');
const symbolsCasesText = document.querySelector('.symbolsCheckText');
const lengthCasesText = document.querySelector('.lengthCheckText');
const result = document.querySelector('.result');
/********** VARIABLES **********/
let posX, posY;
const verybad = 'crimson';
const bad = 'orange';
const average = 'yellow';
const good = 'lightgreen';
const verygood = 'limegreen';
/********** REGEXP **********/
const passwordRegexp = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])(?!.* ).{16,}$/;
const upperCasesRegexp = /[A-Z]/;
const lowerCasesRegexp = /[a-z]/;
const numbersRegexp = /[0-9]/;
const symbolsRegexp = /[#?!@$%^&*-]/;
const onlyNumbers = /^[0-9]+$/;
const onlyLowercases = /^[a-z]+$/;
const onlyUppercases = /^[A-Z]+$/;
const onlyLetters = /^(?=.*?[A-Z])(?=.*?[a-z])[a-zA-Z]+$/;
const lettersAndNumbers = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])[a-zA-Z0-9]+$/;
const lettersNumbersAndSymbols = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).+$/;
/********** EVENT LISTENERS **********/
passwordInput.addEventListener('keyup', (e) => {
    moveEyes(e);
    checkPassword(passwordInput.value, passwordRegexp);
});
/********** FUNCTIONS **********/
function moveEyes(e) {
    let target = e.target;
    const cursorXpositions = target.selectionStart;
    let posX = 10 + cursorXpositions * 100 / 20;
    pupils.forEach((pupil) => {
        if (posX > 100) {
            pupil.style.left = '100%';
        }
        else {
            pupil.style.left = `${posX}%`;
        }
    });
}
function checkPassword(password, regexp) {
    if (password.match(regexp)) {
        mouth.style.transform = "translateX(-50%) rotate(360deg)";
        leftEyebrow.style.transform = "rotate(45deg)";
        rightEyebrow.style.transform = "rotate(-45deg)";
    }
    else {
        mouth.style.transform = "translateX(-50%) rotate(180deg)";
        leftEyebrow.style.transform = "rotate(0)";
        rightEyebrow.style.transform = "rotate(0)";
    }
    displayText(passwordInput, uppercasesText, upperCasesRegexp);
    displayText(passwordInput, lowercasesText, lowerCasesRegexp);
    displayText(passwordInput, numbersCasesText, numbersRegexp);
    displayText(passwordInput, symbolsCasesText, symbolsRegexp);
    checkLength(passwordInput, 16, lengthCasesText);
    estimateCrackingTime(password);
}
function displayText(input, text, regexp) {
    if (input.value.match(regexp)) {
        text.style.opacity = "1";
        text.style.color = "green";
    }
    else {
        text.style.opacity = "0.1";
        text.style.color = "black";
    }
}
function checkLength(input, minLength, text) {
    if (input.value.length >= minLength) {
        text.style.opacity = "1";
        text.style.color = "green";
    }
    else {
        text.style.opacity = "0.1";
        text.style.color = "black";
    }
}
function estimateCrackingTime(password) {
    // ONLY NUMBERS
    if (password.length <= 11 && password.match(onlyNumbers)) {
        result.textContent = "Instantly";
        body.style.background = verybad;
    }
    else if (password.length === 12 && password.match(onlyNumbers)) {
        result.textContent = "2 secs";
        body.style.background = bad;
    }
    else if (password.length === 13 && password.match(onlyNumbers)) {
        result.textContent = "19 secs";
        body.style.background = bad;
    }
    else if (password.length === 14 && password.match(onlyNumbers)) {
        result.textContent = "3 mins";
        body.style.background = bad;
    }
    else if (password.length === 15 && password.match(onlyNumbers)) {
        result.textContent = "32 mins";
        body.style.background = bad;
    }
    else if (password.length === 16 && password.match(onlyNumbers)) {
        result.textContent = "5 hours";
        body.style.background = bad;
    }
    else if (password.length === 17 && password.match(onlyNumbers)) {
        result.textContent = "2 days";
        body.style.background = bad;
    }
    else if (password.length >= 18 && password.match(onlyNumbers)) {
        result.textContent = "3 weeks";
        body.style.background = bad;
    }
    // ONLY LOWERCASES
    else if (password.length <= 8 && password.match(onlyLowercases)) {
        result.textContent = "Instantly";
        body.style.background = verybad;
    }
    else if (password.length === 9 && password.match(onlyLowercases)) {
        result.textContent = "10 secs";
        body.style.background = bad;
    }
    else if (password.length === 10 && password.match(onlyLowercases)) {
        result.textContent = "4 mins";
        body.style.background = bad;
    }
    else if (password.length === 11 && password.match(onlyLowercases)) {
        result.textContent = "2 hours";
        body.style.background = bad;
    }
    else if (password.length === 12 && password.match(onlyLowercases)) {
        result.textContent = "2 days";
        body.style.background = bad;
    }
    else if (password.length === 13 && password.match(onlyLowercases)) {
        result.textContent = "2 months";
        body.style.background = bad;
    }
    else if (password.length === 14 && password.match(onlyLowercases)) {
        result.textContent = "4 years";
        body.style.background = average;
    }
    else if (password.length === 15 && password.match(onlyLowercases)) {
        result.textContent = "100 years";
        body.style.background = average;
    }
    else if (password.length === 16 && password.match(onlyLowercases)) {
        result.textContent = "3k years";
        body.style.background = average;
    }
    else if (password.length === 17 && password.match(onlyLowercases)) {
        result.textContent = "69k years";
        body.style.background = average;
    }
    else if (password.length >= 18 && password.match(onlyLowercases)) {
        result.textContent = "2m years";
        body.style.background = good;
    }
    // ONLY UPERCASES
    else if (password.length <= 8 && password.match(onlyUppercases)) {
        result.textContent = "Instantly";
        body.style.background = verybad;
    }
    else if (password.length === 9 && password.match(onlyUppercases)) {
        result.textContent = "10 secs";
        body.style.background = bad;
    }
    else if (password.length === 10 && password.match(onlyUppercases)) {
        result.textContent = "4 mins";
        body.style.background = bad;
    }
    else if (password.length === 11 && password.match(onlyUppercases)) {
        result.textContent = "2 hours";
        body.style.background = bad;
    }
    else if (password.length === 12 && password.match(onlyUppercases)) {
        result.textContent = "2 days";
        body.style.background = bad;
    }
    else if (password.length === 13 && password.match(onlyUppercases)) {
        result.textContent = "2 months";
        body.style.background = bad;
    }
    else if (password.length === 14 && password.match(onlyUppercases)) {
        result.textContent = "4 years";
        body.style.background = average;
    }
    else if (password.length === 15 && password.match(onlyUppercases)) {
        result.textContent = "100 years";
        body.style.background = average;
    }
    else if (password.length === 16 && password.match(onlyUppercases)) {
        result.textContent = "3k years";
        body.style.background = average;
    }
    else if (password.length === 17 && password.match(onlyUppercases)) {
        result.textContent = "69k years";
        body.style.background = average;
    }
    else if (password.length >= 18 && password.match(onlyUppercases)) {
        result.textContent = "2m years";
        body.style.background = good;
    }
    // ONLY LETTERS (LOWERCASES AND UPPERCASES)
    else if (password.length <= 6 && password.match(onlyLetters)) {
        result.textContent = "Instantly";
        body.style.background = verybad;
    }
    else if (password.length === 7 && password.match(onlyLetters)) {
        result.textContent = "2 secs";
        body.style.background = bad;
    }
    else if (password.length === 8 && password.match(onlyLetters)) {
        result.textContent = "2 mins";
        body.style.background = bad;
    }
    else if (password.length === 9 && password.match(onlyLetters)) {
        result.textContent = "1 hour";
        body.style.background = bad;
    }
    else if (password.length === 10 && password.match(onlyLetters)) {
        result.textContent = "3 days";
        body.style.background = bad;
    }
    else if (password.length === 11 && password.match(onlyLetters)) {
        result.textContent = "5 months";
        body.style.background = bad;
    }
    else if (password.length === 12 && password.match(onlyLetters)) {
        result.textContent = "24 years";
        body.style.background = average;
    }
    else if (password.length === 13 && password.match(onlyLetters)) {
        result.textContent = "1k years";
        body.style.background = average;
    }
    else if (password.length === 14 && password.match(onlyLetters)) {
        result.textContent = "64k years";
        body.style.background = average;
    }
    else if (password.length === 15 && password.match(onlyLetters)) {
        result.textContent = "3m years";
        body.style.background = good;
    }
    else if (password.length === 16 && password.match(onlyLetters)) {
        result.textContent = "173m years";
        body.style.background = good;
    }
    else if (password.length === 17 && password.match(onlyLetters)) {
        result.textContent = "9bn years";
        body.style.background = good;
    }
    else if (password.length >= 18 && password.match(onlyLetters)) {
        result.textContent = "467bn years";
        body.style.background = verygood;
    }
    // LETTERS (LOWERCASES AND UPPERCASES) AND NUMBERS
    else if (password.length <= 6 && password.match(lettersAndNumbers)) {
        result.textContent = "Instantly";
        body.style.background = verybad;
    }
    else if (password.length === 7 && password.match(lettersAndNumbers)) {
        result.textContent = "7 secs";
        body.style.background = bad;
    }
    else if (password.length === 8 && password.match(lettersAndNumbers)) {
        result.textContent = "7 mins";
        body.style.background = bad;
    }
    else if (password.length === 9 && password.match(lettersAndNumbers)) {
        result.textContent = "7 hours";
        body.style.background = bad;
    }
    else if (password.length === 10 && password.match(lettersAndNumbers)) {
        result.textContent = "3 weeks";
        body.style.background = bad;
    }
    else if (password.length === 11 && password.match(lettersAndNumbers)) {
        result.textContent = "3 years";
        body.style.background = average;
    }
    else if (password.length === 12 && password.match(lettersAndNumbers)) {
        result.textContent = "200 years";
        body.style.background = average;
    }
    else if (password.length === 13 && password.match(lettersAndNumbers)) {
        result.textContent = "12k years";
        body.style.background = average;
    }
    else if (password.length === 14 && password.match(lettersAndNumbers)) {
        result.textContent = "750k years";
        body.style.background = good;
    }
    else if (password.length === 15 && password.match(lettersAndNumbers)) {
        result.textContent = "46m years";
        body.style.background = good;
    }
    else if (password.length === 16 && password.match(lettersAndNumbers)) {
        result.textContent = "3bn years";
        body.style.background = good;
    }
    else if (password.length === 17 && password.match(lettersAndNumbers)) {
        result.textContent = "179bn years";
        body.style.background = verygood;
    }
    else if (password.length >= 18 && password.match(lettersAndNumbers)) {
        result.textContent = "11tn years";
        body.style.background = verygood;
    }
    // LETTERS (LOWERCASES AND UPPERCASES), NUMBERS AND SYMBOLS
    else if (password.length <= 6 && password.match(lettersNumbersAndSymbols)) {
        result.textContent = "Instantly";
        body.style.background = verybad;
    }
    else if (password.length === 7 && password.match(lettersNumbersAndSymbols)) {
        result.textContent = "31 secs";
        body.style.background = bad;
    }
    else if (password.length === 8 && password.match(lettersNumbersAndSymbols)) {
        result.textContent = "39 mins";
        body.style.background = bad;
    }
    else if (password.length === 9 && password.match(lettersNumbersAndSymbols)) {
        result.textContent = "2 days";
        body.style.background = bad;
    }
    else if (password.length === 10 && password.match(lettersNumbersAndSymbols)) {
        result.textContent = "5 months";
        body.style.background = bad;
    }
    else if (password.length === 11 && password.match(lettersNumbersAndSymbols)) {
        result.textContent = "34 years";
        body.style.background = average;
    }
    else if (password.length === 12 && password.match(lettersNumbersAndSymbols)) {
        result.textContent = "3k years";
        body.style.background = average;
    }
    else if (password.length === 13 && password.match(lettersNumbersAndSymbols)) {
        result.textContent = "202k years";
        body.style.background = good;
    }
    else if (password.length === 14 && password.match(lettersNumbersAndSymbols)) {
        result.textContent = "16m years";
        body.style.background = good;
    }
    else if (password.length === 15 && password.match(lettersNumbersAndSymbols)) {
        result.textContent = "1bn years";
        body.style.background = good;
    }
    else if (password.length === 16 && password.match(lettersNumbersAndSymbols)) {
        result.textContent = "92bn years";
        body.style.background = verygood;
    }
    else if (password.length === 17 && password.match(lettersNumbersAndSymbols)) {
        result.textContent = "7tn years";
        body.style.background = verygood;
    }
    else if (password.length >= 18 && password.match(lettersNumbersAndSymbols)) {
        result.textContent = "438tn years";
        body.style.background = verygood;
    }
    else {
        result.textContent = "??";
    }
}
