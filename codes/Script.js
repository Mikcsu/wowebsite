

document.getElementById('sr').addEventListener('click', function(){
    alert('makiia');
});
document.getElementById('aram').addEventListener('click', function(){
    alert('aah an enjoyer');
});
document.getElementById('tft').addEventListener('click', function(){
    alert('ewww barf');
});




const textBox = document.getElementById('champ');
const teemo = document.getElementById('temo');
teemo.src = 'codes/pictures/teemo.jpg';
const yasuo = document.getElementById('yas');
yasuo.src = 'codes/pictures/yasuo.jpg';

// Add an input event listener to the text box
textBox.addEventListener('keypress', function() {
    if(event.key === 'Enter'){
    // Get the text entered in the text box
    const enteredText = textBox.value.toLowerCase(); // Convert to lowercase for case-insensitivity
    


    if (enteredText === 'teemo') {
        // Display an alert if the entered text is "hello"
        alert('You have no SOUL!');
        teemo.style.display = 'block';
    }
    else if(enteredText === 'yasuo'){
        yasuo.style.display = 'block';
    }
    else{
        alert('no makiia');
    }
}
});

const timerElement = document.getElementById('timer');
const stopButton = document.getElementById('stop-button');
let seconds = 0;
let timerInterval; // Variable to store the interval

// Function to start the timer
function startTimer() {
    timerInterval = setInterval(function() {
        seconds++;
        timerElement.textContent = seconds + ' seconds';
    }, 1000);
}

// Start the timer when the page loads


const kysely = document.getElementById('kysely');

document.getElementById('alert-button').addEventListener('click', function() {
    kysely.style.display = 'block';
    startTimer();
});

const quizForm = document.getElementById('kysely');
const submitButton = document.getElementById('submit-button');
const scoreElement = document.getElementById('score');

submitButton.addEventListener('click', function() {
    let score = 0;
    clearInterval(timerInterval);
    alert('syyslomalle vois mennä');

    // Get the selected answers and calculate the score
    const answers = quizForm.elements;
    for (let i = 0; i < answers.length; i++) {
        if (answers[i].type === 'radio' && answers[i].checked) {
            score += parseInt(answers[i].value);
        }
    }

    // Display the score
    scoreElement.textContent = score;
});