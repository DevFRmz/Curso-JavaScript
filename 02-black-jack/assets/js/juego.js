
(() => {
    'use strict'

    let deck = [],
        tipos = ['C', 'D', 'H', 'S'],/* son los tipos de cartas que hay */
        especiales = ['A', 'J', 'Q', 'K'],
        puntosJugador = 0, puntosComputadora = 0;

    /* Esta función recibe un array y desordena los elementos que tenga */
    const shuffle = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    const createDeck = () => {
        for (let i = 2; i <= 10; i++) {
            for (let tipo of tipos) {
                deck.push(i + tipo);
            }
        }
        for (let tipo of tipos) {
            for (let especial of especiales) {
                deck.push(especial + tipo);
            }
        }
        return shuffle(deck);
    }

    /* verifica si hay cartas en el deck, si las hay elimina una y la retorna, si no muestra
        un error */
    const pedirCarta = () => (deck.length > 0) ? deck.pop() : console.error('No hay cartas en el deck');

    /* retorna el valor de la carta en numero entero */
    const valorCarta = (carta) => {
        const valor = carta.substring(0, carta.length - 1);/* substring retorna el numero de letras que requieras de un string */
        return (isNaN(valor)) ? (valor === 'A' ? 11 : 10) : valor * 1;/* al multiplicar un string que sea un numero por 1, lo convierte en numero y deja de ser string */
    }


    createDeck();

    /* ----- Referencias de elementos HTML ----- */
    const btnNuevo = document.querySelector('#btn-nuevo');
    const btnPedir = document.querySelector('#btn-pedir');
    const btnDetener = document.querySelector('#btn-detener');
    const puntos = document.querySelectorAll('small');
    const jugadorCartas = document.querySelectorAll('.jugador-cartas');
    const winOrLose = document.querySelectorAll('.winOrLose');


    /* ----- Mensajes win or lose ----- */
    const mensajeGanador = () => {
        /* creamos un mensaje por medio de un h3  */
        const win = document.createElement('h3').innerText = 'Ganaste!!';
        /* agregamos este mensaje al objeto del dom del html deseado */
        winOrLose[0].append(win);
        /* le agregamos la clase win al objeto del dom */
        winOrLose[0].className = 'win';
    }
    const mensajePerdedor = () => {
        const lose = document.createElement('h3').innerText = 'PERDISTE!!';
        winOrLose[0].append(lose);
        winOrLose[0].className = 'lose';
    }
    const mensajeEmpate = () => {
        const empate = document.createElement('h3').innerText = 'Empate!!';
        winOrLose[0].append(empate);
        winOrLose[0].className = 'empate';
    }

    /* turno computadora */
    const turnoComputadora = (puntosJugador) => {
        do {
            const carta = pedirCarta();
            puntosComputadora += valorCarta(carta);
            puntos[1].innerText = puntosComputadora;

            const imgCarta = document.createElement('img');
            imgCarta.src = `assets/cartas/${carta}.png`;
            imgCarta.className = 'carta';
            jugadorCartas[1].append(imgCarta);

        } while (puntosComputadora < puntosJugador && puntosJugador <= 21);
    }



    /* ----- Eventos ----- */
    btnPedir.addEventListener('click', () => {
        const carta = pedirCarta();
        puntosJugador += valorCarta(carta);
        puntos[0].innerText = puntosJugador;


        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${carta}.png`;
        imgCarta.className = 'carta';
        jugadorCartas[0].append(imgCarta);

        if (puntosJugador > 21) {
            mensajePerdedor();
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora(puntosJugador);
        }
        else if (puntosJugador === 21) {
            turnoComputadora(puntosJugador);

            if (puntosJugador == puntosComputadora) {
                mensajeEmpate();
            }
            else {
                mensajeGanador();
                btnPedir.disabled = true;
                btnDetener.disabled = true;
            }
        }
    });

    btnDetener.addEventListener('click', () => {
        btnPedir.disabled = true;
        btnDetener.disabled = true;

        turnoComputadora(puntosJugador);

        if (puntosJugador < puntosComputadora && puntosComputadora <= 21) {
            mensajePerdedor();
        }
        else if (puntosJugador === puntosComputadora) {
            mensajeEmpate();
        }
        else if (puntosJugador > puntosComputadora || puntosComputadora > 21) {
            mensajeGanador();
        }
    });

    btnNuevo.addEventListener('click', () => {
        puntosJugador = 0;
        puntosComputadora = 0;
        puntos[0].innerText = puntosJugador;
        puntos[1].innerText = puntosComputadora;

        deck = [];
        createDeck();

        winOrLose[0].innerText = '';
        jugadorCartas[0].innerText = '';
        jugadorCartas[1].innerText = '';

        btnPedir.disabled = false;
        btnDetener.disabled = false;

    });


})();