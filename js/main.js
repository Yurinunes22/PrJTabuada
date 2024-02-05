const botaoDisparaTabuadaConsole = document.querySelector('.btn-console');

const caixaEntradaTabuada = document.querySelector('#tabuada-number');


botaoDisparaTabuadaConsole.addEventListener('click', () => {
    const entradaUsuario = parseInt(document.querySelector
        ('#tabuada-number').value);
    mostrarTabuadaNoConsole(entradaUsuario);


});

//mostrar a tabuada quando o evento clicar no enter acontecer 
 
// caixaEntradaTabuada.addEventListener('keyup', (e)=> {
// if (e.key === 'Enter') {
//     mostrarTabuadaNoConsole(caixaEntradaTabuada.value);
//     mostrarTabuadanoDom(caixaEntradaTabuada.value);
// }
// })

//caixaEntradaTabuada.addEventListener('keyup', this, verificarTecla);
caixaEntradaTabuada.addEventListener('keyup', verificarTecla);
//ou

//associando uma variavel a um elemento, teremos disponiveis os dados do evento em si os dado do elemento

function verificarTecla(e){
     if (e.key === 'Enter') {
        mostrarTabuadaNoConsole(this.value);
        mostrarTabuadanoDom(this.value);
     }
}

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