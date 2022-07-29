"use strict";
/********** DOM ELEMENTS **********/
const passwordInput = document.querySelector('.password');
const pupils = document.querySelectorAll('.pupil');
const mouth = document.querySelector('.mouth');
const leftEyebrow = document.querySelector('.left-eyebrow');
const rightEyebrow = document.querySelector('.right-eyebrow');
/********** VARIABLES **********/
let posX, posY;
const passwordRegexp = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])(?!.* ).{8,}$/;
/********** EVENT LISTENERS **********/
passwordInput.addEventListener('keyup', (e) => {
    moveEyes(e);
    checkPassword(passwordInput.value, passwordRegexp);
});
/********** FUNCTIONS **********/
// Moving eyes on input event
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
// Animating face when password is checked
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
}
