// Verificar se o número é primo
function isPrime() {
    const number = parseInt(document.getElementById("inputValue").value);
    if (number <= 1) return showResult("Não é primo");
  
    for (let i = 2; i < number; i++) {
      if (number % i === 0) return showResult("Não é primo");
    }
    showResult("É primo");
  }
  
  // Calcular somatório até o número
  function calculateSum() {
    const number = parseInt(document.getElementById("inputValue").value);
    let sum = 0;
    for (let i = 1; i <= number; i++) {
      sum += i;
    }
    showResult(`Somatório: ${sum}`);
  }
  
  // Gerar sequência de Fibonacci até o número
  function generateFibonacci() {
    const number = parseInt(document.getElementById("inputValue").value);
    let sequence = [0, 1];
    for (let i = 2; i < number; i++) {
      sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    showResult(`Fibonacci: ${sequence.slice(0, number).join(", ")}`);
  }
  
  // Calcular o Máximo Divisor Comum (MDC) entre dois números
  function calculateGCD() {
    const number = parseInt(document.getElementById("inputValue").value);
    const otherNumber = parseInt(prompt("Insira o segundo número para calcular o MDC:"));
    
    let gcd = 1;
    for (let i = 1; i <= number && i <= otherNumber; i++) {
      if (number % i === 0 && otherNumber % i === 0) gcd = i;
    }
    showResult(`MDC: ${gcd}`);
  }
  
  // Ordenar uma lista de números
  function sortArray() {
    const numbers = prompt("Insira uma lista de números separados por vírgula:").split(",").map(Number);
    numbers.sort((a, b) => a - b);
    showResult(`Ordenado: ${numbers.join(", ")}`);
  }
  
  // Contar elementos de uma lista de números
  function countElements() {
    const numbers = prompt("Insira uma lista de números separados por vírgula:").split(",");
    const count = numbers.length;
    showResult(`Contagem: ${count} elementos`);
  }
  
  // Função para exibir o resultado
  function showResult(result) {
    document.getElementById("result").innerText = result;
  }
  

  