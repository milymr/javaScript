const display = document.getElementById('display');
const historyDiv = document.getElementById('history');
let history = [];
let expression = '';

document.querySelectorAll('.buttons button').forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (value === 'C') {
      expression = '';
      display.textContent = '';
    } else if (value === '←') {
      expression = expression.slice(0, -1);
      display.textContent = expression;
    } else if (value === '=') {
      try {
        const result = eval(expression.replace(/×/g, '*').replace(/÷/g, '/'));
        history.push(`${expression} = ${result}`);
        updateHistory();
        expression = result.toString();
        display.textContent = expression;
      } catch {
        display.textContent = 'Erro';
        expression = '';
      }
    } else {
      expression += value;
      display.textContent = expression;
    }
  });
});

function updateHistory() {
  historyDiv.innerHTML = history.slice(-5).reverse().map(item => `<div>${item}</div>`).join('');
}