/********** DOM ELEMENTS **********/

const passwordInput = document.querySelector('.password') as HTMLInputElement;
const face = document.querySelector('.animation') as HTMLDivElement;
const pupils = document.querySelectorAll('.pupil') as NodeListOf<HTMLDivElement>;
const mouth = document.querySelector('.mouth') as HTMLDivElement;
const leftEyebrow = document.querySelector('.left-eyebrow') as HTMLDivElement;
const rightEyebrow = document.querySelector('.right-eyebrow') as HTMLDivElement;

const uppercasesText = document.querySelector('.uppercasesCheckText') as HTMLParagraphElement;
const lowercasesText = document.querySelector('.lowercasesCheckText') as HTMLParagraphElement;
const numbersCasesText = document.querySelector('.numbersCheckText') as HTMLParagraphElement;
const symbolsCasesText = document.querySelector('.symbolsCheckText') as HTMLParagraphElement;
const lengthCasesText = document.querySelector('.lengthCheckText') as HTMLParagraphElement;

/********** VARIABLES **********/

let posX : string, posY : string

/********** REGEXP **********/

const passwordRegexp : RegExp = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])(?!.* ).{8,}$/

const upperCasesRegexp : RegExp = /[A-Z]/;
const lowerCasesRegexp : RegExp = /[a-z]/;
const numbersRegexp : RegExp = /[0-9]/;
const symbolsRegexp : RegExp = /[#?!@$%^&*-]/;

/********** EVENT LISTENERS **********/

passwordInput.addEventListener('keyup', (e : KeyboardEvent) => {

    moveEyes(e);
    checkPassword(passwordInput.value, passwordRegexp);

})

/********** FUNCTIONS **********/

function moveEyes(e : KeyboardEvent) : void {

    let target : EventTarget = e.target;
    const cursorXpositions : number = (target as HTMLInputElement).selectionStart
    let posX : number = 10 + cursorXpositions * 100 / 20;
    pupils.forEach((pupil : HTMLDivElement) : void => {
        if(posX > 100){
             pupil.style.left = '100%'
        } else {
             pupil.style.left = `${posX}%`
        }
    })

}

function checkPassword(password: string, regexp: RegExp) : void {

    if(password.match(regexp)){
        mouth.style.transform = "translateX(-50%) rotate(360deg)"
        leftEyebrow.style.transform = "rotate(45deg)";
        rightEyebrow.style.transform = "rotate(-45deg)";
        face.style.backgroundColor = "indianred";
    } else {
        mouth.style.transform = "translateX(-50%) rotate(180deg)"
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

function displayText(input : HTMLInputElement, text: HTMLParagraphElement, regexp : RegExp){

    if(input.value.match(regexp)){
        text.style.opacity = "1";
        text.style.color = "green";
    } else {
        text.style.opacity = "0.1";
        text.style.color = "black";
    }

}

function checkLength(input: HTMLInputElement, minLength: number, text : HTMLParagraphElement){

    if(input.value.length >= minLength){
        text.style.opacity = "1";
        text.style.color = "green";
    } else {
        text.style.opacity = "0.1";
        text.style.color = "black";
    }

}

