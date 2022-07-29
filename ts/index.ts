/********** DOM ELEMENTS **********/

const passwordInput = document.querySelector('.password') as HTMLInputElement;
const pupils = document.querySelectorAll('.pupil') as NodeListOf<HTMLDivElement>;
const mouth = document.querySelector('.mouth') as HTMLDivElement;
const leftEyebrow = document.querySelector('.left-eyebrow') as HTMLDivElement;
const rightEyebrow = document.querySelector('.right-eyebrow') as HTMLDivElement;

/********** VARIABLES **********/

let posX : string, posY : string

const passwordRegexp : RegExp = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])(?!.* ).{8,}$/

/********** EVENT LISTENERS **********/

passwordInput.addEventListener('keyup', (e : KeyboardEvent) => {

    moveEyes(e);
    checkPassword(passwordInput.value, passwordRegexp);

})

/********** FUNCTIONS **********/

// Moving eyes on input event

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

// Animating face when password is checked

function checkPassword(password: string, regexp: RegExp) : void {

    if(password.match(regexp)){
        mouth.style.transform = "translateX(-50%) rotate(360deg)"
        leftEyebrow.style.transform = "rotate(45deg)";
        rightEyebrow.style.transform = "rotate(-45deg)"
    } else {
        mouth.style.transform = "translateX(-50%) rotate(180deg)"
        leftEyebrow.style.transform = "rotate(0)";
        rightEyebrow.style.transform = "rotate(0)"
    }
}



