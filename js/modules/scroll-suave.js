export default class ScrollSuave {
    constructor(links, opcoes) {
        this.linksInterno = document.querySelectorAll(links);

        if (opcoes === undefined) {
            this.opcoes = { behavior: "smooth", block: "start" };
        } else {
            this.opcoes = opcoes;
        }

        // Isso aqui garante a referência do this seja a classe.
        this.scrollSuave = this.scrollSuave.bind(this);
    }

    scrollSuave(evento) {
        evento.preventDefault();

        const href = evento.currentTarget.getAttribute("href");
        const section = document.querySelector(href);

        // Esse this pode dar conflito, por fazer referência para onde o evento está sendo usado.
        // Linha 13 evita esse conflito.
        section.scrollIntoView(this.opcoes);
    }

    addLinkEvento() {
        if (this.linksInterno.length) {
            this.linksInterno.forEach((item) => item.addEventListener("click", this.scrollSuave));
        }
    }

    iniciar() {
        if (this.linksInterno.length) {
            this.addLinkEvento();
        }

        // Retorna a classe para conseguir encadear um método após a chamada deste método.
        return this;
    }
}
