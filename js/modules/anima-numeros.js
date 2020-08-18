export default function iniciarAnimaNumeros() {
    const numeros = document.querySelectorAll("[data-numero]");

    function animarNumeros() {
        if (numeros.length) {
            numeros.forEach((numero) => {
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
            });
        }
    }

    let observador;

    function manipularMutacao(mutacao) {
        if (mutacao[0].target.classList.contains("ativo")) {
            observador.disconnect();
            animarNumeros();
        }
    }

    observador = new MutationObserver(manipularMutacao);
    observador.observe(document.querySelector("#numeros"), { attributes: true });
}
