let secretNumber = Math.trunc(Math.random() * 10) + 1;
console.log(secretNumber);
let input = document.querySelector('#input');
let mystrynum = document.querySelector(".secnum");
let message = document.querySelector(".message");
let currentlives = document.querySelector(".lives");
let highestScore = document.querySelector(".hscore");
let score = 5;
let highScore = 0;
// ========================================================\\
const displayMessage = (msg) => {
      message.textContent = msg;
    };
   const check = document.querySelector('.check').addEventListener('click', ()=>{
    if (input.value == ''){
        message.textContent='⛔ Please enter any number !';
    }
        else if (secretNumber == input.value) {
               message.textContent = "🎉 Currect !";
                   input.value = "";
                   mystrynum.textContent = secretNumber;
                   document.querySelector("body").style.backgroundColor = "#60b347";
                 mystrynum.style.width = "30rem";
                 if (score > highScore) {
                     highScore = score;
                     highestScore.textContent = score;
                 }
    }
    else if (secretNumber < input.value) {
        if(score > 1){

            message.textContent = "⏫ number is higher !";
            score--
            currentlives.textContent = `${score}`;
            input.value = "";
        }
        else{
            message.textContent='💥 Game Over !';
            input.value = "";
            currentlives.textContent = `0`;
            mystrynum.textContent = secretNumber;

        }
        }
        else if (secretNumber > input.value) {
            if(score > 1){

                message.textContent = "⏬ number is lower !";
                score--
                currentlives.textContent = `${score}`;
                input.value = "";
            }
            else{
                message.textContent='💥 Game Over !';
                input.value = "";
                currentlives.textContent = `0`;
                mystrynum.textContent = secretNumber;

            }
        }
})

document.querySelector('.again').addEventListener('click',  ()=> {
    score = 5;
     secretNumber = Math.trunc(Math.random() * 10) + 1;
    message.textContent = '🤔 Start guessing...';
    
    currentlives.textContent = score;
    document.querySelector('.secnum').textContent = '?';
    input.value = '';
    console.log(secretNumber);

    document.querySelector('body').style.backgroundColor = 'black';
    document.querySelector('.secnum').style.width = '110px';
  });



















//   else if (secretNumber == input.value) {
//       message.textContent = "🎉 Currect !";
//       input.value = "";
//       mystrynum.textContent = secretNumber;
//     if (score > highScore) {
//         highScore = score;
//         highestScore.textContent = score;
//     }
// } 
// else if (secretNumber < input.value) {
//     message.textContent = "⏫ number is higher !";
//     score--
//     currentlives.textContent = `${score}`;
//     input.value = "";
// }
// else if (secretNumber > input.value) {
//     message.textContent = "⏬ number is lower !";
//     score--
//     currentlives.textContent = `${score}`;
//     input.value = "";
// }
//     else if (score === 0){
//         message.textContent = "💥 Game Over !";
//     }



















    // document.querySelector("body").style.backgroundColor = "#60b347";
    // mystrynum.style.width = "30rem";
