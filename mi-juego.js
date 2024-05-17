function checkAnswer() {
    // Obtiene los valores de los lados A y B y la respuesta del jugador
    const sideA = parseFloat(document.getElementById('sideA').value);
    const sideB = parseFloat(document.getElementById('sideB').value);
    const guess = parseFloat(document.getElementById('guess').value);
    
    // Verifica que los valores sean números válidos
    if (!sideA || !sideB || sideA <= 0 || sideB <= 0 || !guess || guess <= 0) {
        document.getElementById('result').innerText = "Por favor, ingresa valores válidos para A, B y tu respuesta.";
        return;
    }
    
    // Calcula la hipotenusa usando el Teorema de Pitágoras
    const hypotenuse = Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2)).toFixed(2);
    
    // Compara la respuesta del jugador con la hipotenusa calculada
    if (Math.abs(hypotenuse - guess) < 0.01) {
        document.getElementById('result').innerText = `¡Correcto! La hipotenusa es: ${hypotenuse}`;
    } else {
        document.getElementById('result').innerText = `Incorrecto. La hipotenusa es: ${hypotenuse}`;
    }
}
