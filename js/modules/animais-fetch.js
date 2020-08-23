import AnimaNumeros from "./anima-numeros.js";

export default function fetchAnimais(url, alvo) {
    function criarAnimal(animal) {
        const div = document.createElement("div");
        div.classList.add("nuemro-animal");
        div.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.total}</span>`;

        return div;
    }

    function preencherAnimais(animal) {
        const divAnimal = criarAnimal(animal);
        const numerosGrid = document.querySelector(alvo);
        numerosGrid.appendChild(divAnimal);
    }

    function iniciarNumeros() {
        const animaNumeros = new AnimaNumeros("[data-numero]", "#numeros", "ativo");
        animaNumeros.iniciar();
    }

    async function criarAnimais() {
        try {
            const animaisResposta = await fetch(url);
            const animaisJson = await animaisResposta.json();

            animaisJson.forEach((animal) => preencherAnimais(animal));
            iniciarNumeros();
        } catch (erro) {
            console.log(erro);
        }
    }

    return criarAnimais();
}
