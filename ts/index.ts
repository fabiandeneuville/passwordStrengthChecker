/********** DOM ELEMENTS **********/

const body = document.querySelector('body') as HTMLBodyElement;
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

const result = document.querySelector('.result') as HTMLSpanElement;

/********** VARIABLES **********/

let posX : string, posY : string

const verybad : string = 'crimson';
const bad : string = 'orange';
const average : string = 'yellow';
const good : string = 'lightgreen';
const verygood : string = 'green';

/********** REGEXP **********/

const passwordRegexp : RegExp = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])(?!.* ).{16,}$/

const upperCasesRegexp : RegExp = /[A-Z]/;
const lowerCasesRegexp : RegExp = /[a-z]/;
const numbersRegexp : RegExp = /[0-9]/;
const symbolsRegexp : RegExp = /[#?!@$%^&*-]/;

const onlyNumbers : RegExp = /^[0-9]+$/;
const onlyLowercases : RegExp = /^[a-z]+$/;
const onlyUppercases : RegExp = /^[A-Z]+$/;
const onlyLetters : RegExp = /^[a-zA-Z]+$/;
const lettersAndNumbers : RegExp = /^[a-zA-Z0-9]+$/;
const lettersNumbersAndSymbols : RegExp = /^[a-zA-Z0-9#?!@$%^&*-_]+$/;

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
    checkLength(passwordInput, 16, lengthCasesText);

    estimateCrackingTime(password)
    
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

function estimateCrackingTime(password: string){
    // ONLY NUMBERS
    if(password.length <= 11 && password.match(onlyNumbers)){
        result.textContent = "Instantly";
        body.style.background = verybad;
    } else if (password.length === 12 && password.match(onlyNumbers)) {
        result.textContent = "2 secs";
        body.style.background = bad;
    } else if (password.length === 13 && password.match(onlyNumbers)) {
        result.textContent = "19 secs";
        body.style.background = bad;
    } else if (password.length === 14 && password.match(onlyNumbers)) {
        result.textContent = "3 mins";
        body.style.background = bad;
    } else if (password.length === 15 && password.match(onlyNumbers)) {
        result.textContent = "32 mins";
        body.style.background = bad;
    } else if (password.length === 16 && password.match(onlyNumbers)) {
        result.textContent = "5 hours";
        body.style.background = bad;
    } else if (password.length === 17 && password.match(onlyNumbers)) {
        result.textContent = "2 days";
        body.style.background = bad;
    } else if (password.length >= 18 && password.match(onlyNumbers)) {
        result.textContent = "3 weeks";
        body.style.background = bad;
    } 
    // ONLY LOWERCASES
    else if (password.length <= 8 && password.match(onlyLowercases)){
        result.textContent = "Instantly";
        body.style.background = verybad;
    } else if (password.length === 9 && password.match(onlyLowercases)){
        result.textContent = "10 secs";
        body.style.background = bad;
    } else if (password.length === 10 && password.match(onlyLowercases)){
        result.textContent = "4 mins";
        body.style.background = bad;
    } else if (password.length === 11 && password.match(onlyLowercases)){
        result.textContent = "2 hours";
        body.style.background = bad;
    } else if (password.length === 12 && password.match(onlyLowercases)){
        result.textContent = "2 days";
        body.style.background = bad;
    } else if (password.length === 13 && password.match(onlyLowercases)){
        result.textContent = "2 months";
        body.style.background = bad;
    } else if (password.length === 14 && password.match(onlyLowercases)){
        result.textContent = "4 years";
        body.style.background = average;
    } else if (password.length === 15 && password.match(onlyLowercases)){
        result.textContent = "100 years";
        body.style.background = average;
    } else if (password.length === 16 && password.match(onlyLowercases)){
        result.textContent = "3k years";
        body.style.background = average;
    } else if (password.length === 17 && password.match(onlyLowercases)){
        result.textContent = "69k years";
        body.style.background = average;
    } else if (password.length >= 18 && password.match(onlyLowercases)){
        result.textContent = "2m years";
        body.style.background = good;
    }
    // ONLY UPERCASES
    else if (password.length <= 8 && password.match(onlyUppercases)){
        result.textContent = "Instantly";
        body.style.background = verybad;
    } else if (password.length === 9 && password.match(onlyUppercases)){
        result.textContent = "10 secs";
        body.style.background = bad;
    } else if (password.length === 10 && password.match(onlyUppercases)){
        result.textContent = "4 mins";
        body.style.background = bad;
    } else if (password.length === 11 && password.match(onlyUppercases)){
        result.textContent = "2 hours";
        body.style.background = bad;
    } else if (password.length === 12 && password.match(onlyUppercases)){
        result.textContent = "2 days";
        body.style.background = bad;
    } else if (password.length === 13 && password.match(onlyUppercases)){
        result.textContent = "2 months";
        body.style.background = bad;
    } else if (password.length === 14 && password.match(onlyUppercases)){
        result.textContent = "4 years";
        body.style.background = average;
    } else if (password.length === 15 && password.match(onlyUppercases)){
        result.textContent = "100 years";
        body.style.background = average;
    } else if (password.length === 16 && password.match(onlyUppercases)){
        result.textContent = "3k years";
        body.style.background = average;
    } else if (password.length === 17 && password.match(onlyUppercases)){
        result.textContent = "69k years";
        body.style.background = average;
    } else if (password.length >= 18 && password.match(onlyUppercases)){
        result.textContent = "2m years";
        body.style.background = good;
    }
    // ONLY LETTERS (LOWERCASES AND UPPERCASES)
    else if (password.length <= 6 && password.match(onlyLetters)){
        result.textContent = "Instantly";
        body.style.background = verybad;
    } else if (password.length === 7 && password.match(onlyLetters)){
        result.textContent = "2 secs";
        body.style.background = bad;
    } else if (password.length === 8 && password.match(onlyLetters)){
        result.textContent = "2 mins";
        body.style.background = bad;
    } else if (password.length === 9 && password.match(onlyLetters)){
        result.textContent = "1 hour";
        body.style.background = bad;
    } else if (password.length === 10 && password.match(onlyLetters)){
        result.textContent = "3 days";
        body.style.background = bad;
    } else if (password.length === 11 && password.match(onlyLetters)){
        result.textContent = "5 months";
        body.style.background = bad;
    } else if (password.length === 12 && password.match(onlyLetters)){
        result.textContent = "24 years";
        body.style.background = average;
    } else if (password.length === 13 && password.match(onlyLetters)){
        result.textContent = "1k years";
        body.style.background = average;
    } else if (password.length === 14 && password.match(onlyLetters)){
        result.textContent = "64k years";
        body.style.background = average;
    } else if (password.length === 15 && password.match(onlyLetters)){
        result.textContent = "3m years";
        body.style.background = good;
    } else if (password.length === 16 && password.match(onlyLetters)){
        result.textContent = "173m years";
        body.style.background = good;
    } else if (password.length === 17 && password.match(onlyLetters)){
        result.textContent = "9bn years";
        body.style.background = good;
    } else if (password.length >= 18 && password.match(onlyLetters)){
        result.textContent = "467bn years";
        body.style.background = verygood;
    }
    // LETTERS (LOWERCASES AND UPPERCASES) AND NUMBERS
    else if (password.length <= 6 && password.match(lettersAndNumbers)){
        result.textContent = "Instantly";
        body.style.background = verybad;
    } else if (password.length === 7 && password.match(lettersAndNumbers)){
        result.textContent = "7 secs";
        body.style.background = bad;
    } else if (password.length === 8 && password.match(lettersAndNumbers)){
        result.textContent = "7 mins";
        body.style.background = bad;
    } else if (password.length === 9 && password.match(lettersAndNumbers)){
        result.textContent = "7 hours";
        body.style.background = bad;
    } else if (password.length === 10 && password.match(lettersAndNumbers)){
        result.textContent = "3 weeks";
        body.style.background = bad;
    } else if (password.length === 11 && password.match(lettersAndNumbers)){
        result.textContent = "3 years";
        body.style.background = average;
    } else if (password.length === 12 && password.match(lettersAndNumbers)){
        result.textContent = "200 years";
        body.style.background = average;
    } else if (password.length === 13 && password.match(lettersAndNumbers)){
        result.textContent = "12k years";
        body.style.background = average;
    } else if (password.length === 14 && password.match(lettersAndNumbers)){
        result.textContent = "750k years";
        body.style.background = good;
    } else if (password.length === 15 && password.match(lettersAndNumbers)){
        result.textContent = "46m years";
        body.style.background = good;
    } else if (password.length === 16 && password.match(lettersAndNumbers)){
        result.textContent = "3bn years";
        body.style.background = good;
    } else if (password.length === 17 && password.match(lettersAndNumbers)){
        result.textContent = "179bn years";
        body.style.background = verygood;
    } else if (password.length >= 18 && password.match(lettersAndNumbers)){
        result.textContent = "11tn years";
        body.style.background = verygood;
    }
    // LETTERS (LOWERCASES AND UPPERCASES), NUMBERS AND SYMBOLS
    else if (password.length <= 6 && password.match(lettersNumbersAndSymbols)){
        result.textContent = "Instantly";
        body.style.background = verybad;
    } else if (password.length === 7 && password.match(lettersNumbersAndSymbols)){
        result.textContent = "31 secs";
        body.style.background = bad;
    } else if (password.length === 8 && password.match(lettersNumbersAndSymbols)){
        result.textContent = "39 mins";
        body.style.background = bad;
    } else if (password.length === 9 && password.match(lettersNumbersAndSymbols)){
        result.textContent = "2 days";
        body.style.background = bad;
    } else if (password.length === 10 && password.match(lettersNumbersAndSymbols)){
        result.textContent = "5 months";
        body.style.background = bad;
    } else if (password.length === 11 && password.match(lettersNumbersAndSymbols)){
        result.textContent = "34 years";
        body.style.background = average;
    } else if (password.length === 12 && password.match(lettersNumbersAndSymbols)){
        result.textContent = "3k years";
        body.style.background = average;
    } else if (password.length === 13 && password.match(lettersNumbersAndSymbols)){
        result.textContent = "202k years";
        body.style.background = good;
    } else if (password.length === 14 && password.match(lettersNumbersAndSymbols)){
        result.textContent = "16m years";
        body.style.background = good;
    } else if (password.length === 15 && password.match(lettersNumbersAndSymbols)){
        result.textContent = "1bn years";
        body.style.background = good;
    } else if (password.length === 16 && password.match(lettersNumbersAndSymbols)){
        result.textContent = "92bn years";
        body.style.background = verygood;
    } else if (password.length === 17 && password.match(lettersNumbersAndSymbols)){
        result.textContent = "7tn years";
        body.style.background = verygood;
    } else if (password.length >= 18 && password.match(lettersNumbersAndSymbols)){
        result.textContent = "438tn years";
        body.style.background = verygood;
    } else {
        result.textContent = "??"
    }
}

