export function renderPastPoll(poll) {
    const pollDiv = document.createElement('div');
    pollDiv.classList.add('pollCard');

    const questionEl = document.createElement('h3');

    const optionContainer = document.createElement('div');
    optionContainer.classList.add('optionsContainer');

    const option1Div = document.createElement('div');
    option1Div.classList.add('optionDiv');

    const option1El = document.createElement('p');
    const result1El = document.createElement('p');
    option1El.classList.add('option');

    const option2Div = document.createElement('div');
    option2Div.classList.add('optionDiv');

    const option2El = document.createElement('p');
    const result2El = document.createElement('p');
    option2El.classList.add('option');

    questionEl.textContent = poll.question;
    option1El.textContent = poll.option1;
    result1El.textContent = poll.result1;
    option2El.textContent = poll.option2;
    result2El.textContent = poll.result2;
    
    option1Div.append(option1El, result1El);
    option2Div.append(option2El, result2El);

    optionContainer.append(option1Div, option2Div);

    pollDiv.append(questionEl, optionContainer);

    return pollDiv;
}