function calcular() {
    let altura = document.getElementById('altura').value / 100;
    let peso = document.getElementById('peso').value;
    let resultado = document.getElementById('resultado');

    if (altura !== '' && peso !== '') {
        let valorIMC = ( peso / (altura * altura )).toFixed(1);

        let classificacao = '';
        if (valorIMC < 18.5) {
            classificacao = 'abaixo do peso.';
        } else if (valorIMC < 25) {
            classificacao = 'com o Peso Ideal. Parabéns!';
        } else if (valorIMC < 30) {
            classificacao = 'um pouco acima do peso.';
        } else if (valorIMC < 35) {
            classificacao = 'com obesidade grau I';
        } else if (valorIMC < 40) {
            classificacao = 'com obesidade grau II';
        } else {
            classificacao = 'com obesidade grau III';
        }

        resultado.textContent = "Seu IMC é "+ valorIMC +" você está "+ classificacao;
    } else {
        alert('Preencha os campos!')
        resultado.textContent = 'Preencha Todos os campos'
    }
}