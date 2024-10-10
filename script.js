function primoOuNao(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;

    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) return false;
    }
    return true;
}

document.getElementById('verificar').addEventListener('click', function() {
    const numero = parseInt(document.getElementById('numero').value);
    const resultado = document.getElementById('resultado');

    if (isNaN(numero)) {
        resultado.textContent = 'Por favor, insira um número válido.';
        return;
    }

    const isPrimo = primoOuNao(numero);
    resultado.textContent = isPrimo ? `${numero} é um número primo.` : `${numero} não é um número primo.`;
});
