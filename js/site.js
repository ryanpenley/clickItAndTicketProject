// controller
function getValues() {
    let inputString = document.getElementById('userString').value;

    let reversedString = checkForPalindrome(inputString);

    displayResults(reversedString);
}

// logic function
// reverse a string
function checkForPalindrome(userString) {
    let revString = '';

    for(let i = 0;  - 1; i >= 0; i = i - 1) {
        revString += userString[i];
    } if

    return revString;
}

// view function
function displayResults(revString) {
    document.getElementById('results').textContent = revString;
    document.getElementById('alert').classList.remove('invisible');
}