export function renderPastPoll(poll) {
    const pollDiv = document.createElement('div');
    const questionEl = document.createElement('h3');
    const option1Div = document.createElement('div');
    const option1El = document.createElement('p');
    const result1El = document.createElement('p');
    const option2Div = document.createElement('div');
    const option2El = document.createElement('p');
    const result2El = document.createElement('p');

    questionEl.textContent = poll.question;
    option1El.textContent = poll.option1;
    result1El.textContent = poll.result1;
    option2El.textContent = poll.option2;
    result2El.textContent = poll.result2;
    
    option1Div.append(option1El, result1El);
    option2Div.append(option2El, result2El);

    pollDiv.append(questionEl, option1Div, option2Div);

    return pollDiv;
}