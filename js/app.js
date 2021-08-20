function getPin() {
    let pin = Math.round(Math.random() * 10000);
    let pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {
        // console.log('got 3 digit and calling again', pin);
        return getPin();
    }
}

document.getElementById("genPin").addEventListener("click", function(){
function generatePin() {
    let pin = getPin();
    document.getElementById('display-pin').value = pin;
    let failError2 = document.getElementById('notify-fail2');
    failError2.style.display = 'none';
}
generatePin();
});

document.getElementById('key-pad').addEventListener('click', function (event) {
    let number = event.target.innerText;
    let calcInput = document.getElementById('typed-numbers');
    if (isNaN(number)) { 
        if (number == 'C') {
            calcInput.value = '';
        }
    }
    else {
        let previousNumber = calcInput.value;
        let newNumber = previousNumber + number;
        calcInput.value = newNumber;
    }
});

function verifyPin() {
    let pin = document.getElementById('display-pin').value;
    let typedNumbers = document.getElementById('typed-numbers').value;
    let successMessage = document.getElementById('notify-success');
    let failError = document.getElementById('notify-fail');
    let failError2 = document.getElementById('notify-fail2');
    if (pin != "") {
    if (pin == typedNumbers) {
        successMessage.style.display = 'block';
        failError.style.display = 'none';
        failError2.style.display = 'none';
    }
    else {
        successMessage.style.display = 'none';
        failError.style.display = 'block';
        failError2.style.display = 'none';
    }}else{
      failError2.style.display = 'block';
    }
}