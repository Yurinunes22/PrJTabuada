const botaoDisparaTabuadaConsole = document.querySelector('.btn-console');




botaoDisparaTabuadaConsole.addEventListener('click', () => {
    const entradaUsuario = parseInt(document.querySelector
        ('#tabuada-number').value);
    mostrarTabuadaNoConsole(entradaUsuario);


});


function mostrarTabuadaNoConsole(numero) {

    if (!isNaN(numero)) {

        console.log(`Mostrando a tabuada ${numero}`);
        let contador = 0;
        while (contador <= 10) {
            console.log(`${numero} X ${contador} = ${numero * contador}`);
            contador++;

        }
        return
    }
    console.log("Número inválido! Digite um número válido")
}

const botaoDisparaTabuadaDom = document.querySelector('.btn-DOM');

botaoDisparaTabuadaDom.addEventListener('click', () => {
    const entradaUsuario = parseInt(document.querySelector
        ('#tabuada-number').value);
    mostrarTabuadanoDom(entradaUsuario);


});


function mostrarTabuadanoDom(numero) {

    const ulTabuada = document.querySelector('.tabuada');

    ulTabuada.innerHTML = "";

    if (!isNaN(numero)) {


        let contador = 0;
        while (contador <= 10) {
            const LinhaTabuada = document.createElement('li');
            LinhaTabuada.innerHTML = (`${numero} X ${contador} = ${numero * contador}`);
            contador++;
            ulTabuada.appendChild(LinhaTabuada);
        }
    }
    else{
        ulTabuada.innerHTML = 'Numero Inválido!!!'
    }
}