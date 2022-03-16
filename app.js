// import functions and grab DOM elements
import { renderPastPoll } from './render-utils.js';
//buttons
const submitButton = document.querySelector('#submitBtn');
const finishPollButton = document.querySelector('#finishBtn');
const addResult1Button = document.querySelector('#result1AddBtn');
const subtractResult1Button = document.querySelector('#result1SubtractBtn');
const addResult2Button = document.querySelector('#result2AddBtn');
const subtractResult2Button = document.querySelector('#result2SubtractBtn');

//content elements
const option1El = document.querySelector('#option1');
const result1El = document.querySelector('#result1');
const option2El = document.querySelector('#option2');
const result2El = document.querySelector('#result2');
const currentQuestion = document.querySelector('#currentQuestion');

const questionInput = document.querySelector('#question');
const option1Input = document.getElementById('option1Input');
const option2Input = document.getElementById('option2Input');

const pastPollDiv = document.getElementById('pastPollsContainer');

// let state
let pastPolls = [];
let question = '';
let result1 = 0;
let result2 = 0;
let option1 = '';
let option2 = '';


// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

submitButton.addEventListener('click', () => {
    displayCurrentPoll();

    question = questionInput.value;
    option1 = option1Input.value;
    option2 = option2Input.value;
});

finishPollButton.addEventListener('click', () => {
    //create a past poll object
    const poll = makePoll();

    //append past poll object to the pastpolls array
    pastPolls.push(poll);

    //clear the dom of past polls
    pastPollDiv.innerHTML = '';

    //clear the dom of current poll text
    resetCurrentPoll();
     
    //display a dom element for all past polls in the past polls array
    displayFinishedPoll();
});

addResult1Button.addEventListener('click', () => {
  //add from result1
    result1++;
  //display new result1 value
    result1El.textContent = result1;
});

subtractResult1Button.addEventListener('click', () => {
  //add from result1
    result1--;
  //display new result1 value
    result1El.textContent = result1;
});

addResult2Button.addEventListener('click', () => {
  //add to result2
    result2++;
  //display new result2 value
    result2El.textContent = result2;
});

subtractResult2Button.addEventListener('click', () => {
  //subtract from result2
    result2--;
  //display new result2 value
    result2El.textContent = result2;
});


function displayCurrentPoll() {
    currentQuestion.textContent = questionInput.value;
    option1El.textContent = option1Input.value;
    option2El.textContent = option2Input.value;
    result1El.textContent = result1;
    result2El.textContent = result2;
}

function displayFinishedPoll() {
    for (let poll of pastPolls) {
        const pollEl = renderPastPoll(poll);
        pastPollDiv.append(pollEl);
    }
}

function makePoll() {
    return {
        question: question,
        option1: option1,
        option2: option2,
        result1: result1,
        result2: result2
    };
}

function resetCurrentPoll() {
    currentQuestion.textContent = '';
    option1El.textContent = '';
    option2El.textContent = '';
    result1El.textContent = '';
    result2El.textContent = '';
    question = '';
    result1 = 0;
    result2 = 0;
    option1 = '';
    option2 = '';
    questionInput.value = '';
    option1Input.value = '';
    option2Input.value = '';
}