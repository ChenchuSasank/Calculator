let currentInput = "";
let darkMode = false;

function appendCharacter(char) {
    currentInput += char;
    updateOutput();
}

function appendOperator(operator) {
    currentInput += operator;
    updateOutput();
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    updateOutput();
}

function clearAll() {
    currentInput = "";
    updateOutput();
}

function calculateResult() {
    try {
        const result = eval(currentInput);
        currentInput = result.toString();
        updateOutput();
    } catch (error) {
        currentInput = "Error";
        updateOutput();
    }
}

function updateOutput() {
    document.getElementById("output").textContent = currentInput;
}

function toggleDarkMode() {
    const body = document.body;
    darkMode = !darkMode;
    body.classList.toggle("dark-mode", darkMode);
    updateOutput();
}