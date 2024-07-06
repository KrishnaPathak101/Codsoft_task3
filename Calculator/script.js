const display = document.getElementById('display');
let displayValue = '';

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.textContent;
        
        if (buttonText === 'C') {
            displayValue = '';
        } else if (buttonText === '←') {
            displayValue = displayValue.slice(0, -1);
        } else if (buttonText === '=') {
            try {
                displayValue = eval(displayValue).toString();
            } catch {
                displayValue = 'Error';
            }
        } else {
            displayValue += buttonText;
        }
        
        display.textContent = displayValue;
    });
});
