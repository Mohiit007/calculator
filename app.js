const display = document.querySelector('#display');
function appendval(val) {
    display.value += val;
}

function clear_val() {
    display.value = "";
}

function backspace() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'ERROR';
    }
}
