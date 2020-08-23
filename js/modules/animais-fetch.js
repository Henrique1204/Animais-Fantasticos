import AnimaNumeros from "./anima-numeros.js";

export default function iniciarFetchAnimais() {
    function criarAnimal(animal) {
        const div = document.createElement("div");
        div.classList.add("nuemro-animal");
        div.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.total}</span>`;

        return div;
    }

    async function fetchAnimais(url) {
        try {
            const animaisResposta = await fetch(url);
            const animaisJson = await animaisResposta.json();

            animaisJson.forEach((animal) => {
                const divAnimal = criarAnimal(animal);
                const numerosGrid = document.querySelector("#numeros .numeros-grid");
                numerosGrid.appendChild(divAnimal);
            });

            const animaNumeros = new AnimaNumeros("[data-numero]", "#numeros", "ativo");
            animaNumeros.iniciar();
        } catch (erro) {
            console.log(erro);
        }
    }

    fetchAnimais('./animaisApi.json');
}
