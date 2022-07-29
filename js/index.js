"use strict";
/********** DOM ELEMENTS **********/
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
/********** VARIABLES **********/
let posX, posY;
/********** REGEXP **********/
const passwordRegexp = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])(?!.* ).{8,}$/;
const upperCasesRegexp = /[A-Z]/;
const lowerCasesRegexp = /[a-z]/;
const numbersRegexp = /[0-9]/;
const symbolsRegexp = /[#?!@$%^&*-]/;
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
        face.style.backgroundColor = "indianred";
    }
    else {
        mouth.style.transform = "translateX(-50%) rotate(180deg)";
        leftEyebrow.style.transform = "rotate(0)";
        rightEyebrow.style.transform = "rotate(0)";
        face.style.backgroundColor = "antiquewhite";
    }
    displayText(passwordInput, uppercasesText, upperCasesRegexp);
    displayText(passwordInput, lowercasesText, lowerCasesRegexp);
    displayText(passwordInput, numbersCasesText, numbersRegexp);
    displayText(passwordInput, symbolsCasesText, symbolsRegexp);
    checkLength(passwordInput, 8, lengthCasesText);
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
