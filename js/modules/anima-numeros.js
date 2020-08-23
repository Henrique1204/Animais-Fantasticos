export default class AnimaNumeros {
    constructor(numeros, observadorAlvo, observadorClasse) {
        this.numeros = document.querySelectorAll(numeros);
        this.observadorAlvo = document.querySelector(observadorAlvo);
        this.observadorClasse = observadorClasse;

        this.manipularMutacao = this.manipularMutacao.bind(this);
    }

    static incrementarNumeros(numero) {
        const total = +numero.innerText;
        const incremento = Math.floor(total / 100);

        let inicio = 0;
        const intervalor = setInterval(() => {
            inicio += incremento;

            numero.innerText = inicio;

            if (inicio > total) {
                numero.innerText = total;
                clearInterval(intervalor);
            }
        }, 35 * Math.random());
    }

    animarNumeros() {
        if (this.numeros.length) {
            this.numeros.forEach((numero) => this.constructor.incrementarNumeros(numero));
        }
    }

    manipularMutacao(mutacao) {
        if (mutacao[0].target.classList.contains(this.observadorClasse)) {
            this.observador.disconnect();
            this.animarNumeros();
        }
    }

    addObservarMutacao() {
        this.observador = new MutationObserver(this.manipularMutacao);
        this.observador.observe(this.observadorAlvo, { attributes: true });
    }

    iniciar() {
        if (this.numeros.length && this.observadorAlvo) {
            this.addObservarMutacao();
        }

        return this;
    }
}
