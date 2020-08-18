export default class AccordionList {
    constructor(listaItens, classeAtiva) {
        this.accordinList = document.querySelectorAll(listaItens);
        this.classeAtiva = (classeAtiva === undefined) ? "ativo" : classeAtiva;
    }

    toggleAccordion(item) {
        item.classList.toggle(this.classeAtiva);
        item.nextElementSibling.classList.toggle(this.classeAtiva);
    }

    addEvento() {
        if (this.accordinList.length) {
            this.accordinList.forEach((item) => {
                item.addEventListener("click", () => this.toggleAccordion(item));
            });
        }
    }

    iniciar() {
        if (this.accordinList.length) {
            this.toggleAccordion(this.accordinList[0]);
            this.addEvento();
        }

        return this;
    }
}
